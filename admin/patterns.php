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
		add_action( 'init', [ $this, 'register_block_patterns' ] );
		add_action( 'init', [ $this, 'register_block_pattern_categories' ] );


		
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

	/**
	 * Register Block Pattern Categories.
	 */
	public function register_block_pattern_categories() {

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
