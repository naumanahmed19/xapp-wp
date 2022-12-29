<?php
/**
 * @package xapp
 */

defined( 'ABSPATH' ) || exit;

define('XAPP_BLOCKS' , [

	'xapp/screens',

 ]);

/**
 * Admin 
 */
require_once XAPP_IMPORT_PATH . 'admin/xapp-register-post-type.php';
require_once XAPP_IMPORT_PATH . 'admin/xapp-routes.php';
require_once XAPP_IMPORT_PATH . 'admin/xapp-block-parser.php';



global $pagenow;
global $post;

function isXappEditor(){
    return ( isset($_GET['post']) && get_post_type($_GET['post'] ) == XAPP_POST_TYPE ) 
    || (isset($_GET['post_type']) && $_GET['post_type'] == XAPP_POST_TYPE );
}

if ($_GET['page'] =='xapp-apps-page' || $_GET['post_type'] ==XAPP_POST_TYPE) {

    require_once XAPP_IMPORT_PATH . 'build/non-block-examples/dahsboard/index.php';

    

    


}


function is_edit_page($new_edit = null){
    global $pagenow;
    //make sure we are on the backend
    if (!is_admin()) return false;

    
    if($new_edit == "edit")
        return in_array( $pagenow, array( 'post.php',  ) );
    elseif($new_edit == "new") //check for new post page
        return in_array( $pagenow, array( 'post-new.php' ) );
    else //check for either new or edit
        return in_array( $pagenow, array( 'post.php', 'post-new.php' ) );
}

if ($_GET['page'] =='xapp-apps-page' || (is_edit_page() ) ) {
	wp_enqueue_style('tailwind', XAPP_IMPORT_URL.  'build/index.css');
} 

/**
 * 
 * Only load if xapp page
 */
if (isXappEditor()) {

    //non-blocks -should be at top
    require_once XAPP_IMPORT_PATH . 'build/non-block-examples/meta/index.php';


    require_once XAPP_IMPORT_PATH . 'admin/xapp-editor-settings.php';

    //blocks
    // require_once XAPP_IMPORT_PATH . 'build/blocks/mockup/index.php';
    //blocks
    require_once XAPP_IMPORT_PATH . 'build/blocks/screens/index.php';
    require_once XAPP_IMPORT_PATH . 'build/blocks/screen/index.php';


    


}





/**
		 * 
		 * Allow only follwoing blocks
		 * 
		 */
		function xapp_allowed_block_types_when_post_provided( $allowed_block_types, $editor_context ) {
			global $blocks;
		
			if ( ! empty( $editor_context->post )  && XAPP_POST_TYPE == get_post_type()) {

                if(is_array($allowed_block_types))
                   return  array_merge(XAPP_BLOCKS,  $allowed_block_types) ;

                return XAPP_BLOCKS;
			}
			return $allowed_block_types;
		}
		 
		add_filter( 'allowed_block_types_all', 'xapp_allowed_block_types_when_post_provided', 1000, 2 );



        // add_action( 'xapp_blocks','xapp_allowed_block_types_when_post_provided',0,$blocks )

    