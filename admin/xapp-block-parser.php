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
	if(!empty($_GET['preview']) && $_GET['preview'] == 'true'){
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
	// Get the post ID from the URL parameter.
	$postId = $_GET['WP_POST_ID'];
	
	// Get the post with that ID.
	$post = get_post($postId);
	
	// If the post doesn't exist, return an error message.
	if(!$post) {
		return __('Post not found','xapp');
	}
	
	// Parse the blocks in the post.
	 $blocks = xapp_parse_blocks($post);
	
	// Create the screen object.
	$screen = [
		'blockName' => 'core/post-blocks',
		'attrs' => null,
		'screenId'	=> $postId,
		'innerBlocks' => [
			array(
				'blockName' => 'core/post-content',
				'attrs' => null,
				'innerHTML' => $post->post_content,
				'innerBlocks' => $blocks
			)
		],
	];
	
	// Return the screen object.
	return [$screen];
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
	
	$autoSavedPost='';

	//check if preview is requested & preview is true
	if(!empty($_GET['preview']) && $_GET['preview'] == 'true'){
       $autoSavedPost  =  wp_get_post_autosave($postId);	
	}
	if (!empty($autoSavedPost)) {
		$post =  $autoSavedPost; 	
	}

	$blocks = xapp_parse_blocks($post, true);


	if($blocks[0]['blockName'] == 'xapp/screens') return [];
    $screens = $blocks['innerBlocks'];
	$found_key = xapp_findScreenIndex($screenId, $screens );

 
	//Using index get innerHTML
	if($found_key == -1 ) return [];

	if(array_key_exists('innerBlocks', $blocks)){
		$screen = $blocks['innerBlocks'][$found_key];

		return [$screen];
	}

	return [] ;
}
// function get_xapp_blocks($screenId=''){
// 	//Page or Post sepecific blocks

// 	if(!empty($_GET['WP_POST_ID'])) {
// 		return  getBlockByUrl();
// 	}

// 	if(empty($_GET['APP_POST_ID']) || empty($_GET['screenId'])) return [];

// 	$postId = $_GET['APP_POST_ID'];

// 	if(!$screenId){
// 		$screenId = $_GET['screenId'];
// 	}


// 	$args = array(
// 	'include'        =>[$postId],
// 	'post_type'   => XAPP_POST_TYPE,
// 	'post_status' => 'publish',
// 	'numberposts' => 1,
// 	);
// 	$post = get_posts($args)[0];


//     if(!$post) return [];
	
// 	$autoSavedPost='';

// 	//check if preview is requested & preview is true
// 	if(!empty($_GET['preview']) && $_GET['preview'] == 'true'){
//        $autoSavedPost  =  wp_get_post_autosave($postId);	
// 	}
// 	if (!empty($autoSavedPost)) {
// 		$post =  $autoSavedPost; 	
// 	}

// 	$blocks = xapp_parse_blocks($post, true);


// 	if($blocks[0]['blockName'] == 'xapp/screens') return [];
//     $screens = $blocks['innerBlocks'];
// 	$found_key = xapp_findScreenIndex($screenId, $screens );

 
// 	//Using index get innerHTML
// 	if($found_key == -1 ) return [];

// 	if(array_key_exists('innerBlocks', $blocks)){
// 		//make screen array for looping..
// 		$screen = $blocks['innerBlocks'][$found_key];
// 		return [$screen];
// 	}

// 	return [] ;
// }


//find index of screenId in $abc
function xapp_findScreenIndex($screenId, $screens) {
	$matchingIndex = null;
	foreach ($screens as $index => $screen) {
		if (isset($screen['attrs']['screenId']) &&
			$screen['attrs']['screenId'] === $screenId) {
			$matchingIndex = $index;
			break;
		}
	}
	return $matchingIndex;
}