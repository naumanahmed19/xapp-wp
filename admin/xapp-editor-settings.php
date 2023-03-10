<?php




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
		$postType = get_post_type( $_GET['post']);
		//append the new class
		$classes .= 'single-' . $postType;
	} 
	//next check if this is a new post
	elseif ( $pagenow ==='post-new.php' )  {
		//check if the post_type parameter is set
		if(isset($_GET['post_type'])) {
			//in this case you can get the post_type directly from the URL
			$classes .= 'single-' . urldecode($_GET['post_type']);
		} else {
			//if post_type is not set, a 'post' is being created
			$classes .= 'single-post';
		}


	}
return $classes;
}); 