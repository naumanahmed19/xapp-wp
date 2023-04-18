<?php


function xapp_find_block($blocks, $key, $value ){

	$s = array_search($key, array_column($blocks,$value ));
	if(is_bool($s) &&  $s == false ){
		$blocks = [];
		return $blocks;
	} 
	return $blocks[$s];

}
function xapp_parse_blocks($post, $hasScreens = false){

	$blocks = parse_blocks( $post->post_content );
	$blocks  = json_encode($blocks);
	$strs = ["\"attrs\":[],","\"settings\":[],","\"style\":[],"];
	$replaceWith   = ["","",""];


	//for preview change http to https urls
	if(!empty($_GET['preview']) && $_GET['preview']){
		$strs[] = "http:";
		$replaceWith[]   = "https:";
	}
	$blocks = str_replace($strs, $replaceWith, $blocks);
	$blocks = json_decode( $blocks ,true);


	if($hasScreens == false){
		return $blocks;
	}


	//find screens block only 
	$s = array_search('xapp/screens', array_column($blocks, 'blockName'));

	if(is_bool($s) &&  $s == false ){
		$blocks = [];
	} 
	return $blocks[$s];
}

/**
 * 
 * Get blocks for an individual post or page
 */
function getBlockByUrl(){
	$postId = $_GET['WP_POST_ID'];
	$post = get_post($postId);
	if(!$post) return __('Post not found','xapp');
	$blocks = xapp_parse_blocks($post);
	return $blocks;
}




function get_xapp_blocks($screenId=''){
	//Page or Post sepecific blocks

	if(!empty($_GET['WP_POST_ID'])) {
		return  getBlockByUrl();
	}

	if(empty($_GET['APP_POST_ID']) || empty($_GET['screenId'])) return [];

	$postId = $_GET['APP_POST_ID'];

	if(!$screenId){
		$screenId = $_GET['screenId'];
	}


	$args = array(
	'include'        =>[$postId],
	'post_type'   => XAPP_POST_TYPE,
	'post_status' => 'publish',
	'numberposts' => 1,
	);
	$post = get_posts($args)[0];


    if(!$post) return [];
	
	$autoSavedPost;

	//check if preview is requested & preview is true
	
	 
	if(!empty($_GET['preview']) && $_GET['preview'] == 'true'){
       $autoSavedPost  =  wp_get_post_autosave($postId);	
	}
	if(!empty($autoSavedPost)){
		$post =  $autoSavedPost; 	
	}

	$blocks = xapp_parse_blocks($post, true);

	//First from setting->screens find index of screen requested 
	$screens = $blocks['attrs']['settings']['screens'];


	$found_key = array_search($screenId, array_column($screens , 'screenId'));
 
	//Using index get innerHTML

	if(is_bool($found_key) &&  $found_key == false ) return [];

	if(array_key_exists('innerBlocks', $blocks))
		return $blocks['innerBlocks'][$found_key]['innerBlocks'];

	return [] ;
}