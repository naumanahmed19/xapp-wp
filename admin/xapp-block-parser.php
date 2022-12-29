<?php


function xapp_find_block($blocks, $key, $value ){

	$s = array_search($key, array_column($blocks,$value ));
	if(is_bool($s) &&  $s == false ){
		$blocks = [];
		return $blocks;
	} 
	return $blocks[$s];

}
function xapp_parse_blocks($post){

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


	//find screens block only 
	$s = array_search('xapp/screens', array_column($blocks, 'blockName'));

	if(is_bool($s) &&  $s == false ){
		$blocks = [];
	} 
	return $blocks[$s];
}
function get_xapp_blocks(){

	if(empty($_GET['APP_POST_ID']) || empty($_GET['screenId'])) return [];

	$postId = $_GET['APP_POST_ID'];
	$screenId = $_GET['screenId'];



	$args = array(
	'include'        =>[$postId],
	'post_type'   => XAPP_POST_TYPE,
	'post_status' => 'publish',
	'numberposts' => 1,
	);
	$post = get_posts($args)[0];


    if(!$post) return __('App post not found','xapp');
	
	$autoSavedPost;
	 
	if(!empty($_GET['preview']) && $_GET['preview']){
       $autoSavedPost  =  wp_get_post_autosave($postId);	
	}
	if(!empty($autoSavedPost)){
		$post =  $autoSavedPost; 	
	}


	//$blocks = get_post_meta( $postId ,'blocks');
	
	
	
	// $post_content = $post->post_content;
	

	//remove empty attributes

	//$blocks  = json_encode($blocks);
	// $strs = ["\"attrs\":[],","\"settings\":[],","\"style\":[],"];
	// $replaceWith   = ["","",""];


	// // //for preview change http to https urls
	// if(!empty($_GET['preview']) && $_GET['preview']){
	// 	$strs[] = "http:";
	// 	$replaceWith[]   = "https:";
	// }
	//$post_content = str_replace($strs, $replaceWith, $post_content);
	$blocks = xapp_parse_blocks($post);


	//return $blocks;

	//get only screens block
	//TODO: move to
	//find xapp/screens array
	// $s = array_search('xapp/screens', array_column($blocks, 'blockName'));
	// if(is_bool($s) &&  $s == false ){
	// 	$blocks = [];
	// } 
	// $blocks = $blocks[$s];
	//return $blocks;
	//First from setting->screens find index of screen requested 
	$screens = $blocks['attrs']['settings']['screens'];
//  return $blocks ;

	$found_key = array_search($screenId, array_column($screens , 'screenId'));
 
	//Using index get innerHTML

	if(is_bool($found_key) &&  $found_key == false ) return [];

	if(array_key_exists('innerBlocks', $blocks))
		return $blocks['innerBlocks'][$found_key]['innerBlocks'];

	
	// $blocks  = str_replace("\"attrs\":[],", "", $blocks);
	// $blocks  = str_replace("xapp\/", "", $blocks);
   // return $bodytag;
	return [] ;
}