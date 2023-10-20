<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
 

register_block_pattern(
    'xapp/tile-two-line',
    [
        'title'       => __( 'Tile two lines', 'xapp' ),
        'description' => __( 'Add tile with subtitle and image', 'xapp' ),
        'categories'  => [ 'xapp-tiles' ],
        'keywords'      => array( 'tile', '2 lines', 'image-tile','subtitle-tile' ),
        'content'     => '<!-- wp:xapp/container {"blockId":"5e8e06f630a84200ac389ae1afc8e5d7","settings":{"isHeightFull":false},"className":"is-style-shadow-solid"} -->
        <div class="wp-block-xapp-container is-style-shadow-solid"><!-- wp:xapp/inkwell {"settings":{"title":"","label":"","action":"","linkTo":"","screenType":"","templatekey":""},"blockId":"42de6fadabd64303839d9b20e03427b0"} -->
        <div class="wp-block-xapp-inkwell"><!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"padding":{"top":"8px","right":"8px","bottom":"8px","left":"8px"},"blockGap":"0"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"},"blockId":"b584d687545da4a288f4ccb2964aa6dda"} -->
        <div class="wp-block-columns are-vertically-aligned-center" style="padding-top:8px;padding-right:8px;padding-bottom:8px;padding-left:8px"><!-- wp:column {"verticalAlignment":"center","width":"15%","blockId":"b985827f5c24c495fb524d1c457ec0800"} -->
        <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:15%"><!-- wp:image {"width":55,"height":55,"sizeSlug":"large","linkDestination":"none","style":{"border":{"radius":"100px"}},"blockId":"bede3cd0c928a4c7ea9d0357dfc91079e"} -->
        <figure class="wp-block-image size-large is-resized has-custom-border"><img src="'.xapp_get_image('avatar.png').'" alt="" style="border-radius:100px" width="55" height="55"/></figure>
        <!-- /wp:image --></div>
        <!-- /wp:column -->
        
        <!-- wp:column {"verticalAlignment":"center","width":"75%","blockId":"b0ac205d17342441d8f217b5eb09817a9"} -->
        <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:75%"><!-- wp:xapp/text-block {"settings":{"text":"Your Title","type":"text","textKey":"block_a7aba5cd6a224191860f66fc1c4a8707_text"},"style":{"color":{"text":"#000000"},"typography":{"fontSize":"1rem"}},"blockId":"a7aba5cd6a224191860f66fc1c4a8707"} -->
        <div class="has-text-color" style="color:#000000;font-size:1rem"></div>
        <!-- /wp:xapp/text-block -->
        
        <!-- wp:xapp/text-block {"settings":{"text":"Your subtitle goes here","textKey":"block_2bd5daa0b55540c6bc82094bc79c096a_text"},"style":{"color":{"text":"#000000"},"typography":{"fontSize":"0.6rem"}},"blockId":"2bd5daa0b55540c6bc82094bc79c096a"} -->
        <div class="has-text-color" style="color:#000000;font-size:0.6rem"></div>
        <!-- /wp:xapp/text-block --></div>
        <!-- /wp:column -->
        
        <!-- wp:column {"verticalAlignment":"center","width":"10%","blockId":"bd685fc03a32343a5a1a7e2e8b6fb4a3e"} -->
        <div class="wp-block-column is-vertically-aligned-center" style="flex-basis:10%"><!-- wp:xapp/icon {"settings":{"icon":{"code":61477,"name":"more_vert","uid":"50e3766928de027392d54955c492ba86"}},"style":{"color":{"text":"#000000"}},"blockId":"bc2aaa454f1ca45ef98eb8b2009709b21"} -->
        <div class="wp-block-xapp-icon"></div>
        <!-- /wp:xapp/icon --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns --></div>
        <!-- /wp:xapp/inkwell --></div>
        <!-- /wp:xapp/container -->',
    ]
);

register_block_pattern(
    'xapp/tile-three-line',
    [
        'title'       => __( 'Tile three lines', 'xapp' ),
        'description' => __( 'Add a tile with 3 lines and image', 'xapp' ),
        'categories'  => [ 'xapp-tiles' ],
        'keywords'      => array( 'tile', '3 lines', 'image-tile','subtitle-tile' ),
        'content'     => '<!-- wp:xapp/container {"blockId":"b5a09bc99c4ec442ba09354090b40afde","settings":{"isHeightFull":false},"backgroundColor":"#ffffff","className":"is-style-shadow-solid"} -->
        <div class="wp-block-xapp-container is-style-shadow-solid has-ffffff-background-color has-background"><!-- wp:xapp/inkwell {"settings":{"label":"","action":"","linkTo":"","screenType":""},"blockId":"bd181f7b35ff6491396ac3acffbc7acdd"} -->
        <div class="wp-block-xapp-inkwell"><!-- wp:columns {"verticalAlignment":"top","style":{"spacing":{"padding":{"top":"8px","right":"8px","bottom":"8px","left":"8px"},"blockGap":"0"}},"backgroundColor":"#ffffff","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"},"blockId":"bb20ddb40cab142dead96d024cf117b30"} -->
        <div class="wp-block-columns are-vertically-aligned-top has-ffffff-background-color has-background" style="padding-top:8px;padding-right:8px;padding-bottom:8px;padding-left:8px"><!-- wp:column {"verticalAlignment":"top","width":"15%","blockId":"b1461b59ddc7f445884ec7316b77d2a01"} -->
        <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:15%"><!-- wp:image {"width":50,"height":50,"sizeSlug":"large","linkDestination":"none","style":{"border":{"radius":"100px"}},"blockId":"b57aaa83eba8643528dccaa6b3b89ade9"} -->
        <figure class="wp-block-image size-large is-resized has-custom-border"><img src="'.xapp_get_image('avatar.png').'" alt="" style="border-radius:100px" width="50" height="50"/></figure>
        <!-- /wp:image --></div>
        <!-- /wp:column -->
        
        <!-- wp:column {"verticalAlignment":"top","width":"75%","blockId":"ba9cca2d51ab742e4a425feed0b1a3369"} -->
        <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:75%"><!-- wp:xapp/text-block {"settings":{"text":"Your title here","textKey":"block_b8552a8a36f654a6285bf4a6d7cdbeb76_text"},"style":{"color":{"text":"#000000"},"typography":{"fontSize":"1rem"}},"blockId":"b8552a8a36f654a6285bf4a6d7cdbeb76"} -->
        <div class="has-text-color" style="color:#000000;font-size:1rem"></div>
        <!-- /wp:xapp/text-block -->
        
        <!-- wp:xapp/text-block {"settings":{"text":"A nice placeholder for a subtitle","textKey":"block_bc76e7612337c4693913b5502081413d7_text"},"style":{"color":{"text":"#000000"}},"fontSize":"0.75","blockId":"bc76e7612337c4693913b5502081413d7"} -->
        <div class="has-text-color has-0-75-font-size" style="color:#000000"></div>
        <!-- /wp:xapp/text-block -->
        
        <!-- wp:xapp/text-block {"settings":{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, ante ut faucibus malesuada, metus magna semper libero, id placerat quam odio eu dolor.","textKey":"block_bc76e7612337c4693913b5502081413d7_text"},"style":{"color":{"text":"#000000"}},"fontSize":"0.75","blockId":"bc76e7612337c4693913b5502081413d7"} -->
        <div class="has-text-color has-0-75-font-size" style="color:#000000"></div>
        <!-- /wp:xapp/text-block --></div>
        <!-- /wp:column -->
        
        <!-- wp:column {"verticalAlignment":"top","width":"10%","blockId":"b31c9fe2a846046e1a29904593e0d5113"} -->
        <div class="wp-block-column is-vertically-aligned-top" style="flex-basis:10%"><!-- wp:xapp/icon {"settings":{"icon":{"code":61477,"name":"more_vert","uid":"50e3766928de027392d54955c492ba86"}},"style":{"color":{"text":"#000000"}},"blockId":"bf39bc5bb0220472c90edb41521fdf6c7"} -->
        <div class="wp-block-xapp-icon"></div>
        <!-- /wp:xapp/icon --></div>
        <!-- /wp:column --></div>
        <!-- /wp:columns --></div>
        <!-- /wp:xapp/inkwell --></div>
        <!-- /wp:xapp/container -->',
    ]
);