<?php
/**
 * @package xapp
 */

defined( 'ABSPATH' ) || exit;

define('XAPP_BLOCKS' , [
    //Allow core wordPress blocks

    'core/cover',
    'core/group',
    'core/spacer', //TODO: create dart widget
    'core/query',
    'core/post-template',
    'core/post-date',
    'core/post-title',
    'core/query-no-results',
    'core/post-content',
    'core/post-featured-image',
    'core/image',
    'core/paragraph', //TODO: allow html 
    'core/heading', 
    'core/columns',
    'core/column',

	'xapp/screens',
    'xapp/bottom-tabs',
    'xapp/tabs',

    'xapp/button',
    'xapp/inkwell',
	'xapp/appbar',
    'xapp/divider',
    'xapp/container',
    'xapp/text-block',
    'xapp/icon',
    'xapp/intro-slider',
    
    'xapp/icon-text-button',
    'xapp/text-button',
    'xapp/icon-button',
    'xapp/rounded-button',
    'xapp/full-width',

 ]);

/**
 * Admin 
 */

require_once XAPP_IMPORT_PATH . 'admin/routes.php';
require_once XAPP_IMPORT_PATH . 'admin/xapp-register-post-type.php';
require_once XAPP_IMPORT_PATH . 'admin/xapp-routes.php';
require_once XAPP_IMPORT_PATH . 'admin/xapp-block-parser.php';
require_once XAPP_IMPORT_PATH . 'admin/theme-json.php';

global $pagenow;
global $post;

function isXappEditor(){
    return ( isset($_GET['post']) && get_post_type($_GET['post'] ) == XAPP_POST_TYPE ) 
    || (isset($_GET['post_type']) && $_GET['post_type'] == XAPP_POST_TYPE );
}

if (!empty($_GET['page']) &&  $_GET['page'] =='xapp-apps-page' || (!empty($_GET['post_type']) && $_GET['post_type'] ==XAPP_POST_TYPE)) {

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

function xapp_enque_scripts(){
    if (!empty( $_GET['page'])  && $_GET['page'] =='xapp-apps-page' || (is_edit_page() ) ) {
        wp_enqueue_style('xapp-tailwind', XAPP_IMPORT_URL.  'build/index.css');
    
        //Block variations
        wp_enqueue_script( 
            'xapp-enqueue-block-variations', 
            XAPP_IMPORT_URL . 'admin/variations.js', 
            array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ) 
        );
    } 
}
add_action( 'admin_enqueue_scripts', 'xapp_enque_scripts' );
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
    // require_once XAPP_IMPORT_PATH . 'build/blocks/screens/index.php';
    // require_once XAPP_IMPORT_PATH . 'build/blocks/screen/index.php';
    // require_once XAPP_IMPORT_PATH . 'build/blocks/buttons/index.php';
    // require_once XAPP_IMPORT_PATH . 'build/blocks/button/index.php';


    	function xapp_blocks_init() {
			$blocks = [
				'screen',
				'screens',
                'appbar',
                'bottom-tabs',
                'tabs',
                'tab',
                'button',
                'inkwell',
                'container',
                'divider',
                'text',
                'icon',
                'intro-slider',
			];
			
			foreach($blocks as $block){
				register_block_type( __DIR__ . "/build/blocks/{$block}" );
			}
		}
		add_action( 'init', 'xapp_blocks_init' );

    


}





/**
		 * 
		 * Allow only follwoing blocks
		 * 
		 */
		function xapp_allowed_block_types_when_post_provided( $allowed_block_types, $editor_context ) {
			global $blocks;


                 //get xapp blocks
            // $blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
            // $xappBlocks = array();
            // foreach($blocks as $key) {
            //     if(strpos($key->name, 'xapp/') === 0){
            //         $keys[] = $key->name;
            //     }
             
            // }
		
			if ( ! empty( $editor_context->post )  && XAPP_POST_TYPE == get_post_type()) {

                if(is_array($allowed_block_types))
                   return  array_merge(XAPP_BLOCKS,  $allowed_block_types) ;

                return XAPP_BLOCKS;
			}
			return $allowed_block_types;
		}
		 
		add_filter( 'allowed_block_types_all', 'xapp_allowed_block_types_when_post_provided', 1000, 2 );



        // add_action( 'xapp_blocks','xapp_allowed_block_types_when_post_provided',0,$blocks )

    