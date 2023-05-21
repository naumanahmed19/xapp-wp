<?php
/**
 * Plugin Name: App Screen
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This a mockup block for xapp 
 * Version: 1.0.0
 * Author: xvelopers
 *
 * @package xapp
 */

defined( 'ABSPATH' ) || exit;



function xapp_block_screen() {
	register_block_type( __DIR__);
}
add_action( 'init', 'xapp_block_screen' );