<?php
 
 if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
 
/**
 * Enque editor 
 * 
 */
// Register Custom Post Type
function xapp_post_type()
{

	$labels = array(
		'name'                  => _x('Apps', 'Post Type General Name', 'xapp'),
		'singular_name'         => _x('App', 'Post Type Singular Name', 'xapp'),
		'menu_name'             => __('Apps', 'xapp'),
		'name_admin_bar'        => __('Apps', 'xapp'),
		'archives'              => __('Item Archives', 'xapp'),
		'attributes'            => __('Item Attributes', 'xapp'),
		'parent_item_colon'     => __('Parent Item:', 'xapp'),
		'all_items'             => __('All Apps', 'xapp'),
		'add_new_item'          => __('Add New App', 'xapp'),
		'add_new'               => __('Add New', 'xapp'),
		'new_item'              => __('New Item', 'xapp'),
		'edit_item'             => __('Edit Item', 'xapp'),
		'update_item'           => __('Update Item', 'xapp'),
		'view_item'             => __('View Item', 'xapp'),
		'view_items'            => __('View Items', 'xapp'),
		'search_items'          => __('Search Item', 'xapp'),
		'not_found'             => __('Not found', 'xapp'),
		'not_found_in_trash'    => __('Not found in Trash', 'xapp'),
		'featured_image'        => __('Featured Image', 'xapp'),
		'set_featured_image'    => __('Set featured image', 'xapp'),
		'remove_featured_image' => __('Remove featured image', 'xapp'),
		'use_featured_image'    => __('Use as featured image', 'xapp'),
		'insert_into_item'      => __('Insert into item', 'xapp'),
		'uploaded_to_this_item' => __('Uploaded to this item', 'xapp'),
		'items_list'            => __('Items list', 'xapp'),
		'items_list_navigation' => __('Items list navigation', 'xapp'),
		'filter_items_list'     => __('Filter items list', 'xapp'),
	);
	$args = array(
		'label'                 => __('App', 'xapp'),
		'description'           => __('Create app using xapp plugin', 'xapp'),
		'labels'                => $labels,
		'supports'              => array('title', 'editor', 'custom-fields', 'revisions',),
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 200,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'show_in_rest'          => true,
		'rest_base'             => 'xapp',
		'template_lock'			=> 'insert',
		'capability_type' => 'page',
		'menu_icon' =>  'dashicons-smartphone',
		// 'capabilities' => array(
		//   'create_posts' => true, // Removes support for the "Add New" function ( use 'do_not_allow' instead of false for multisite set ups )
		// ),
		// 'map_meta_cap' => true, 
		// 'rest_controller_class' => 'WP_REST_BRAND_Controller',
	);


	register_post_type(XAPP_POST_TYPE, $args);
}
add_action('init', 'xapp_post_type', 0);
remove_theme_support('editor-styles');



function xapp_meta_fields()
{
	$fields = [
		'apiKey' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
		'email' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
		'xappItemId' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
		'xappItemVersion' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
		'xappItemMainPluginSlug' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
		'appBundleId' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
		'appIcon' => [
			'single' => true,
			'type'  => 'object',
			'default' => [],
			'show_in_rest' => array(
				'schema' => array(
					'type'       => 'object',
					'properties' => array(
						'id' => array(
							'type' => 'integer',

						),
						'url'  => array(
							'type' => 'string',

						),
					),
				),
			),
		],
		'appSplashIcon' => [
			'single' => true,
			'type'  => 'object',
			'default' => [],
			'show_in_rest' => array(
				'schema' => array(
					'type'       => 'object',
					'properties' => array(
						'id' => array(
							'type' => 'integer',
						),
						'url'  => array(
							'type' => 'string',
						),
					),
				),
			),
		],
		'appSplashColor' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
		],

		'appLocales' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
		'blockLocales' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
		'appEnv' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
		'appTheme' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
		'android' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
		'ios' => [
			'show_in_rest' => true,
			'single' => true,
			'type' => 'string',
			'default' => '',
		],
	];

	foreach ($fields as $key => $field) {
		register_post_meta(XAPP_POST_TYPE, $key, $field);
	}
}

add_action('rest_api_init', 'xapp_meta_fields', 0);





function xapp_register_template()
{
	$app = array(
		array(
			'xapp/screens', [
				'lock' => [
					"remove" => true,
					"move" => true,
				],
			],
		), //xapp/screeens
	);


	$template = $app;
	$post_type_object = get_post_type_object(XAPP_POST_TYPE);
	$post_type_object->template = $template;
}
add_action('init', 'xapp_register_template', 20);


/**
 * 
 * Register xapp page menu
 */
function xapp_admin_menu()
{
	add_submenu_page(
		'edit.php?post_type=' . XAPP_POST_TYPE . '',
		__('Get Started', 'xapp'),
		__('Get Started', 'xapp'),
		'manage_options',
		'xapp-apps-page',
		function () {
			echo '
			<div id="xapp-apps-page"></div>
		';
		}
	);
}
add_action('admin_menu', 'xapp_admin_menu');

// /**
//  * Before save update blocks meta data
//  */
// function xapp_before_save( $post_id, $post, $update )
// {
// 	if ( get_post_type( $post_id ) !== XAPP_POST_TYPE ) return;
	
// 	$post_content = $post->post_content;
// 	$strs = ["\"attrs\":[],","\"settings\":[],","\"style\":[],"];
// 	$replaceWith   = ["","",""];
// 	$post_content = str_replace($strs, $replaceWith, $post_content);
// 	$blocks = parse_blocks($post_content)[0];
	

// 	update_post_meta( $post_id, 'blocks',$blocks);
// }
// add_action( 'save_post', 'xapp_before_save', 99, 3 );
