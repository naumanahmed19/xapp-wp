<?php

function xapp_theme_json_theme( $theme_json ){

	$disabled = array(
		'spacing' => array('units'=> array('%','px'), 'padding' => false, 'blockGap' => false, 'margin' => false,),
		'color'=> array('text' => false, 'link'=>false),
		'typography'=> array(
			"customFontSize" => false,
			"lineHeight" => false,
			"dropCap" => false,
			"fontStyle" => false,
			"fontWeight" => false,
			"letterSpacing" => false,
			"textDecoration" => false,
			"textTransform" => false,
			"fontSizes" => [],
			"fontFamilies" => [],
		),
		'border'=>array(
			'radius'=> false,
			"color" => false,
			"style" => false,
			"width" => false
		 ),
	);

    $new_data = array(
        'version'  => 2,
		'styles' => array(
			"typography"=> array(
				"fontSize" => "0.75rem",
			),
			"elements" => array(
				"h1" => array(
					"typography" => array(
						"fontSize" => "0.75rem",
					),
				),
				"h2" => array(
					"typography" => array(
						"fontSize" =>"0.75rem",
					),
				),
				"h3"=> array(
					"typography" => array(
						"fontSize" =>"0.75rem",
					),
				),	
			),
			'blocks' => array(
				"core/post-title"=> array(
					// "color"=> array(
					// 	"text" => "blue",
					// ),
					"typography" => array(
						"fontSize"=>"0.75rem",

					),
				),
				"core/query"=> array(
					"elements" => array(
						"h2" => array(
							"typography" => array(
								"fontSize" => "0.75rem",
							),
						),
					),
				),
			),
		),
        'settings' => array(
			"layout"=> array(
				"contentSize" => "530px",
				"wideSize" => "530px",
			),
            'spacing' => array(
                'units'    => array('px'),
		
				"spacingScale"  => array(
					"operator"=> "*",
					"increment"=> 1.5,
					"steps"=> 20,
					"mediumStep"=> 1.5,
					"unit"=> "px"
				),
				
            ),
			
			"custom"=> array(
				"line-height" =>array(
					"body"=>1.7,
					"heading"=> 1.3
				),
            ),
			
			'typography' => array(
				"customFontSize" =>  true,
				'units'    => array('rem'),
				//"fontSize" => "40px",
				"elements" => array(
					"p"=> array(
						"typography" => array(
							//"fontSize" => "40px",
						),
                    ),
				),
				'fontSizes'    => array(
					array(
                        'slug'  => '0.625',
                        'size' =>  '0.625rem',
                        'name'  => __( 'Subtitle (M)', 'xapp' ),
                    ),
					array(
                        'slug'  => '0.75',
                        'size' =>  '0.75rem',
                        'name'  => __( 'Subtitle (L)', 'xapp' ),
                    ),
					array(
                        'slug'  => '0.875',
                        'size' =>  '0.875rem',
                        'name'  => __( 'Title (M)', 'xapp' ),
                    ),
					array(
                        'slug'  => '1.0',
                        'size' =>  '1rem',
                        'name'  => __( 'Title (M)', 'xapp' ),
                    ),
					array(
                        'slug'  => '1.375',
                        'size' =>  '1.375rem',
                        'name'  => __( 'Title (L)', 'xapp' ),
                    ),
					array(
                        'slug'  => '1.5',
                        'size' =>  '1.5rem',
                        'name'  => __('Headline (S)', 'xapp' ),
                    ),
					array(
                        'slug'  => '1.75',
                        'size' =>  '1.75rem',
                        'name'  => __('Headline (M)', 'xapp' ),
                    ),

					array(
                        'slug'  => '2.0',
                        'size' =>  '2rem',
                        'name'  => __('Headline (L)', 'xapp' ),
                    ),
				),
               // 'fontSizes'    => [],
            ),

            'color' => array(
                'text'       => true,
				"defaultPalette" => false,
                'palette'    => array( /* New palette */
                    array(
                        'slug'  => '#000000',
                        'color' => '#000000',
                        'name'  => __( 'Foreground', 'xapp' ),
                    ),
                    array(
                        'slug'  => '#ffffff',
                        'color' => '#ffffff',
                        'name'  => __( 'Background', 'xapp' ),
                    ),
                ),
            ),

			'blocks' => array(
				'core/column' => $disabled ,
				'core/columns' => $disabled ,
                'core/image' => array(
                    'color' => array(
                        "duotone" =>  [],
                        "customDuotone"  => false,
                    ),
                    'border' => array(
                        "color"  => false,
                        "width" => false,
                    ),
                ) ,
				'xapp/icon-button' =>array(
					'color'=> array('text' => false, 'link'=>false),
				),
				'xapp/icon' =>array(
					'typography' => array(
						'fontSizes'    => [],
						//'units'    => array('px'),
					),
					'color'=> array('background' => false, 'link'=>false),
				),
				"core/paragraph"=> array(
					"color"=> array(
						"text" => "red",
					),
					// "typography" => array(
					// 	"fontSize" => "40px",
					// ),
				),
				"core/cover"=> array(
					'border'=>array(
						'radius'=> true,
						"color" => true,
						"style" => true,
						"width" => true
					 ),
					 'color'=>array(
						'overlay'=> false,
						'background'=> false,
					 ),
					// "typography" => array(
					// 	"fontSize" => "40px",
					// ),
				),
			),

        ),
    );

    return $theme_json->update_with( $new_data );
}
add_filter( 'wp_theme_json_data_theme', 'xapp_theme_json_theme' );
