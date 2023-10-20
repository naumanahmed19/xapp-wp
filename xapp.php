<?php

/**
 * Plugin Name: Xapp WP - Mobile App Builder
 * Plugin URI: https://github.com/WordPress/xapp-wp
 * Description: Xapp WP is a mobile app builder for WordPress. It allows you to build mobile apps for iOS and Android, directly from your WordPress site.
 * Version: 1.0.0
 * Author: xvelopers
 *
 * @package xapp
 */

defined('ABSPATH') || exit;
define('XAPP_IMPORT_PATH', plugin_dir_path(__FILE__));
define('XAPP_IMPORT_URL', plugins_url('/', __FILE__));
define('XAPP_ASSETS_URL', plugins_url('/assets', __FILE__));
define('XAPP_POST_TYPE', 'xapp');


final class xapp
{

    /**
     * Plugin Version
     *
     * @since 1.2.0
     * @var string The plugin version.
     */
    const VERSION = '1.0.0';

    /**
     * Minimum PHP Version
     *
     * @since 1.2.0
     * @var string Minimum PHP version required to run the plugin.
     */
    const MINIMUM_PHP_VERSION = '7.0';

    /**
     * Constructor
     *
     * @since 1.0.0
     * @access public
     */
    public function __construct()
    {

        // Load translation
        add_action('init', array($this, 'i18n'));

        // Init Plugin
        add_action('plugins_loaded', array($this, 'init'));
    }

    /**
     * Load Textdomain
     *
     * Load plugin localization files.
     * Fired by `init` action hook.
     *
     * @since 1.2.0
     * @access public
     */
    public function i18n()
    {
        load_plugin_textdomain('xapp');
    }

    /**
     * Initialize the plugin
     *
     * Validates that Elementor is already loaded.
     * Checks for basic plugin requirements, if one check fail don't continue,
     * if all check have passed include the plugin class.
     *
     * Fired by `plugins_loaded` action hook.
     *
     * @since 1.2.0
     * @access public
     */
    public function init()
    {

        require_once XAPP_IMPORT_PATH . 'plugins.php';
        
    }
}
new xapp();


/**
 * Redirect to plugin dashboard after activation
 */
function xapp_activation_redirect($plugin)
{
    if ($plugin == plugin_basename(__FILE__)) {
        exit(wp_redirect(admin_url('edit.php?post_type=xapp&page=xapp-apps-page')));
    }
}
add_action('activated_plugin', 'xapp_activation_redirect');


/**
 * 
 * Whitelist xapp namesapce plublic routes for jwt plugin
 */

add_filter('jwt_auth_whitelist', function ($endpoints) {
    $xpp = array('/wp-json/xapp/*');
    return array_unique(array_merge($endpoints, $xpp));
});

add_filter(
    'jwt_auth_valid_credential_response',
    function ($response, $user) {

        $userController = new xapp_AuthController();
        $payload = array(
            'success' => true,
            "statusCode" => 200,
            'token' => $response['data']['token'],
            "message" => "Credential is valid",
        );
        $payload['user'] = $userController->get($user);
        return $payload;
    },
    10,
    2
);




/**
 * Allow json upload
 * 
 */
add_filter('upload_mimes', 'xapp_mime_types_json');
function xapp_mime_types_json($mimes)
{
    $mimes['json'] = 'application/json';
    $mimes['svg'] = 'image/svg+xml';
    $mimes['csv'] = 'text/csv';//for woo commerce import

    return $mimes;
}



//Rest add post featured iamge

function xapp_post_rest_payload($data, $post, $context)
{
    $featured_image_id = $data->data['featured_media']; // get featured image id
    $featured_image_url = wp_get_attachment_image_src($featured_image_id, 'original'); // get url of the original size

    if ($featured_image_url) {
        $data->data['featuredImage'] = $featured_image_url[0];
    }

    return $data;
}
add_filter('rest_prepare_post', 'xapp_post_rest_payload', 10, 3);
add_filter('rest_prepare_product', 'xapp_post_rest_payload', 10, 3);



/**
 * Update xApp theme JSON with custom settings for the container block.
 * This function is used for post type 
 *
 * @param WP_Theme_JSON $theme_json The WP_Theme_JSON object to update.
 * @return WP_Theme_JSON The updated WP_Theme_JSON object.
 */
function xapp_update_theme_json($theme_json)
{
    $new_data = array(
        'version'  => 2,
        'settings' => array(
            'blocks' => array(
                'xapp/container' => array(
                    'spacing' => array(
                        'units'    => array('px'),
                        'spacing_scale'  => array(
                            'operator' => '*',
                            'increment' => 1.5,
                            'steps' => 20,
                            'medium_step' => 1.5,
                            'unit' => 'px'
                        )
                    )
                )
            )
        )
    );

 
    // Update the WP_Theme_JSON object with custom settings.
    return $theme_json->update_with($new_data);
}

// Hook the xapp_update_theme_json() function to the 'wp_theme_json_data_theme' filter.
add_filter('wp_theme_json_data_theme', 'xapp_update_theme_json');

//prepare a rest response for wordpress post and add categories and tags by using $post->categories and $post->tags
function xapp_prepare_rest_post($data, $post, $request)
{
    // Get all categories for the post
    $categories = wp_get_post_categories($post->ID);

    // Convert category IDs to array of category objects
    $category_objects = array();
    foreach ($categories as $category_id) {
        $category_objects[] = get_category($category_id);
    }

    $data->data['categories'] = $category_objects;

    // Get all tags for the post
    $tags = wp_get_post_tags($post->ID);

    // Convert tag IDs to array of tag objects
    $tag_objects = array();
    foreach ($tags as $tag_id) {
        $tag_objects[] = get_tag($tag_id);
    }

    $data->data['tags'] = $tag_objects;

    // Check if ACF is active
    if (function_exists('get_fields')) {
        // Get the ACF custom fields for the post
        $acf_fields = get_fields($post->ID);

        // Add the ACF custom fields to the $data object
        $data->data['acf_fields'] = $acf_fields;
    }

    return $data;
}
add_filter('rest_prepare_post', 'xapp_prepare_rest_post', 10, 3);