<?php

 if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
 
/**
 * Patterns Class.
 *
 * @package aquila-features
 */

//namespace AquilaFeatures;

/**
 * Class Patterns.
 */
class xapp_Patterns {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->init();
	}



	/**
	 * Initialize.
	 */
	private function init() {
		/**
		 * Actions.
		 */
		add_action( 'init', [ $this, 'unregister_block_patterns' ] , 20  );
		add_action( 'init', [ $this, 'register_block_patterns' ], 25 );
		add_action( 'init', [ $this, 'register_block_pattern_categories' ],30 );


		
	}

	/**
	 * Register Block Patterns.
	 */
	public function register_block_patterns() {
		if ( function_exists( 'register_block_pattern' ) ) {

			require_once XAPP_IMPORT_PATH . 'admin/patterns/button.php';

			require_once XAPP_IMPORT_PATH . 'admin/patterns/tiles.php';

			require_once XAPP_IMPORT_PATH . 'admin/patterns/onboarding.php';

		}
	}


	public function unregister_block_patterns() {

		     // Get all registered patterns
			 $registered_patterns = WP_Block_Patterns_Registry::get_instance()->get_all_registered();

			 // Loop through all registered patterns
			 foreach ( $registered_patterns as $pattern ) {
				 unregister_block_pattern( $pattern['name'] );
			 }
	}
	




	/**
	 * Register Block Pattern Categories.
	 */
	public function register_block_pattern_categories() {

		$registered_cats = WP_Block_Pattern_Categories_Registry::get_instance()->get_all_registered();
		foreach ($registered_cats as $cat ) {

			unregister_block_pattern_category( $cat['name'] );
		}

		$pattern_categories = [
			'aquila-columns' => __( 'Aquila Coloumsn', 'aquila-features' ),
			'xapp-button' => __( 'Buttons', 'xapp' ),
			'xapp-tiles' => __( 'Tiles', 'xapp' ),
			'xapp-onboarding' => __( 'Onboarding', 'xapp' ),
		];

		if ( ! empty( $pattern_categories ) ) {
			foreach ( $pattern_categories as $pattern_category => $pattern_category_label ) {
				register_block_pattern_category(
					$pattern_category,
					[ 'label' => $pattern_category_label ]
				);
			}
		}
	}
}
