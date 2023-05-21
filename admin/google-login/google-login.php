<?php
    /*
    Plugin Name: Flutter Login
    */


  add_action('rest_api_init', function() {
    register_rest_route('xapp/v1', '/auth-google', array(
        'methods' => 'POST',
        'permission_callback' => '__return_true',
        'callback' => 'flutter_login_google_signin',
    ));
});


    function curl_get_responce_contents($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }
     function verifyToken($access_token){
        $url = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token='.$access_token;
        $response_contacts  =  curl_get_responce_contents($url);
        $response   =   (json_decode($response_contacts));

        if(isset($response->issued_to))
        {
            return  $response;
        }
     
        return false;
        
    }
    function flutter_login_google_signin(WP_REST_Request $request) {

        if(!class_exists('JWTAuth\Auth'))
            return new WP_Error('plugin_error', 'JWT plugin not activated', array('status' => 401));

   
        // Get the Google Sign-in data from the request
        $id_token = $request->get_param('id_token');
        $access_token = $request->get_param('access_token');
        // Validate the token using the Google API
        $payload = verifyToken($access_token);
        if (!$payload) {
            return new WP_Error('invalid_token', 'Invalid token', array('status' => 401));
        }
       $email =  $payload->email;
        // Check if the user already exists in WordPress
        $user = get_user_by('email', $email);
        if (!$user) {
            // Create a new WordPress user
            $request['username'] = sanitize_user($email);
            $request['email'] = $email; 
            $request['password'] = wp_generate_password();
            $request['first_name'] = $request['display_name'] ;
            $authCtrl = new AuthController();
       
         $user_id =  $authCtrl->register( $request->get_params());
           
            if (is_wp_error($user_id)) {
                return new WP_Error('create_user_failed', 'Failed to create user', array('status' => 500));
            }
            $user = get_user_by('id', $user_id);
        }

        // Log the user in to WordPress
        wp_set_current_user($user->ID);
        wp_set_auth_cookie($user->ID);


        $jwtAuth  = new JWTAuth\Auth();
        // Generate a JWT token
        $jwt_token =   $jwtAuth->generate_token($user);

        $userController = new AuthController();
            $payload = array(
            'success' => true,
            "statusCode"=> 200,
            'token'    =>  $jwt_token,
            "message"=> "Credential is valid",
        );
        $payload['user'] =	$userController->get($user);
        return $payload;
      
    }