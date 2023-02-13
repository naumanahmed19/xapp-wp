<?php
register_block_pattern(
    'xapp/icon-text-button',
    [
        'title'       => __( 'Icon Text Button', 'xapp' ),
        'description' => __( 'Add button with icon and text', 'xapp' ),
        'categories'  => [ 'xapp-button' ],
        'keywords'      => array( 'button', 'icon', 'icon button' ),
        'content'     => '<!-- wp:xapp/button {"settings":{"label":"","action":"","linkTo":""}} -->
        <div class="wp-block-xapp-button"><!-- wp:xapp/icon {"textColor":"#ffffff"} -->
        <div class="wp-block-xapp-icon"></div>
        <!-- /wp:xapp/icon -->
        <!-- wp:xapp/text-block {"settings":{"text":"Button Text"},"style":{"color":{"text":"#ffffff"}}} -->
        <div class="has-text-color" style="color:#ffffff"></div>
        <!-- /wp:xapp/text-block --></div>
        <!-- /wp:xapp/button -->',
    ]
);
register_block_pattern(
    'xapp/text-button',
    [
        'title'       => __( 'Text Button', 'xapp' ),
        'description' => __( 'Add a simple text button', 'xapp' ),
        'categories'  => [ 'xapp-button' ],
        'keywords'      => array( 'button', 'text', 'text button' ),
        'content'     => '<!-- wp:xapp/button {"settings":{"label":"","action":"","linkTo":""},"style":{"spacing":{"width":150,"height":50}},"className":"is-style-text","layout":{"type":"flex","justifyContent":"left"}} -->
        <div class="wp-block-xapp-button is-style-text"><!-- wp:xapp/text-block {"settings":{"text":"Button Text"},"textColor":"#000000"} -->
        <div class="has-000000-color has-text-color"></div>
        <!-- /wp:xapp/text-block --></div>
        <!-- /wp:xapp/button -->',
    ]
);
register_block_pattern(
    'xapp/icon-button',
    [
        'title'       => __( 'Icon Button', 'xapp' ),
        'description' => __( 'Add a simple text button', 'xapp' ),
        'categories'  => [ 'xapp-button' ],
        'keywords'      => array( 'button', 'fab button', 'icon button','square button','circle','rounded' ),
        'content'     => '<!-- wp:xapp/button {"settings":{"label":"","action":"","linkTo":""},"style":{"spacing":{"width":"60px","height":"60px"},"color":{"background":"#000000"},"border":{"radius":"100px"}},"className":"is-style-fill"} -->
        <div class="wp-block-xapp-button is-style-fill"><!-- wp:xapp/icon {"settings":{"icon":{"code":61316,"name":"grade","uid":"a97726926f80d6b78fc924730a000820"}},"textColor":"#ffffff"} -->
        <div class="wp-block-xapp-icon"></div>
        <!-- /wp:xapp/icon --></div>
        <!-- /wp:xapp/button -->',
    ]
);

register_block_pattern(
    'xapp/rounded-button',
    [
        'title'       => __( 'Rounded Button', 'xapp' ),
        'description' => __( 'Add a rounded button', 'xapp' ),
        'categories'  => [ 'xapp-button' ],
        'keywords'      => array( 'button', 'icon', 'icon button','rounded' ),
        'content'     => '<!-- wp:xapp/button {"settings":{"label":"","action":"","linkTo":""},"style":{"spacing":{"width":150,"height":50},"color":{"background":"#000000"},"border":{"radius":"50px"}}} -->
        <div class="wp-block-xapp-button"><!-- wp:xapp/text-block {"settings":{"text":"Button Text"},"style":{"color":{"text":"#ffffff"}}} -->
        <div class="has-text-color" style="color:#ffffff"></div>
        <!-- /wp:xapp/text-block --></div>
        <!-- /wp:xapp/button -->',
    ]
);
register_block_pattern(
    'xapp/full-width',
    [
        'title'       => __( 'Block Button', 'xapp' ),
        'description' => __( 'Add a full width utton', 'xapp' ),
        'categories'  => [ 'xapp-button' ],
        'keywords'      => array( 'full button', 'block button' ),
        'content'     => '<!-- wp:xapp/button {"settings":{"label":"","action":"","linkTo":""},"size":"full","style":{"spacing":{"width":"100%","height":50},"color":{"background":"#000000"}}} -->
        <div class="wp-block-xapp-button"><!-- wp:xapp/text-block {"settings":{"text":"Button Text"},"style":{"color":{"text":"#ffffff"}}} -->
        <div class="has-text-color" style="color:#ffffff"></div>
        <!-- /wp:xapp/text-block --></div>
        <!-- /wp:xapp/button -->',
    ]
);
