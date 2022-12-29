<?php
/**
 * Plugin Name: Xapp templates importer
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This plugin will will help to import demo data and templates for xapp
 * Version: 1.0.0
 * Author: xvelopers
 *
 * @package xapp
 */

/**
 * Enqueue admin assets for this example.
 *
 * @param string $hook The current admin page.
 */
function load_custom_wp_admin_scripts( $hook ) {
	// // Load only on ?page=xapp-apps-page.
	// if ( 'toplevel_page_xapp-apps-page' !== $hook ) {
	// 	return;
	// }

	// Load the required WordPress packages.

	// Automatically load dependencies and version.
	$asset_file = include plugin_dir_path( __FILE__ ) . 'index.asset.php';

	// Enqueue CSS dependencies.
	foreach ( $asset_file['dependencies'] as $style ) {
		wp_enqueue_style( $style );
	}

	// Load our app.js.
	wp_register_script(
		'09-code-data-basics-esnext',
		plugins_url( 'index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true,
	);
	wp_enqueue_script( '09-code-data-basics-esnext' );

	// Load our style.css.
	wp_register_style(
		'09-code-data-basics-esnext',
		plugins_url( 'style.css', __FILE__ ),
		null,
		$asset_file['version'],
	);
	wp_enqueue_style( '09-code-data-basics-esnext' );





	

	
}
add_action( 'admin_enqueue_scripts', 'load_custom_wp_admin_scripts' );

