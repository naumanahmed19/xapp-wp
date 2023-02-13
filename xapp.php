<?php
/**
 * Plugin Name: Xapp
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: A core xapp plugin to build mobile apps
 * Version: 1.0.1
 * Author: xvelopers
 *
 * @package xapp
 */

defined( 'ABSPATH' ) || exit;
define( 'XAPP_IMPORT_PATH', plugin_dir_path( __FILE__ ) );
define( 'XAPP_IMPORT_URL', plugins_url( '/', __FILE__ ) );
define( 'XAPP_ASSETS_URL', plugins_url( '/assets', __FILE__ ) );
define( 'XAPP_POST_TYPE', 'xapp' );


require_once untrailingslashit( plugin_dir_path( __FILE__ ) ) . '/admin/inc/custom-functions.php';


final class xapp {

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
	public function __construct() {
			 
		// Load translation
		add_action( 'init', array( $this, 'i18n' ) );

		// Init Plugin
		add_action( 'plugins_loaded', array( $this, 'init' ) );
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
	public function i18n() {
		load_plugin_textdomain( 'xapp' );
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
	public function init() {

        require_once XAPP_IMPORT_PATH . 'plugins.php';

		require_once XAPP_IMPORT_PATH . 'admin/patterns.php';



		new Patterns();
	}

}
new xapp();


/**
 * Redirect to plugin dashboard after activation
 */
function xapp_activation_redirect( $plugin ) {
    if( $plugin == plugin_basename( __FILE__ ) ) {
        exit( wp_redirect( admin_url( 'edit.php?post_type=xapp&page=xapp-apps-page' ) ) );
    }
}
add_action( 'activated_plugin', 'xapp_activation_redirect' );


/**
 * 
 * Whitelist xapp namesapce plublic routes for jwt plugin
 */

add_filter( 'jwt_auth_whitelist', function ( $endpoints ) {
	$xpp = array('/wp-json/xapp/v1/*');
	return array_unique( array_merge( $endpoints, $xpp ) );
} );
 
  
/**
 * Allow json upload
 * 
 */
add_filter( 'upload_mimes', 'xapp_mime_types_json' );
function xapp_mime_types_json( $mimes ) {
	$mimes['json'] = 'application/json'; 
  return $mimes;
}



//Rest add post featured iamge

function xapp_post_rest_payload( $data, $post, $context ) {
	$featured_image_id = $data->data['featured_media']; // get featured image id
	$featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'original' ); // get url of the original size
  
	if( $featured_image_url ) {
	  $data->data['featuredImage'] = $featured_image_url[0];
	}
  
	return $data;
  }
  add_filter( 'rest_prepare_post', 'xapp_post_rest_payload', 10, 3 );


  function my_block_pattern_categories( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug'  => 'xapp-buttons',
                'title' => __( 'Xapp Buttons', 'my-plugin' ),
            ),
        )
    );
}
add_filter( 'block_pattern_categories', 'my_block_pattern_categories', 10, 2 );

register_block_pattern(
    'my-plugin/text-button',
    array(
        'title'      => __( 'Text Button', 'my-plugin' ),
        'content'    => "<!-- wp:button -->\n<div class='wp-block-button'><a class='wp-block-button__link'>Button Text</a></div>\n<!-- /wp:button -->",
        'categories' => array( 'xapp-buttons' ),
    )
);