<?php
/**
 * The Xapp_Routes class handles the xapps/home REST API endpoint.
 *
 * @since 1.0.0
 */
class Xapp_Routes
{

  /**
   * Registers the xapps/home REST API endpoint.
   *
   * @since 1.0.0
   */
  public static function register_rest_route()
  {
    register_rest_route('xapp', 'home', array(
      'methods' => 'GET',
      'permission_callback' => '__return_true',
      'callback' => array(__CLASS__, 'handle_rest_request'),
    ));
  }


  /**
   * Handles the xapps/home REST API endpoint request.
   *
   * @param WP_REST_Request $request The REST API request object.
   * @return WP_REST_Response The REST API response object.
   *
   * @since 1.0.0
   */
  public static function handle_rest_request($request)
  {

    $blocks = get_xapp_blocks();
    $ctrl = new XppBlocksController();
    $blocks = $ctrl->get($blocks);
    
    // Apply filters to the posts array
    $data['data']  =  $blocks;
    $data['templates']  = $ctrl->getTemplates();
    $data['settings'] = apply_filters('xapps_home_settings', []);

    return new WP_REST_Response($data, 200);
  }
}




// Register the xapps/home REST API endpoint on rest_api_init hook
add_action('rest_api_init', array('Xapp_Routes', 'register_rest_route'));
