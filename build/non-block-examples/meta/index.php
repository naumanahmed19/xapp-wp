<?php
/**
 * Plugin Name: Xapp Builder
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This plugin help to add build final with required settings
 * Version: 1.0.0
 * Author: xvelopers
 *
 * @package xapp
 */

defined( 'ABSPATH' ) || exit;



	/**
	 * Get preview files location
	 */
	function xappPreviewWebPath(){
		$abs =  rtrim(ABSPATH, '/');
		$path =  str_replace($abs,"",plugin_dir_path( __FILE__ ));
		$path =str_replace('\\', '/', $path);
		return $path.'web/';
	}
	

/**
 * Registers all block assets so that they can be enqueued through xapp in
 * the corresponding context.
 */
function xapp_builder_register_dependencies() {
	// Automatically load dependencies and version.
	$asset_file = include plugin_dir_path( __FILE__ ) . '/index.asset.php';

    // if ( ! file_exists( $asset_file ) ) {
	// 	throw new Error(
	// 		'You need to run `npm start` or `npm run build` for the "create-block/simple-guten-fields" block first.'
	// 	);
	// }

	wp_enqueue_script(
		'xapp-builder',
		plugins_url( 'index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);


	wp_localize_script(
		'xapp-builder',
		'xapp',
		[
			'siteUrl' => get_site_url(),
			'pluginsUrl' => content_url('/plugins'),
		]
	);

	// Register the post meta field the meta box will save to.
	// register_post_meta(
	// 	'post',
	// 	'example_meta_field',
	// 	array(
	// 		'show_in_rest' => true,
	// 		'single'       => true,
	// 		'type'         => 'string',
	// 	)
	// );
}
add_action( 'init', 'xapp_builder_register_dependencies' );

/**
 * Enqueue block editor assets for this example.
 */
function xapp_builder_enqueue_assets() {
	wp_enqueue_script( 'xapp-builder' );
}
add_action( 'enqueue_block_editor_assets', 'xapp_builder_enqueue_assets' );



function xapp_register_settings() {
	register_setting(
		'xapp_settings',
		'xapp_api_key',
		array(
			'type'         => 'string',
			'show_in_rest' => true,
		)
	);
}

add_action( 'init', 'xapp_register_settings' );


