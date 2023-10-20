<?php

 if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
 
class xapp_AuthController{

    public function __construct(){
    
    }

    public function get($user){
     
        $avatar = get_user_meta($user->ID,'avatar',true);
        $data['id'] =$user->ID;
        $data['email'] = $user->user_email;
        $data['firstName'] = $user->first_name;
        $data['lastName'] = $user->last_name;
        $data['display_name'] = $user->displayName;
        
        //$data['avatar'] = get_avatar_url( $current_user->ID, 64 ) ; 
        $data['avatar'] = $avatar ?  $avatar : get_avatar_url( $user->ID, 64 );

        return $data;
    }

    	/**
	 * Register a new user
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return array $args.
	 **/

     public function register($request = null) {
        $params = array(
            'username' => 'Username',
            'email' => 'Email',
            'password' => 'Password',
            'first_name' => 'First Name',
            'display_name' => 'Display Name'
        );
    
        $data = array();
    
        foreach ($params as $key => $label) {
            $value = isset($request[$key]) ? sanitize_text_field($request[$key]) : null;
    
            if (!$value) {
                $error = new WP_Error(
                    'missing_' . $key,
                    sprintf(__('%s field \'%s\' is required.', 'wp-rest-user'), $label, $key),
                    array('status' => 400)
                );
                return $error;
            }
    
            $data[$key] = $value;
        }
    
        $username = sanitize_user($data['username']);
        $email = sanitize_email($data['email']);
        $password = sanitize_text_field($data['password']);
        $first_name = sanitize_text_field($data['first_name']);
        $display_name = sanitize_text_field($data['display_name']) ?: $first_name;
        
        $role = class_exists( 'WooCommerce' ) ? 'customer': 'subscriber';
        $user_id = username_exists($username);
        if (!$user_id && !email_exists($email)) {
            $user_data = array(
                'user_login' => $username,
                'user_email' => $email,
                'user_pass' => $password,
                'first_name' => $first_name,
                'display_name' => $display_name,
                'role' => $role ,
            );
            $user_id = wp_insert_user($user_data);
            return $user_id;
        } else {
            $error = new WP_Error(
                'email_exists',
                __('Email or username already exists, please try \'Reset Password\'', 'wp-rest-user'),
                array('status' => 400)
            );
            return $error;
        }
    }

    public function update(WP_REST_Request $request) {
        $user_id = get_current_user_id();
        if ( $user_id === 0 ) {
            return new WP_Error( 'rest_forbidden', esc_html__( 'You are not currently logged in.' ), array( 'status' => 401 ) );
        }
    
        $updated_user_data = array(
            'ID'         => $user_id,
            'first_name' => $request->get_param( 'first_name' ),
            'last_name'  => $request->get_param( 'last_name' ),
        );
    
        wp_update_user( $updated_user_data );
    
        $user = get_user_by( 'id', $user_id );
        if ( empty( $user ) ) {
            return new WP_Error( 'rest_user_invalid_id', esc_html__( 'Invalid user ID.' ), array( 'status' => 400 ) );
        }
    
        return array(
            'data'   => $this->get( $user ),
            'status' => 200,
        );
    }

   
    /**
     *  change Avatar
     * 
     */
    function avatar($request) {
        if (!function_exists('wp_handle_upload')) {
            require_once(ABSPATH . 'wp-admin/includes/file.php');
        }
    
        // Sanitize and validate the user input
        $user_id = absint($request['user']); // Make sure it's an integer
        if ($user_id <= 0) {
            return 'Invalid user ID.';
        }
    
        // Check if the file is uploaded properly
        if (empty($_FILES['avatar'])) {
            return 'No file uploaded.';
        }
    
        // Escaping the file data before using it in queries
        $uploadedfile = $_FILES['avatar'];
        $uploadedfile['name'] = sanitize_file_name($uploadedfile['name']);
        $uploadedfile['type'] = sanitize_mime_type($uploadedfile['type']);
    
        $movefile = wp_handle_upload($uploadedfile, array('test_form' => false));
    
        if ($movefile && !isset($movefile['error'])) {
            $avatar_url = esc_url($movefile['url']); // Escape the URL before saving
    
        // Update or add user meta with the avatar URL
            if (get_user_meta($user_id, 'avatar', true)) {
                update_user_meta($user_id, 'avatar', $avatar_url);
            } else {
                add_user_meta($user_id, 'avatar', $avatar_url);
            }
        } else {
            return 'Error uploading the image: ' . esc_html($movefile['error']); // Escape the error message before returning
        }
    
        return 'Image uploaded.';
    }

    
}

?>