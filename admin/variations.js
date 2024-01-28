/**
 * Add the following to a variations.js file located in the theme's assets/js/ folder.
 */

wp.domReady(function () {
	function parseBlockContent(blockType, content) {
		let blockVariation = {};
		// Parse the content and extract the necessary properties for the variation
		// For example:
		blockVariation.title = blockType;
		blockVariation.name = 'custom-variation';
		blockVariation.innerBlocks = parseInnerBlocks(content);

		return blockVariation;
	}

	function parseInnerBlocks(content) {
		let innerBlocks = [];
		// Parse the content and extract the necessary properties for the inner blocks
		// For example:
		let blocks = content.match(/<!-- wp:.*?-->/g);
		blocks.forEach((block) => {
			let blockType = block.match(/wp:(\S+)/)[1];
			let properties = extractProperties(block);
			innerBlocks.push([
				blockType,
				properties,
				[
					// parse inner block content here
				],
			]);
		});
		return innerBlocks;
	}
	function xapp_get_image($name){
		return  `admin/assets/images/${ $name}`;
	 }
	
	function extractProperties(block) {
		let properties = {};
		// Extract the JSON object of properties from the block
		let propertiesString = block.match(/{.*}/)[0];
		properties = JSON.parse(propertiesString);
		return properties;
	}

	// let tile = {
	//     "name": "container-row-column-tile",
	//     "title": "Tile",
	//     "description": "A tile create using row columns",
	//     "isDefault": false,
	//     "attributes": {
	//       "blockId": "df954db0bb47404395ba4b9fc7c79abd",
	//       "settings": {
	//         "isHeightFull": false
	//       },
	//       "backgroundColor": "#ffffff"
	//     },
	//     "innerBlocks": [
	//       {
	//         "block": "group",
	//         "attributes": {
	//           "style": {
	//             "spacing": {
	//               "padding": {
	//                 "top": "8px",
	//                 "right": "8px",
	//                 "bottom": "8px",
	//                 "left": "8px"
	//               },
	//               "blockGap": "0"
	//             }
	//           },
	//           "backgroundColor": "#ffffff",
	//           "layout": {
	//             "type": "flex",
	//             "flexWrap": "nowrap",
	//             "justifyContent": "space-between"
	//           }
	//         },
	//         "innerBlocks": [
	//           {
	//             "block": "xapp/container",
	//             "attributes": {
	//               "blockId": "93e5893251db44428c1de56b6e1de3be",
	//               "settings": {
	//                 "isHeightFull": false
	//               }
	//             },
	//             "innerBlocks": [
	//               {
	//                 "block": "xapp/text",
	//                 "attributes": {
	//                   "align": "left",
	//                   "blockId": "de138224ab7046988865e8f707c3226a",
	//                   "settings": {
	//                     "text": "List Title1",
	//                     "type": "text",
	//                     "url": "",
	//                     "style": [],
	//                     "textKey": "block_de138224ab7046988865e8f707c3226a_text"
	//                   },
	//                   "className": "has-16-font-size"
	//                 }
	//               },
	//               {
	//                 "block": "xapp/text",
	//                 "attributes": {
	//                   "align": "left",
	//                   "blockId": "de138224ab7046988865e8f707c3226a",
	//                   "settings": {
	//                     "text": "List View subtitle here",
	//                     "type": "text",
	//                     "url": "",
	//                     "style": [],
	//                     "textKey": "block_de138224ab7046988865e8f707c3226a_text"
	//                   }
	//                 }
	//               }
	//             ]
	//           },
	//           {
	//             "block": "xapp/icon-button",
	//             "attributes": {
	//               "settings": {
	//                 "label": "",
	//                 "action": ""
	//               },
	//               "className": "aligncenter"
	//             },
	//             "innerBlocks": [
	//               {
	//                 "block": "xapp/icon",
	//                 "attributes": {
	//                   "settings": {
	//                     "icon": {
	//                       "code": 61477,
	//                       "name": "more_vert",
	//                       "uid": "50e3766928de027392d54955c492ba86"
	//                     }
	//                   }
	//                 }
	//               }
	//             ]
	//           }
	//         ]
	//       }
	//     ]
	//   };

	wp.blocks.registerBlockVariation('core/image', {
		name: 'core-image',
		title: 'Image xapp',
		description: 'A group with a solid shadow',
		isDefault: false,
		attributes: {
			className: 'is-style-shadow-solid',
			width: 150,
			height: 150,
		},
	});
	/**
	 * A Group block variation with box shadow, border, and padding.
	 *
	 */
	wp.blocks.registerBlockVariation('core/column', {
		name: 'xapp-core-column',
		title: 'Column',
		description: 'A group with a solid shadow',
		isDefault: true,
		attributes: {
			className: 'is-style-shadow-solid',
			width: '100%',
		},
	});
	// var content = `<!-- wp:group {"style":{"spacing":{"padding":{"top":"8px","right":"8px","bottom":"8px","left":"8px"},"blockGap":"0"}},"backgroundColor":"#ffffff","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
    // <div class="wp-block-group has-ffffff-background-color has-background" ><!-- wp:xapp/container {"blockId":"93e5893251db44428c1de56b6e1de3be","settings":{"isHeightFull":false}} -->
    // <div class="wp-block-xapp-container"><!-- wp:xapp/text {"align":"left","blockId":"de138224ab7046988865e8f707c3226a","settings":{"text":"List Title1","type":"text","url":"","style":[],"textKey":"block_de138224ab7046988865e8f707c3226a_text"},"className":"has-16-font-size"} -->
    // <div class="wp-block-xapp-text alignleft has-16-font-size"></div>
    // <!-- /wp:xapp/text -->
    
    // <!-- wp:xapp/text {"align":"left","blockId":"de138224ab7046988865e8f707c3226a","settings":{"text":"List View subtitle here","type":"text","url":"","style":[],"textKey":"block_de138224ab7046988865e8f707c3226a_text"}} -->
    // <div class="wp-block-xapp-text alignleft"></div>
    // <!-- /wp:xapp/text --></div>
    // <!-- /wp:xapp/container -->
    
    // <!-- wp:xapp/icon-button {"settings":{"label":"","action":""},"className":"aligncenter"} -->
    // <div class="wp-block-xapp-icon-button aligncenter"><!-- wp:xapp/icon {"settings":{"icon":{"code":61477,"name":"more_vert","uid":"50e3766928de027392d54955c492ba86"}}} -->
    // <div class="wp-block-xapp-icon"></div>
    // <!-- /wp:xapp/icon --></div>
    // <!-- /wp:xapp/icon-button --></div>
    // <!-- /wp:group -->`;
	//     wp.blocks.registerBlockVariation( 'xapp/container', JSON.parse(tile));


	wp.blocks.registerBlockVariation('xapp/tile', {
		name: 'signin-tile',
		title: 'Signin Tile',
		description: 'A signin tile',
		isDefault: false,
		attributes: {
			className: 'is-style-shadow-solid',
			settings: {
				isHeightFull: false,
			},
			backgroundColor: '#ffffff',
		},
		innerBlocks: singInTileBlockTemplate(),
	});


	wp.blocks.registerBlockVariation('xapp/container', {
		name: 'tile-single-line',
		title: 'Tile (Single Line)',
		description: 'A tile create using row columns',
		isDefault: false,
		attributes: {
			className: 'is-style-shadow-solid',
			settings: {
				isHeightFull: false,
			},
			backgroundColor: '#ffffff',
		},
		innerBlocks: inkWellBlockTemplate(tileBlockTemplate),
	});
	wp.blocks.registerBlockVariation('xapp/container', {
		name: 'tile-two-lines',
		title: 'Tile (Two Lines)',
		description: 'A tile create using row columns',
		isDefault: false,
		attributes: {
			className: 'is-style-shadow-solid',
			settings: {
				isHeightFull: false,
			},
			backgroundColor: '#ffffff',
		},
		innerBlocks: inkWellBlockTemplate(tileTwoLinesBlockTemplate),
	});


	wp.blocks.registerBlockVariation('xapp/container', {
		name: 'tile-two-lines-test',
		title: 'Tile Test cart (Two Lines)',
		description: 'A tile create using row columns',
		isDefault: false,
		attributes: {
			className: 'is-style-shadow-solid',
			settings: {
				isHeightFull: false,
			},
			backgroundColor: '#ffffff',
		},
		innerBlocks: inkWellBlockTemplate(tileTwoLinesBlockTemplate),
	});


	// wp.blocks.registerBlockVariation('xapp/button', {
	// 	name: 'product-add-to-cart-button',
	// 	title: 'Add to Cart Button',
	// 	description: 'A button that adds a product to the cart.',
	// 	isDefault: false,
	// 	attributes: {
	// 		className: 'is-style-add-to-cart',
	// 		metadata:{
	// 			name: 'Add to Cart Button',
	// 		}

	// 	},
	// 	innerBlocks:[
	// 		[
	// 			'xapp/icon',
	// 			{
	// 				icon:{
	// 					"code": "f1cc",
	// 					"name": "shopping_bag"
	// 				},
	// 				style: {
	// 					color: {
	// 						text: 'white',
	// 					},
	// 				},
	// 			},
	// 		],
	// 		[
	// 			'xapp/text-block',
	// 			{
	// 				content: 'Add to cart',
	// 				style: {
	// 					color: {
	// 						text: 'white',
	// 					},
	// 				},
	// 			},
	// 		],
	// 	],
	// });




	/**
	 * A Group block variation with box shadow, border, and padding.
	 */
	// wp.blocks.registerBlockVariation('core/group', {
	// 	name: 'group-shadow-solid',
	// 	title: 'Group - Shadow Solid',
	// 	description: 'A group with a solid shadow',
	// 	isDefault: false,
	// 	attributes: {
	// 		className: 'is-style-shadow-solid',
	// 		style: {
	// 			border: {
	// 				width: '1px',
	// 			},
	// 			spacing: {
	// 				padding: {
	// 					top: 'var:preset|spacing|x-small',
	// 					right: 'var:preset|spacing|x-small',
	// 					bottom: 'var:preset|spacing|x-small',
	// 					left: 'var:preset|spacing|x-small',
	// 				},
	// 			},
	// 		},
	// 		borderColor: 'contrast',
	// 	},
	// });

	/**
	 * Disable the stack variation in the Group block.
	 */
	wp.blocks.unregisterBlockVariation('core/group', 'group-stack');

	/**
	 * Disable all unused icon variations in the Social Icons block.
	 */
	const unusedSocialIcons = [
		'fivehundredpx',
		'amazon',
		'bandcamp',
		'behance',
		'chain',
		'codepen',
		'deviantart',
		'dribbble',
		'dropbox',
		'etsy',
		'feed',
		'flickr',
		'foursquare',
		'goodreads',
		'google',
		'instagram',
		'lastfm',
		'mastodon',
		'meetup',
		'medium',
		'patreon',
		'pinterest',
		'pocket',
		'reddit',
		'skype',
		'snapchat',
		'soundcloud',
		'spotify',
		'telegram',
		'tiktok',
		'tumblr',
		'twitch',
		'vimeo',
		'vk',
		'whatsapp',
		'yelp',
		'youtube',
	];
	unusedSocialIcons.forEach((icon) =>
		wp.blocks.unregisterBlockVariation('core/social-link', icon),
	);

	function inkWellBlockTemplate(innerBlcok) {
		return [
			[
				'xapp/inkwell',
				{
					style: {
						color: {
							text: '#000000',
						},
					},
				},
				innerBlcok(),
			],
		];
	}

	function iconBlockTemplate(icon) {
		return [
			[
				'xapp/icon',
				{
					settings: {
						icon: icon,
					},
					style: {
						color: {
							text: '#000000',
						},
					},
				},
			],
		];
	}

	function textBlockTemplate(text, fontSize = '1rem') {
		return [
			'xapp/text-block',
			{
				settings: {
					text: text,
				},
				style: {
					color: {
						text: '#000000',
					},
					typography: {
						fontSize: fontSize,
					},
				},
			},
		];
	}



	function singInTileBlockTemplate() {
		var leadingIcon =  {
			"code": 60817,
			"name": "user",
			"uid": "366a9309c9230b659d515d920a673b31"
		  };
		return [
			[
				'core/columns',
				{
					verticalAlignment: 'center',
					style: {
						spacing: {
							padding: {
								top: '8px',
								right: '8px',
								bottom: '8px',
								left: '8px',
							},
							blockGap: '0',
						},
					},
					backgroundColor: '#ffffff',
					layout: {
						type: 'flex',
						flexWrap: 'nowrap',
						justifyContent: 'space-between',
					},
				},
				[
					[
						'core/column',
						{ width: '10%', verticalAlignment: 'center' },
						iconBlockTemplate(leadingIcon),
					],

					[
						'core/column',
						{ width: '90%', verticalAlignment: 'center' },
						[textBlockTemplate('Sign In')],
					],

				],
			],
		];
	}

	function tileBlockTemplate() {
		var leadingIcon = {
			code: 61381,
			name: 'landscape',
			uid: 'd96e4c793ea532c251c05daccc24c0ee',
		};

		var tralingIcon = {
			code: 61477,
			name: 'more_vert',
			uid: '50e3766928de027392d54955c492ba86',
		};

		return [
			[
				'core/columns',
				{
					verticalAlignment: 'center',
					style: {
						spacing: {
							padding: {
								top: '8px',
								right: '8px',
								bottom: '8px',
								left: '8px',
							},
							blockGap: '0',
						},
					},
					backgroundColor: '#ffffff',
					layout: {
						type: 'flex',
						flexWrap: 'nowrap',
						justifyContent: 'space-between',
					},
				},
				[
					[
						'core/column',
						{ width: '10%', verticalAlignment: 'center' },
						iconBlockTemplate(leadingIcon),
					],

					[
						'core/column',
						{ width: '80%', verticalAlignment: 'center' },
						[textBlockTemplate('Title Tile')],
					],

					[
						'core/column',
						{ width: '10%', verticalAlignment: 'center' },
						iconBlockTemplate(tralingIcon),
					],
				],
			],
		];
	}
	function tileTwoLinesBlockTemplate() {
		var leadingIcon = {
			code: 61381,
			name: 'landscape',
			uid: 'd96e4c793ea532c251c05daccc24c0ee',
		};

		var tralingIcon = {
			code: 61477,
			name: 'more_vert',
			uid: '50e3766928de027392d54955c492ba86',
		};

		return [
			[
				'core/columns',
				{
					verticalAlignment: 'center',
					style: {
						spacing: {
							padding: {
								top: '8px',
								right: '8px',
								bottom: '8px',
								left: '8px',
							},
							blockGap: '0',
						},
					},
					backgroundColor: '#ffffff',
					layout: {
						type: 'flex',
						flexWrap: 'nowrap',
						justifyContent: 'space-between',
					},
				},
				[
					[
						'core/column',
						{ width: '15%', verticalAlignment: 'center' },

						[
							[
								'core/image',
								{
									url: xapp_get_image('avatar.png'),
									alt: '',
									caption: '',
									width: 55,
									height: 55,
									sizeSlug: 'large',
									linkDestination: 'none',
									style: {
										border: {
											radius: '100px',
										},
									},
								},
							],
						],
					],

					[
						'core/column',
						{ width: '75%', verticalAlignment: 'center' },
						[
							textBlockTemplate('Title Tile'),
							textBlockTemplate('Title Subtitle', '0.6rem'),
						],
					],

					[
						'core/column',
						{ width: '10%', verticalAlignment: 'center' },
						iconBlockTemplate(tralingIcon),
					],
				],
			],
		];
	}
});
