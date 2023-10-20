<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
 

class xapp_BlocksController
{


    private $templatesKeys = [];
    private $templates = [];
    public function get($blocks)
    {
        return  $this->getInnerBlocks($blocks, null);
    }


    public function getBLocksByPostId()
    {
        $blocks = get_xapp_blocks();
        return $this->getInnerBlocks($blocks, null);
    }






    public function getTemplatesKeys()
    {
        return $this->templatesKeys;
    }
 

    public function getTemplates()
    {
      
        //for loop on templates keys

        foreach ($this->templatesKeys as $key) {
            
            //do not attempt to get main template
            if($key == 'main') return;

            $templateBlocks = get_xapp_blocks($key);
            //innerblock accepts array of blocks
            $newBlocks = $this->getInnerBlocks($templateBlocks, null);
            $this->templates[$key] =   $newBlocks[0];
        }

        if(count($this->templates) < count($this->templatesKeys)){
            $this->getTemplates();
        }
    
        return $this->templates;
    }
    /**
     * 
     *  @descption
     *  Problem 1:
     *  Guttenberg default option liek pattels & fontSize are not added to style options 
     *  unless user select custom font size or color
     *  Problem 2:
     *  textColor -> text
     *  backgroundColor - backgroun
     */
    public function updateStyleAttributes($item)
    {
        $styleAttributes = [
            'gradient' => 'color',
            'backgroundColor' => 'color',
            'textColor' => 'color',
            'fontSize' => 'typography',
            'width' => 'spacing',
            'height' => 'spacing',
        ];

        foreach ($styleAttributes as $attribute => $category) {
            if (!empty($item['attrs'][$attribute])) {
                $item['attrs']['style'][$category][$attribute] = $item['attrs'][$attribute];

                //   unset($item['attrs'][$attribute]);
            }
        }


        //overides pallets we only need background
        if (!empty($item['attrs']['style']['color'])) {
            $c  = $item['attrs']['style']['color'];


            if (empty($c['background']) && !empty($c['backgroundColor'])) {
                $item['attrs']['style']['color']['background'] =   $this->parseColor($c['backgroundColor']);
                unset($item['attrs']['style']['color']['backgroundColor']);
            }
            if (!empty($c['textColor']) || !empty($c['text'])) {
              
                $color = !empty($c['textColor']) ? $c['textColor'] : $c['text'];
                $item['attrs']['style']['color']['text'] =  $this->parseColor($color);
               // $item['attrs']['style']['color']['text'] = $this->parseColor($color);
                unset($item['attrs']['style']['color']['textColor']);

             
            }
        }
 
        return $item;
    }

    public function parseColor($color)
    {
      
        switch($color) {
            case 'white':
                return '#ffffff';
            case 'black':
                return '#000000';
            case 'red':
                return '#ff0000';
            case 'green':
                return '#008000';
            case 'blue':
                return '#0000ff';
            default:
                return $color;
        }
    }

    public function getInnerBlocks($blocks, $args)
    {
        $sections = [];
        $subTemplates=[];

        if(empty($blocks[0]['blockName'])) return;



        foreach ($blocks as $key => $block) {

            $item = [];
            $name = $block['blockName'];
            if (!empty($args['screen'])) $item['screen'] = $args['screen'];
            //  $item['settings'] = !empty($args['settings']) ? $args['settings']  : null;
            if (!empty($block['attrs']['title'])) $item['title'] = $block['attrs']['title'];
           
            $item['blockName'] = $block['blockName'];

            //Important 
            $item['attrs'] = !empty($block['attrs']) ? $block['attrs'] :  null;

            if($block['innerHTML']){
                $item['innerHTML'] = $block['innerHTML'];
            }
          
            //dynami

            switch ($name) {
                case 'xapp/inkwell':
                case 'xapp/button':
                    if ($block['attrs']['settings']['linkTo'] == 'screen' 
                    || $block['attrs']['settings']['linkTo'] == 'post-screen'
                    || $block['attrs']['settings']['linkTo'] == 'tax-screen') {
                        //Do not run in loop if same screen is selected for naviation
                        $templateKey =  $block['attrs']['settings']['templatekey'];  
                    if($templateKey && $_GET['screenId'] !=  $templateKey ){
                            //add key if not already exists
                        if(!in_array($templateKey,$this->templatesKeys)){
                                $this->templatesKeys[] = $templateKey;
                                
                        }
                            // $item['template'] = $_GET['screenId']  ;
                     }
                    }
                    break;
                case 'core/embed':
                    $item['attrs']['settings'] = $block['attrs'];
                    $item['innerHTML'] = $block['innerHTML'];
                    break;
        
                case 'core/image':
                    preg_match('/src="([^"]+)"/', $block['innerHTML'], $match);
                    $item['attrs']['image'] = $match[1];
                    $item['attrs2']['image'] = $match[1];
                    break;
            }

            $item['attrs2'] = !empty($block['attrs']) ? $block['attrs'] :  null;

            

            //TODO: remove this one attrs2 transfer
            if($name == 'core/image'){
                $item['attrs2']['image'] =    $item['attrs']['image'];
            }

            $item = $this->updateStyleAttributes($item);
            /**
             * Get all inner blocks
             */

            if ($block['innerBlocks']) {
                $item['innerBlocks'] = $this->getInnerBlocks($block['innerBlocks'], null);
            }

            /**
             * Get the block from the plugin
             */
            $item = apply_filters('xapp_block_register', $item, $block);


   

    

            if (!empty($item)) {
                $sections[] = $item;
            }
        }

        return $sections;
    }
}
