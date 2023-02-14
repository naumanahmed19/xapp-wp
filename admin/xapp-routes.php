<?php
/**
 * Registers import routes for
 * the corresponding context.
 */

require_once XAPP_IMPORT_PATH . 'admin/class-xapp-import.php';
require_once XAPP_IMPORT_PATH . 'admin/tgm.php';

add_action('rest_api_init', function() {



	register_rest_route('xapp/v1', '/import', [
		'methods' => 'POST',
		'permission_callback' => '__return_true',
		'callback' =>  function ( $request )  {
			

			// $importer = new WP_Import();
			// return  $importer->dispatch();
		//	require_once('wp-load.php'); 
			$importer = new Xapp_Import_Admin();
			return $importer->import_content_post_type_data(XAPP_POST_TYPE,$request);
			
		  },
	]);




	register_rest_route('xapp/v1', '/install-plugin', [
		'methods' => 'POST',
		'permission_callback' => '__return_true',
		'callback' =>  function ( $request ) {
            $plugin = $request['plugin'];



			$importer = new Xapp_Import_Admin();
				return $importer->install_plugin( $plugin);
		  },
	]);



	register_rest_route('xapp/v1', '/check-updates', [
		'methods' => 'POST',
		'permission_callback' => '__return_true',
		'callback' =>  function ( $request ) {
            $plugin = $request['plugin'];

		
			$tgm = new TGM_Plugin_Activation();
				return $tgm->does_plugin_require_updater( $plugin, '0.0.1');
		  },
	]);

	register_rest_route('xapp/v1', '/translations', [
		'methods' => 'GET',
		'permission_callback' => '__return_true',
		'callback' =>  function ( $request ) {

		
            $postId = $request['id'];
			$t = get_post_custom_values( 'appLocales', $postId);
		
			$json =  json_decode($t[0],true);
	
			foreach ($json as $item) {
				if ($item['id'] == $request['locale']) {
					return $item['translations'];
				}
			}
			return json_decode($t[0],true)[0]['translations']; //send default
		  },
	]);





	register_rest_route('xapp/v1', '/settings', [
		'methods' => 'GET',
		'permission_callback' => '__return_true',
		'callback' =>  function ( $request ) {


			

			$postId = $request['APP_POST_ID'];
			if(!$postId) return [];
			
			$env = [];
			$appEnv = get_post_custom_values( 'appEnv', $postId);
			if($appEnv){
				$env =  json_decode($appEnv[0],true);
			}
			
			//get active locale translations
			$translations = [];
			$langs = [];
			$t = get_post_custom_values( 'appLocales', $postId);
			if(!empty($t)){
				$locales =  json_decode($t[0],true);
		
			if($locales ){
				$activeLocale = $request['activeLocale'];
				$found_key = array_search($activeLocale, array_column($locales, 'id'));
				$translations = $locales[$found_key]['translations'];
				
				foreach ($locales as $item) {
					$lng['id']  = $item['id'];
					$lng['name'] = $item['name'];
	
					$langs[] = $lng;
				}	
			}
	
			}
	
			return [
				'languages' => $langs,
				'translations' => $translations,
				'envs' => $env
			]; //send default
		  },
	]);



	register_rest_route('xapp/v1', '/firbase', [
		'methods' => 'GET',
		'permission_callback' => '__return_true',
		'callback' =>  function ( $request ) {

            $id = $request['id'];
			$t = get_post_custom_values( 'fbIos', $id);

			
			return json_decode($t[0],true)[0]['translations'];
		  },
	]);

	register_rest_route('xapp/v1', '/screens', [
		'methods' => 'GET',
		'permission_callback' => '__return_true',
		'callback' =>  function ( $request ) {

            $id = $request['id'];

			$post = get_post($id);

			$parentId =  wp_get_post_parent_id($post);

			if($parentId){
				$id = $parentId;
				
			}
			$q = get_pages( array(
				'post_type'         => 'xapp', //here's my CPT
				'post_status'       => array( 'publish', 'pending' ) //my custom choice
			) );

			$arra [] = $post;

			$arr =  array_merge($arra,  get_page_children($id, $q )); ;
		
			return $arr;
	
		
		  },
	]);



	
});
