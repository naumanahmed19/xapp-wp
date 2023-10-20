<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
 


function xapp_app_add_scripts(){
	if ( XAPP_POST_TYPE == get_post_type() )
		wp_enqueue_style(
			'xapp-editor',
			plugins_url( 'editor.css', __FILE__ ),
			
	);
 }
add_action( 'enqueue_block_editor_assets', 'xapp_app_add_scripts' );

/***
 * 
 * Disable extra editor styling
 */
add_action( 'add_meta_boxes', 'xapp_editor' );
function xapp_editor() {
	$screen = get_current_screen();
	if (XAPP_POST_TYPE === $screen->post_type ){
		remove_theme_support('editor-styles');
		remove_theme_support( 'wp-block-styles' );
		// Enqueue editor styles.
		add_theme_support( 'block-templates' );
		remove_editor_styles(  );
	}
}
	





add_filter('admin_body_class', function ($classes) { 
	//get current page
	global $pagenow;

	//check if the current page is post.php and if the post parameteris set
	if ( $pagenow ==='post.php' && isset($_GET['post']) ) {
		//get the post type via the post id from the URL
		$postType = get_post_type(sanitize_text_field($_GET['post']));
		//append the new class
		$classes .= 'single-' . $postType;

	} 
	//next check if this is a new post
	elseif ( $pagenow ==='post-new.php' )  {
		//check if the post_type parameter is set
		if (isset($_GET['post_type'])) {
			$post_type = sanitize_text_field($_GET['post_type']);
			$classes .= 'single-' . urldecode($post_type);
		} else {
			$classes .= 'single-post';
		}


	}
return $classes;
}); 





/**
 * Update autosaves before updating a post.
 *
 * Creates a new autosave for the post being updated, and updates its content
 * with the latest post content before saving it. This fixes the issue if a post
 * is updated and preview is requested.
 *
 * @param int $post_id The ID of the post being updated.
 * @return void
 */
function xapp_autosaves_before_update_post( $post_id ) {
	
	$post_type = get_post_type( $post_id );
    if ( $post_type !== XAPP_POST_TYPE ) {
        return; // only update autosaves for xapp posts
    }

    if ( wp_is_post_autosave( $post_id ) ) {
        return; // don't update autosaves of autosaves
    }

    // create a new autosave
    $autosave_id = wp_create_post_autosave( $post_id );

    if ( $autosave_id ) {
        // get the autosave post object
        $autosave_post = get_post( $autosave_id );

        // update the autosave post content with the latest post content
		$autosave_post->post_content = isset($_POST['content']) ? wp_kses_post($_POST['content']) : ''; // or however you get the latest content

        // save the updated autosave post
        wp_update_post( $autosave_post );
    }
}
add_action( 'pre_post_update', 'xapp_autosaves_before_update_post', 10, 1 );