<?php

/**
 * @package xapp
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
 

define('XAPP_BLOCKS', [
    //Allow core wordPress blocks

    'core/post-terms',
    'core/block',
    'core/cover',
    'core/group',
    'core/spacer',
    //TODO: create dart widget
    'core/query',
    'core/post-template',
    'core/post-date',
    'core/post-title',
    'core/query-no-results',
    'core/post-content',
    'core/post-featured-image',
    'core/image',
    'core/paragraph',

    "woocommerce/product-query",
    "woocommerce/product-query/product-template",
    "woocommerce/product-price",
    "woocommerce/product-button", //experimental
    'woocommerce/product-collection',
    
    //TODO: allow html 
    'core/heading',
    'core/columns',
    'core/column',
    'core/avatar',

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
    'xapp/logo',
    'xapp/post-searchbar',
    'xapp/tile',
    'xapp/language-switcher',
    'xapp/stack',
    'xapp/badge',
    'xapp/bottombar',
    'xapp/unconstrained-box',
    'xapp/list-view',
    'xapp/grid-view',
    'xapp/data-source',
    'xapp/data-content',
    'xapp/data-template',
    'xapp/appbar-title',
    'xapp/appbar-flexible',
    'xapp/center',
    'xapp/positioned',
    'xapp/safe-area',
    'xapp/card',
    'xapp/carousel',
    'xapp/button-add-to-cart',
    'xapp/button-add-to-favourite'

    
   
]);

/**
 * Admin 
 */

require_once XAPP_IMPORT_PATH . 'admin/routes.php';
require_once XAPP_IMPORT_PATH . 'admin/xapp-register-post-type.php';
require_once XAPP_IMPORT_PATH . 'admin/xapp-routes.php';
require_once XAPP_IMPORT_PATH . 'admin/xapp-block-parser.php';
require_once XAPP_IMPORT_PATH . 'admin/xapp-blocks-controller.php';

require_once XAPP_IMPORT_PATH . 'admin/google-login/google-login.php';
require_once XAPP_IMPORT_PATH . 'admin/inc/AuthController.php';




/**
 * 
 * Allow only follwoing blocks
 * 
 */

 function xapp_get_image($name){
    return XAPP_IMPORT_URL . 'admin/assets/images/' . $name;
 }


global $pagenow, $typenow;

function xapp_isEditor() {
    $post_type = isset($_GET['post']) ? sanitize_text_field($_GET['post']) : '';
    $post_type_param = isset($_GET['post_type']) ? sanitize_text_field($_GET['post_type']) : '';
    
    return (get_post_type($post_type) == XAPP_POST_TYPE) || ($post_type_param == XAPP_POST_TYPE);
}



function xapp_is_edit_page($new_edit = null)
{

    global $pagenow;
    //make sure we are on the backend
    if (!is_admin())
        return false;


    if ($new_edit == "edit")
        return in_array($pagenow, array('post.php',));
    elseif ($new_edit == "new") //check for new post page
        return in_array($pagenow, array('post-new.php'));
    else //check for either new or edit
        return in_array($pagenow, array('post.php', 'post-new.php'));
}


function xapp_enque_scripts()
{

    global $pagenow, $typenow;


    // Check if we are on the edit screen for the xapp post type
    if (in_array($pagenow, array('post.php', 'post-new.php')) && $typenow == 'xapp') {


        require_once XAPP_IMPORT_PATH . 'build/non-block-examples/dahsboard/index.php';

        wp_enqueue_style('xapp-tailwind', XAPP_IMPORT_URL . 'build/index.css');

        //Block variations
        wp_enqueue_script(
            'xapp-enqueue-block-variations',
            XAPP_IMPORT_URL . 'admin/variations.js',
            array('wp-blocks', 'wp-dom-ready', 'wp-edit-post')
        );
    }

    // Check if we are on the xapp apps page
    if ($pagenow == 'edit.php' && isset($_GET['post_type']) && $_GET['post_type'] == 'xapp' && isset($_GET['page']) && $_GET['page'] == 'xapp-apps-page') {
        wp_enqueue_style('xapp-tailwind', XAPP_IMPORT_URL . 'build/index.css');
    }
}
add_action('admin_enqueue_scripts', 'xapp_enque_scripts');

/**
 * 
 * Enqueue scripts
 */
add_action('init', function () {
    register_block_type(__DIR__ . "/build/blocks/container");
});



/**
 * 
 * Only load if xapp page
 */
if (xapp_isEditor()) {

    //non-blocks -should be at top
    require_once XAPP_IMPORT_PATH . 'build/non-block-examples/meta/index.php';
    require_once XAPP_IMPORT_PATH . 'build/non-block-examples/dahsboard/index.php';
    require_once XAPP_IMPORT_PATH . 'admin/xapp-editor-settings.php';
    require_once XAPP_IMPORT_PATH . 'admin/theme-json.php';
    function xapp_blocks_init()
    {
        $blocks = [
            'screen',
            'screens',
            'appbar','bottombar', 'appbar-title','appbar-flexible',
            'bottom-tabs',
            'tabs',
            'tab',
            'button',
            'inkwell',
            'divider',
            'text',
            'icon',
            'intro-slider',
            'logo',
            'post-searchbar',
            'tile','language-switcher',
            'stack',
            'badge',
            'unconstrained-box',
            'icon-button',
            'list-view',
            'grid-view',
            'data-source',
            'data-content',
            'data-template',
            'center',
            'positioned',
            'safe-area',
            'card',
            'carousel',
            'button-add-to-cart',
            'button-add-to-favourite'

        ];

        foreach ($blocks as $block) {
            register_block_type(__DIR__ . "/build/blocks/{$block}");
        }
    }
    add_action('init', 'xapp_blocks_init');
}


    
require_once XAPP_IMPORT_PATH . 'admin/patterns.php';
new xapp_Patterns();
/**
 * 
 * Allow only follwoing blocks
 * 
 */
function xapp_allowed_block_types_when_post_provided($allowed_block_types, $editor_context)
{
    global $blocks;

    if (!empty($editor_context->post) && XAPP_POST_TYPE == get_post_type()) {

        if (is_array($allowed_block_types))
            return array_merge(XAPP_BLOCKS, $allowed_block_types);

        return XAPP_BLOCKS;
    }
    return $allowed_block_types;
}

add_filter('allowed_block_types_all', 'xapp_allowed_block_types_when_post_provided', 1000, 2);
