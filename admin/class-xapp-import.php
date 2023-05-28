<?php // phpcs:ignore WordPress.Files.FileName
/**
 * Advanced Import Admin class
 *
 * Collection of admin hooks
 *
 * @package Advanced_Import
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit();
}

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Advanced_Import
 * @subpackage Advanced_Import/admin
 * @author     Addons Press <addonspress.com>
 */
class Xapp_Import_Admin
{
    /**
     * The Name of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $plugin_name    The ID of this plugin.
     */
    private $plugin_name;

    /**
     * The version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string    $version    The current version of this plugin.
     */
    private $version;

    /**
     * The Current theme name
     *
     * @since    1.0.0
     * @access   public
     * @var      string    $theme_name    The Current theme name.
     */
    public $theme_name = '';

    /**
     * Current step
     *
     * @since    1.0.0
     * @access   protected
     * @var      string    $step    Current step.
     */
    protected $step = '';

    /**
     * Array of steps
     *
     * @since    1.0.0
     * @access   public
     * @var      array    $steps    Array of steps.
     */
    protected $steps = [];

    /**
     * Demo lists
     *
     * @since    1.0.0
     * @access   public
     * @var      array    $demo_lists    Array of demo lists.
     */
    protected $demo_lists = [];

    /**
     * Demo lists
     *
     * @since    1.0.0
     * @access   public
     * @var      array    $demo_lists    Array of demo lists.
     */
    protected $is_pro_active = false;

    /**
     * Array of delayed post for late process
     *
     * @since    1.0.0
     * @access   public
     * @var      array    $delay_posts    Array of delayed post for late process.
     */
    private $delay_posts = [];

    /**
     * Store logs and errors
     *
     * @since    1.0.0
     * @access   public
     * @var      array    $logs    Store logs and errors.
     */
    public $logs = [];

    /**
     * Store errors
     *
     * @since    1.0.0
     * @access   public
     * @var      array    $errors    Store errors.
     */
    public $errors = [];

    /**
     * Current added Menu hook_suffix
     *
     * @since    1.0.0
     * @access   public
     * @var      array    $logs    Store logs and errors.
     */
    public $hook_suffix;

    /**
     * Slug of the import page
     *
     * @since    1.0.0
     * @access   public
     * @var      string    $logs    Store logs and errors.
     */
    private $current_template_type;

    /**
     * Slug of the import page
     *
     * @since    1.0.0
     * @access   public
     * @var      string    $logs    Store logs and errors.
     */
    private $current_template_url;

    /**
     * Total requests
     *
     * @since    1.3.3
     * @access   public
     * @var      int    $total_request    Store total request for progress bar.
     */
    private $total_request;
    private $current_request = 0;

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct()
    {
    }

    /**
     * Main Xapp_Import_Admin Instance
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     * @return object $instance Xapp_Import_Admin Instance
     */
    public static function instance()
    {
        // Store the instance locally to avoid private static replication.
        static $instance = null;

        // Only run these methods if they haven't been ran previously.
        if (null === $instance) {
            $instance = new Xapp_Import_Admin();
            $instance->plugin_name = ADVANCED_IMPORT_PLUGIN_NAME;
            $instance->version = ADVANCED_IMPORT_VERSION;

            /*page slug using theme name */
            $instance->theme_name = sanitize_key(get_option('template'));
        }

        // Always return the instance.
        return $instance;
    }

    /**
     * Check if template is available to import
     *
     * @since    1.0.8
     * @param      array $item    current array of demo list.
     * @return boolean
     */
    public function is_template_available($item)
    {
        $is_available = false;

        /*if pro active everything is available*/
        if ($this->is_pro_active) {
            $is_available = true;
        } elseif (!isset($item['is_pro'])) {
            /*if is_pro not set the $item is available*/
            $is_available = true; /*template available since */
        } elseif (isset($item['is_pro']) && !$item['is_pro']) {
            /*if is_pro not set but it is false, it will be free and avialable*/
            $is_available = true;
        }

        return (bool) apply_filters('advanced_import_is_template_available', $is_available, $item);
    }

    /**
     * Check if template is available to import
     *
     * @since    1.0.8
     * @param      array $item    current array of demo list.
     * @return boolean
     */
    public function is_pro($item)
    {
        $is_pro = false;
        if (isset($item['is_pro']) && $item['is_pro']) {
            $is_pro = true;
        }

        return (bool) apply_filters('advanced_import_is_pro', $is_pro, $item);
    }

    /**
     * Adding new mime types.
     *
     * @access public
     * @since    1.0.0
     * @param  array $mimes    existing mime types.
     * @return array
     */
    public function mime_types($mimes = [])
    {
        $add_mimes = [
            'json' => 'application/json',
        ];

        return array_merge($mimes, $add_mimes);
    }

    /**
     * Determine if the user already has theme content installed.
     *
     * @access public
     */
    public function is_possible_upgrade()
    {
        return false;
    }

    /**
     * Add admin menus
     *
     * @access public
     */
    public function import_menu()
    {
        $this->hook_suffix[] = add_theme_page(esc_html__('Demo Import ', 'advanced-import'), esc_html__('Demo Import'), 'manage_options', 'advanced-import', [$this, 'demo_import_screen']);
        $this->hook_suffix[] = add_management_page(esc_html__('Advanced Import', 'advanced-import'), esc_html__('Advanced Import', 'advanced-import'), 'manage_options', 'advanced-import-tool', [$this, 'demo_import_screen']);
        $this->hook_suffix = apply_filters('advanced_import_menu_hook_suffix', $this->hook_suffix);
    }

    /**
     * 1st step of demo import view
     * Upload Zip file
     * Demo List
     */
    public function init_demo_import()
    {
        global $pagenow;
        $total_demo = 0;
        if ($pagenow != 'tools.php') {
            $this->demo_lists = apply_filters('advanced_import_demo_lists', []);
            $this->is_pro_active = apply_filters('advanced_import_is_pro_active', $this->is_pro_active);
            $demo_lists = $this->demo_lists;

            $total_demo = is_array($demo_lists) ? count($demo_lists) : 0;
            if ($total_demo >= 1) {
                $this->demo_list($demo_lists, $total_demo);
            }
        }

        $this->demo_import_form($total_demo);
    }

    /**
     * 3rd steps helper functions
     * Get json from json file
     *
     * @param string $file file url.
     * @return mixed
     */
    public function get_json_data_from_file($file)
    {
        // if ( get_transient( $file ) ) {
        // 	return get_transient( $file );
        // }

        //if ( $this->current_template_type == 'array' ) {

        $type = strtok($file, '.');

        //	if ( isset( $this->current_template_url[ $type ] ) ) {
        $request = wp_remote_get($file);

        $response = wp_remote_retrieve_body($request);

        $result = json_decode($response, true);
        set_transient($file, $result, 1000);

        return $result;
        //	}
        return [];
        //}

        /**
         *  Get content file from directory
         *
         */
        if (is_file(ADVANCED_IMPORT_TEMP . basename($file))) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
            WP_Filesystem();
            global $wp_filesystem;
            $file_name = ADVANCED_IMPORT_TEMP . basename($file);
            if (file_exists($file_name)) {
                $result = json_decode($wp_filesystem->get_contents($file_name), true);
                set_transient($file, $result, 1000);
                return $result;
            }
        }
        return [];
    }

    public function get_main_content_json()
    {
        return $this->get_json_data_from_file('content.json');
    }
    public function get_widgets_json()
    {
        return $this->get_json_data_from_file('widgets.json');
    }

    public function get_theme_options_json()
    {
        return $this->get_json_data_from_file('options.json');
    }

   
    /*
	 callback function to importing post type
	 * all post type is imported from here
	 * return mix
	 * */
    public function import_content_post_type_data($post_type, $request)
    {
        // $post_type = ! empty( $_POST['content'] ) ? sanitize_text_field( $_POST['content'] ) : false;

        require_once ABSPATH . 'wp-admin/includes/image.php';
        require_once ABSPATH . 'wp-admin/includes/post.php';

        if (!current_user_can('upload_files')) {
            wp_send_json_error([
                'message' => esc_html__('Sorry, you are not allowed to install demo on this site.', 'advanced-import'),
            ]);
        }
        
        
        if(empty($request['xappItemMainPluginSlug'])) return 'xappItemMainPluginSlug plugin slug required';
        $contentFile =  content_url('/plugins') .'/'. $request['xappItemMainPluginSlug'] .'/data/content.json' ;
 

        $all_data = $this->get_json_data_from_file($contentFile);

        if (empty($all_data)) {
            return 'content.json file is empty';
        }
    
        $this->reset_transient();



        //Import media & content sepratly in multiple requrests

        if ($request['type'] == 'content') {
            $all_data['attachment'] = [];
        }

        if ($request['type'] == 'attachment') {
            $attachment = $all_data['attachment'];
            $all_data = $all_data['attachment'];
        }

        foreach ($all_data as $key => $d) {
            /*Import 10 posts at a time*/
            $x = 0;
            while ($x <= count($all_data[$key])) {
                $newArr = array_splice($all_data[$key], $x, $x + 5);
                foreach ($newArr as $post_data) {
                    if (!empty($post_data)) {
                        $this->process_import_single_post($key, $post_data);
                    }
                }
                $x = $x + 5;
            }

            /*processed delayed posts*/
            $this->process_delayed_posts();

            /*process child posts*/
            $this->processpost_orphans();
        }
        $this->reset_transient();

        $post = get_page_by_title($request['xappItemTitle'], OBJECT, $post_type);

        if ($post) {
            $data = [
                'ID' => $post->ID,
                'post_title' => $request['title'],
                'meta_input' => [
                    'xappItemId' => $request['xappItemId'],
                    'xappItemVersion' => $request['xappItemVersion'],
                    'xappItemMainPluginSlug' => $request['xappItemMainPluginSlug'],
                    'appBundleId'=> '', //new appbundle will be generate by  BrandAppAssets.jsx generateBundleId()
                    'ios' =>'',
                    'android' =>'',
                    'appEnv' => '',
                    'appLocales'=>'',
                    'blockLocales' => '',
                    // 'blockLocales': $request['blockLocales'],
                    // 'appLocales': $request['appLocales'],
                    // 'appEnv': $request['appEnv'],
                ],
            ];

            $newPost = wp_update_post($data);

            return wp_send_json([
                'id' => str_replace('&amp;', '&', get_edit_post_link($newPost)),
            ]);
        }

        return $all_data;
    }

    /*
	set and get transient imported_term_ids
	return mix*/
    public function imported_term_id($original_term_id, $new_term_id = false)
    {
        $terms = get_transient('imported_term_ids');
        if (!is_array($terms)) {
            $terms = [];
        }
        if ($new_term_id) {
            if (!isset($terms[$original_term_id])) {
                $this->log(esc_html__('Insert old TERM ID ', 'advanced-import') . $original_term_id . esc_html__(' as new TERM ID: ', 'advanced-import') . $new_term_id);
            } elseif ($terms[$original_term_id] != $new_term_id) {
                $this->error('Replacement OLD TERM ID ' . $original_term_id . ' overwritten by new TERM ID: ' . $new_term_id);
            }
            $terms[$original_term_id] = $new_term_id;
            set_transient('imported_term_ids', $terms, 60 * 60 * 24);
        } elseif ($original_term_id && isset($terms[$original_term_id])) {
            return $terms[$original_term_id];
        }

        return false;
    }

    /*
	set and get imported_post_ids
	return mix*/
    public function imported_post_id($original_id = false, $new_id = false)
    {
        if (is_array($original_id) || is_object($original_id)) {
            return false;
        }
        $post_ids = get_transient('imported_post_ids');
        if (!is_array($post_ids)) {
            $post_ids = [];
        }
        if ($new_id) {
            if (!isset($post_ids[$original_id])) {
                $this->log(esc_html__('Insert old ID ', 'advanced-import') . $original_id . esc_html__(' as new ID: ', 'advanced-import') . $new_id);
            } elseif ($post_ids[$original_id] != $new_id) {
                $this->error(esc_html__('Replacement OLD ID ', 'advanced-import') . $original_id . ' overwritten by new ID: ' . $new_id);
            }
            $post_ids[$original_id] = $new_id;
            set_transient('imported_post_ids', $post_ids, 60 * 60 * 24);
        } elseif ($original_id && isset($post_ids[$original_id])) {
            return $post_ids[$original_id];
        } elseif ($original_id === false) {
            return $post_ids;
        }
        return false;
    }

    /*
	set and get post_orphans/post parent
	if parent is not already imported the child will be orphan
	return mix*/
    private function post_orphans($original_id = false, $missing_parent_id = false)
    {
        $post_ids = get_transient('post_orphans');
        if (!is_array($post_ids)) {
            $post_ids = [];
        }
        if ($missing_parent_id) {
            $post_ids[$original_id] = $missing_parent_id;
            set_transient('post_orphans', $post_ids, 60 * 60 * 24);
        } elseif ($original_id && isset($post_ids[$original_id])) {
            return $post_ids[$original_id];
        } elseif ($original_id === false) {
            return $post_ids;
        }
        return false;
    }

    /*set delayed post for later process*/
    private function delay_post_process($post_type, $post_data)
    {
        if (!isset($this->delay_posts[$post_type])) {
            $this->delay_posts[$post_type] = [];
        }
        $this->delay_posts[$post_type][$post_data['post_id']] = $post_data;
    }

    /*
	Important Function
	Import single Post/Content
	*/

    /*Shortcode/Meta/Post Ids fixed start*/

    /*
     * since 1.2.3
     *  return the difference in length between two strings
     * */
    public function strlen_diff($a, $b)
    {
        return strlen($b) - strlen($a);
    }

    /*
     * since 1.2.3
     * helper function to parse url, shortcode, post ids form provided content
     * * currently uses on meta and post content
     * */
    public function parse_shortcode_meta_content($content)
    {
        /*we have to format the post content. rewriting images and gallery stuff*/
        $replace = $this->imported_post_id();

        /*filters urls for replace*/
        $urls_replace = [];
        foreach ($replace as $key => $val) {
            if ($key && $val && !is_numeric($key) && !is_numeric($val)) {
                $urls_replace[$key] = $val;
            }
        }
        /*replace image/file urls*/
        if ($urls_replace) {
            uksort($urls_replace, [&$this, 'strlen_diff']);
            foreach ($urls_replace as $from_url => $to_url) {
                $content = str_replace($from_url, $to_url, $content);
            }
        }

        /*gallery fixed*/
        if (preg_match_all('#\[gallery[^\]]*\]#', $content, $matches)) {
            foreach ($matches[0] as $match_id => $string) {
                if (preg_match('#ids="([^"]+)"#', $string, $ids_matches)) {
                    $ids = explode(',', $ids_matches[1]);
                    foreach ($ids as $key => $val) {
                        $new_id = $val ? $this->imported_post_id($val) : false;
                        if (!$new_id) {
                            unset($ids[$key]);
                        } else {
                            $ids[$key] = $new_id;
                        }
                    }
                    $new_ids = implode(',', $ids);
                    $content = str_replace($ids_matches[0], 'ids="' . $new_ids . '"', $content);
                }
            }
        }

        /*contact form 7 id fixes.*/
        if (preg_match_all('#\[contact-form-7[^\]]*\]#', $content, $matches)) {
            foreach ($matches[0] as $match_id => $string) {
                if (preg_match('#id="(\d+)"#', $string, $id_match)) {
                    $new_id = $this->imported_post_id($id_match[1]);
                    if ($new_id) {
                        $content = str_replace($id_match[0], 'id="' . $new_id . '"', $content);
                    } else {
                        /*no imported ID found. remove this entry.*/
                        $content = str_replace($matches[0], '(insert contact form here)', $content);
                    }
                }
            }
        }

        /*Gutentor*/
        if (preg_match_all('/\"pTaxTerm"(.*?)\]/', $content, $matches)) {
            foreach ($matches[0] as $match_id => $string) {
                if (preg_match_all('/\"value":(.*?)\}/', $string, $matches1)) {
                    foreach ($matches1[0] as $match_id1 => $string1) {
                        $new_id = $this->imported_term_id($matches1[1][$match_id1]);
                        $content = str_replace($string1, '"value":' . $new_id . '}', $content);
                    }
                }
            }
        }
        if (preg_match_all('/\"e14TaxTerm"(.*?)\]/', $content, $matches)) {
            foreach ($matches[0] as $match_id => $string) {
                if (preg_match_all('/\"value":(.*?)\}/', $string, $matches1)) {
                    foreach ($matches1[0] as $match_id1 => $string1) {
                        $new_id = $this->imported_term_id($matches1[1][$match_id1]);
                        $content = str_replace($string1, '"value":' . $new_id . '}', $content);
                    }
                }
            }
        }
        if (preg_match_all('/data-gpid="(.*?)\" /', $content, $matches)) {
            foreach ($matches[0] as $match_id => $string) {
                $new_id = $this->imported_post_id($matches[1][$match_id]);
                $content = str_replace($matches[0][$match_id], 'data-gpid="' . $new_id . '" ', $content);
            }
        }
        if (preg_match_all('/\"p4PostId"(.*?)\,/', $content, $matches)) {
            foreach ($matches[0] as $match_id => $string) {
                $new_id = $this->imported_post_id($matches[1][$match_id]);
                $content = str_replace($matches[0][$match_id], '"p4PostId":' . $new_id . ',', $content);
            }
        }
        return $content;
    }
    /*Shortcode/Meta/Post Ids fixed end*/

    /*update parent page id for child page*/
    private function processpost_orphans()
    {
        /*get post orphans to find it parent*/
        $orphans = $this->post_orphans();
        foreach ($orphans as $original_post_id => $original_post_parent_id) {
            if ($original_post_parent_id) {
                if ($this->imported_post_id($original_post_id) && $this->imported_post_id($original_post_parent_id)) {
                    $post_data = [];
                    $post_data['ID'] = $this->imported_post_id($original_post_id);
                    $post_data['post_parent'] = $this->imported_post_id($original_post_parent_id);
                    wp_update_post($post_data);
                    $this->post_orphans($original_post_id, 0); /*ignore future*/
                }
            }
        }
    }

    public function isMediaFileAlreadyExists($post_data)
    {
        $filename = $post_data['meta']['_wp_attachment_metadata']['file'];

        global $wpdb;
        $image_src = wp_upload_dir()['baseurl'] . '/' . _wp_relative_upload_path($filename);
        $query = "SELECT COUNT(*) FROM {$wpdb->posts} WHERE guid='$image_src'";
        $count = intval($wpdb->get_var($query));
        return $wpdb->get_var($query) > 0;
    }

    /*
	Important Function
	Import single Post/Content
	*/
    private function process_import_single_post($post_type, $post_data, $delayed = 0)
    {
        $this->current_request = $this->current_request + 1;

        $this->log(esc_html__('Processing ', 'advanced-import') . $post_type . ' ' . $post_data['post_id']);
        $original_post_data = $post_data;

        /*if there is not post type return false*/
        if (!post_type_exists($post_type)) {
            return false;
        }

        /*if it is aready imported return*/
        if (post_exists($post_data['post_title'], '', $post_data['post_date'], $post_data['post_type'], 'published') > 0) {
            return true; /*already done*/
        }

        /*set post_name id for empty post name/title*/
        if (empty($post_data['post_title']) && empty($post_data['post_name'])) {
            $post_data['post_name'] = $post_data['post_id'];
        }

        /*set post_type on $post_data*/
        $post_data['post_type'] = $post_type;

        /*post_orphans/post parent management */
        $post_parent = isset($post_data['post_parent']) ? absint($post_data['post_parent']) : false;
        if ($post_parent) {
            /*if we already know the parent, map it to the new local imported ID*/
            if ($this->imported_post_id($post_parent)) {
                $post_data['post_parent'] = $this->imported_post_id($post_parent);
            } else {
                /*if there is not parent imported, child will be orphans*/
                $this->post_orphans(absint($post_data['post_id']), $post_parent);
                $post_data['post_parent'] = 0;
            }
        }

        $foundid = 0;

        /*
         check if already exists by post_name and post_title*/
        /*don't use post_exists because it will dupe up on media with same name but different slug*/
        if (!empty($post_data['post_title']) && !empty($post_data['post_name'])) {
            global $wpdb;
            $sql = "
                        SELECT ID, post_name, post_parent, post_type
                        FROM $wpdb->posts
                        WHERE post_name = %s
                        AND post_title = %s
                        AND post_type = %s
					";
            $pages = $wpdb->get_results($wpdb->prepare($sql, [$post_data['post_name'], $post_data['post_title'], $post_type]), OBJECT_K);

            foreach ((array) $pages as $page) {
                if ($page->post_name == $post_data['post_name']) {
                    $foundid = $page->ID;
                }
            }
        }

        /*
         * todo it may not required
         * backwards compat with old import format.*/
        if (isset($post_data['meta'])) {
            foreach ($post_data['meta'] as $key => $meta) {
                if (is_array($meta) && count($meta) == 1) {
                    $single_meta = current($meta);
                    if (!is_array($single_meta)) {
                        $post_data['meta'][$key] = $single_meta;
                    }
                }
            }
        }

        /*finally process*/
        switch ($post_type) {
            /*case attachment*/
            case 'attachment':
                /*import media via url*/
                if (isset($post_data['guid']) && !empty($post_data['guid'])) {
                    /*check if this has already been imported.*/
                    $old_guid = $post_data['meta']['_wp_attached_file'];

                    if ($this->isMediaFileAlreadyExists($post_data)) {
                        return true; /*already done*/
                    }

                    // ignore post parent, we haven't imported those yet.
                    // $file_data = wp_remote_get($post_data['guid']);
                    $remote_url = $post_data['guid'];

                    $post_data['upload_date'] = date('Y/m', strtotime($post_data['post_date_gmt']));

                    if (isset($post_data['meta'])) {
                        foreach ($post_data['meta'] as $key => $meta) {
                            if ($key == '_wp_attached_file') {
                                foreach ((array) $meta as $meta_val) {
                                    if (preg_match('%^[0-9]{4}/[0-9]{2}%', $meta_val, $matches)) {
                                        $post_data['upload_date'] = $matches[0];
                                    }
                                }
                            }
                        }
                    }

                    /*upload the file*/
                    $upload = $this->import_image_and_file($remote_url, $post_data);

                    //return $remote_url ;

                    /*if error on upload*/
                    if (!is_array($upload) || is_wp_error($upload)) {
                        /*todo: error*/
                        return false;
                    }

                    /*check file type, if file type not found return false*/
                    if ($info = wp_check_filetype($upload['file'])) {
                        $post_data['post_mime_type'] = $info['type'];
                    } else {
                        return false;
                    }

                    /*set guid file url*/
                    $post_data['guid'] = $upload['url'];

                    /*
                     * insert attachment
                     *https://developer.wordpress.org/reference/functions/wp_insert_attachment/
                     * */

                    $attach_id = wp_insert_attachment($post_data, $upload['file']);

                    //return $attach_id ;
                    if ($attach_id) {
                        /*update meta*/
                        if (!empty($post_data['meta'])) {
                            foreach ($post_data['meta'] as $meta_key => $meta_val) {
                                if ($meta_key != '_wp_attached_file' && !empty($meta_val)) {
                                    update_post_meta($attach_id, $meta_key, $meta_val);
                                }
                            }
                        }
                        /* Update metadata for an attachment.*/
                        wp_update_attachment_metadata($attach_id, wp_generate_attachment_metadata($attach_id, $upload['file']));

                        /*remap resized image URLs, works by stripping the extension and remapping the URL stub.*/
                        if (preg_match('!^image/!', $info['type'])) {
                            $parts = pathinfo($remote_url);
                            $name = basename($parts['basename'], ".{$parts['extension']}"); // PATHINFO_FILENAME in PHP 5.2

                            $parts_new = pathinfo($upload['url']);
                            $name_new = basename($parts_new['basename'], ".{$parts_new['extension']}");

                            $this->imported_post_id($parts['dirname'] . '/' . $name, $parts_new['dirname'] . '/' . $name_new);
                        }
                        $this->imported_post_id($post_data['post_id'], $attach_id);
                    }
                }
                break;

            default:
                /*Process Post Meta*/
                if (!empty($post_data['meta']) && is_array($post_data['meta'])) {
                    /*fix for double json encoded stuff*/
                    foreach ($post_data['meta'] as $meta_key => $meta_val) {
                        if (is_string($meta_val) && strlen($meta_val) && $meta_val[0] == '[') {
                            $test_json = @json_decode($meta_val, true);
                            if (is_array($test_json)) {
                                $post_data['meta'][$meta_key] = $test_json;
                            }
                        }
                    }

                    //                  array_walk_recursive( $post_data['meta'], array( advanced_import_elementor(), 'elementor_id_import' ) );

                    /*todo gutenberg and page builders*/

                    /*
					replace menu data
					work out what we're replacing. a tax, page, term etc..*/
                    if (isset($post_data['meta']['_menu_item_menu_item_parent']) && 0 != $post_data['meta']['_menu_item_menu_item_parent']) {
                        $new_parent_id = $this->imported_post_id($post_data['meta']['_menu_item_menu_item_parent']);
                        if (!$new_parent_id) {
                            if ($delayed) {
                                /*already delayed, unable to find this meta value, skip inserting it*/
                                $this->error(esc_html__('Unable to find replacement. Continue anyway.... content will most likely break..', 'advanced-import'));
                            } else {
                                /*not found , delay it*/
                                $this->error(esc_html__('Unable to find replacement. Delaying....', 'advanced-import'));
                                $this->delay_post_process($post_type, $original_post_data);
                                return false;
                            }
                        }
                        $post_data['meta']['_menu_item_menu_item_parent'] = $new_parent_id;
                    }

                    /*if _menu_item_type*/
                    if (isset($post_data['meta']['_menu_item_type'])) {
                        switch ($post_data['meta']['_menu_item_type']) {
                            case 'post_type':
                                if (!empty($post_data['meta']['_menu_item_object_id'])) {
                                    $new_parent_id = $this->imported_post_id($post_data['meta']['_menu_item_object_id']);
                                    if (!$new_parent_id) {
                                        if ($delayed) {
                                            /*already delayed, unable to find this meta value, skip inserting it*/
                                            $this->error(esc_html__('Unable to find replacement. Continue anyway.... content will most likely break..', 'advanced-import'));
                                        } else {
                                            /*not found , delay it*/
                                            $this->error(esc_html__('Unable to find replacement. Delaying....', 'advanced-import'));
                                            $this->delay_post_process($post_type, $original_post_data);
                                            return false;
                                        }
                                    }
                                    $post_data['meta']['_menu_item_object_id'] = $new_parent_id;
                                }
                                break;

                            case 'taxonomy':
                                if (!empty($post_data['meta']['_menu_item_object_id'])) {
                                    $new_parent_id = $this->imported_term_id($post_data['meta']['_menu_item_object_id']);
                                    if (!$new_parent_id) {
                                        if ($delayed) {
                                            /*already delayed, unable to find this meta value, skip inserting it*/
                                            $this->error(esc_html__('Unable to find replacement. Continue anyway.... content will most likely break..', 'advanced-import'));
                                        } else {
                                            /*not found , delay it*/
                                            $this->error(esc_html__('Unable to find replacement. Delaying....', 'advanced-import'));
                                            $this->delay_post_process($post_type, $original_post_data);
                                            return false;
                                        }
                                    }
                                    $post_data['meta']['_menu_item_object_id'] = $new_parent_id;
                                }
                                break;
                        }
                    }
                }

                /*
				post content parser
				for shortcode post id replacement*/
                $post_data['post_content'] = $this->parse_shortcode_meta_content($post_data['post_content']);

                $replace_tax_id_keys = ['taxonomies'];
                foreach ($replace_tax_id_keys as $replace_key) {
                    if (preg_match_all('# ' . $replace_key . '="(\d+)"#', $post_data['post_content'], $matches)) {
                        foreach ($matches[0] as $match_id => $string) {
                            $new_id = $this->imported_term_id($matches[1][$match_id]);
                            if ($new_id) {
                                $post_data['post_content'] = str_replace($string, ' ' . $replace_key . '="' . $new_id . '"', $post_data['post_content']);
                            } else {
                                $this->error(esc_html__('Unable to find TAXONOMY replacement for ', 'advanced-import') . $replace_key . '="' . $matches[1][$match_id] . esc_html__('in content.', 'advanced-import'));
                                if ($delayed) {
                                    /*already delayed, unable to find this meta value, skip inserting it*/
                                    $this->error(esc_html__('Unable to find replacement. Continue anyway.... content will most likely break..', 'advanced-import'));
                                } else {
                                    /*not found , delay it*/
                                    $this->delay_post_process($post_type, $original_post_data);
                                    return false;
                                }
                            }
                        }
                    }
                }

                /*do further filter if you need*/
                $post_data = apply_filters('advanced_import_post_data', $post_data);

                /*finally insert post data*/

                if ($foundid > 0) {
                    $post_data['ID'] = $foundid;
                    /*finally insert post data*/
                    $post_id = wp_update_post($post_data, true);
                } else {
                    $post_id = wp_insert_post($post_data, true);
                }
                if (!is_wp_error($post_id)) {
                    /*set id on imported_post_id*/
                    $this->imported_post_id($post_data['post_id'], $post_id);

                    /*add/update post meta*/
                    if (!empty($post_data['meta'])) {
                        foreach ($post_data['meta'] as $meta_key => $meta_val) {
                            /*if the post has a featured image, take note of this in case of remap*/
                            if ('_thumbnail_id' == $meta_key) {
                                /*find this inserted id and use that instead.*/
                                $inserted_id = $this->imported_post_id(intval($meta_val));
                                if ($inserted_id) {
                                    $meta_val = $inserted_id;
                                }
                            } elseif ('_elementor_data' == $meta_key) {
                                advanced_import_elementor()->elementor_data_posts($post_id, $meta_val);
                            }
                            /*update meta*/
                            update_post_meta($post_id, $meta_key, $meta_val);
                        }
                    }

                    if (!empty($post_data['terms'])) {
                        $terms_to_set = [];
                        foreach ($post_data['terms'] as $term_slug => $terms) {
                            foreach ($terms as $term) {
                                $taxonomy = $term['taxonomy'];
                                if (taxonomy_exists($taxonomy)) {
                                    $term_exists = term_exists($term['slug'], $taxonomy);
                                    $term_id = is_array($term_exists) ? $term_exists['term_id'] : $term_exists;
                                    if (!$term_id) {
                                        if (!empty($term['parent'])) {
                                            /*see if we have imported this yet?*/
                                            $term['parent'] = $this->imported_term_id($term['parent']);
                                        }
                                        $term_id_tax_id = wp_insert_term($term['name'], $taxonomy, $term);
                                        if (!is_wp_error($term_id_tax_id)) {
                                            $term_id = $term_id_tax_id['term_id'];
                                        } else {
                                            // todo - error
                                            continue;
                                        }
                                    }
                                    /*set term_id on imported_term_id*/
                                    $this->imported_term_id($term['term_id'], $term_id);

                                    /*add the term meta.*/
                                    if ($term_id && !empty($term['meta']) && is_array($term['meta'])) {
                                        $replace_post_ids = apply_filters('advanced_import_replace_post_ids', ['image_id', 'thumbnail_id', 'author_picture']);
                                        foreach ($term['meta'] as $meta_key => $meta_val) {
                                            // we have to replace certain meta_key/meta_val
                                            // e.g. thumbnail id from woocommerce product categories.

                                            if (in_array($meta_key, $replace_post_ids)) {
                                                if ($new_meta_val = $this->imported_post_id($meta_val)) {
                                                    /*use this new id.*/
                                                    $meta_val = $new_meta_val;
                                                }
                                            }
                                            update_term_meta($term_id, $meta_key, $meta_val);
                                        }
                                    }
                                    $terms_to_set[$taxonomy][] = intval($term_id);
                                }
                            }
                        }
                        foreach ($terms_to_set as $tax => $ids) {
                            wp_set_post_terms($post_id, $ids, $tax);
                        }

                        if ((isset($post_data['meta']['_elementor_data']) && !empty($post_data['meta']['_elementor_data'])) || (isset($post_data['meta']['_elementor_css']) && !!empty($post_data['meta']['_elementor_css']))) {
                            advanced_import_elementor()->elementor_post($post_id);
                        }

                        /*Gutentor*/
                        $post = get_post($post_id);
                        $content = $post->post_content;
                        if (preg_match_all('/data-gpid="(.*?)\" /', $content, $matches)) {
                            foreach ($matches[0] as $match_id => $string) {
                                $content = str_replace($matches[0][$match_id], 'data-gpid="' . $post_id . '" ', $content);
                            }
                        }
                        $post->post_content = $content;
                        wp_update_post($post);
                    }
                }
                break;
        }

        return true;
    }
    /*
	Process delayed post
	*/
    private function process_delayed_posts($last_delay = false)
    {
        $this->log(esc_html__('Processing ', 'advanced-import') . count($this->delay_posts, COUNT_RECURSIVE) . esc_html__('delayed posts', 'advanced-import'));
        for ($x = 1; $x < 4; $x++) {
            foreach ($this->delay_posts as $delayed_post_type => $delayed_post_data_s) {
                foreach ($delayed_post_data_s as $delayed_post_id => $delayed_post_data) {
                    /*already processed*/
                    if ($this->imported_post_id($delayed_post_data['post_id'])) {
                        $this->log(
                            $x . esc_html__('- Successfully processed ', 'advanced-import') . $delayed_post_type . esc_html__(' ID ', 'advanced-import') . $delayed_post_data['post_id'] . esc_html__(' previously.', 'advanced-import')
                        );

                        /*already processed, remove it from delay_posts*/
                        unset($this->delay_posts[$delayed_post_type][$delayed_post_id]);
                        $this->log(esc_html__(' ( ', 'advanced-import') . count($this->delay_posts, COUNT_RECURSIVE) . esc_html__(' delayed posts remain ) ', 'advanced-import'));
                    } /*Process it*/ elseif ($this->process_import_single_post($delayed_post_type, $delayed_post_data, $last_delay)) {
                        $this->log($x . esc_html__(' - Successfully found delayed replacement for ', 'advanced-import') . $delayed_post_type . esc_html__(' ID ', 'advanced-import') . $delayed_post_data['post_id']);

                        /*successfully processed, remove it from delay_posts*/
                        unset($this->delay_posts[$delayed_post_type][$delayed_post_id]);
                        $this->log(esc_html__(' ( ', 'advanced-import') . count($this->delay_posts, COUNT_RECURSIVE) . esc_html__(' delayed posts remain ) ', 'advanced-import'));
                    } else {
                        $this->log($x . esc_html__(' - Not found delayed replacement for ', 'advanced-import') . $delayed_post_type . esc_html__(' ID ', 'advanced-import') . $delayed_post_data['post_id']);
                    }
                }
            }
        }
    }

    /*Get file from url , download it and add to local*/
    private function import_image_and_file($url, $post)
    {
        /*extract the file name and extension from the url*/
        $file_name = basename($url);
        $local_file = ADVANCED_IMPORT_TEMP_UPLOADS . $file_name;
        $upload = false;

        /*
		if file is already on local, return file information
		It means media is on local, while exporting media*/
        if (is_file($local_file) && filesize($local_file) > 0) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
            WP_Filesystem();
            global $wp_filesystem;
            $file_data = $wp_filesystem->get_contents($local_file);
            $upload = wp_upload_bits($file_name, 0, $file_data, $post['upload_date']);
            if ($upload['error']) {
                return new WP_Error('upload_dir_error', $upload['error']);
            }
        }

        /*if there is no file on local or error on local file need to fetch it*/
        if (!$upload || $upload['error']) {
            /*get placeholder file in the upload dir with a unique, sanitized filename*/
            $upload = wp_upload_bits($file_name, 0, '', $post['upload_date']);
            if ($upload['error']) {
                return new WP_Error('upload_dir_error', $upload['error']);
            }

            $max_size = (int) apply_filters('import_attachment_size_limit', 0);

            /*finally fetch the file from remote*/
            $response = wp_remote_get($url);
            if (is_array($response) && !is_wp_error($response)) {
                require_once ABSPATH . 'wp-admin/includes/file.php';
                $headers = $response['headers'];
                WP_Filesystem();
                global $wp_filesystem;
                $wp_filesystem->put_contents($upload['file'], $response['body']);
            } else {
                /*required to download file failed.*/
                wp_delete_file($upload['file']);
                return new WP_Error('import_file_error', esc_html__('Remote server did not respond', 'advanced-import'));
            }

            $file_size = filesize($upload['file']);

            /*check for size*/
            if (isset($headers['content-length']) && $file_size != $headers['content-length']) {
                wp_delete_file($upload['file']);
                return new WP_Error('import_file_error', esc_html__('Remote file is incorrect size', 'advanced-import'));
            }

            /*if file size is 0*/
            if (0 == $file_size) {
                wp_delete_file($upload['file']);
                return new WP_Error('import_file_error', esc_html__('Zero size file downloaded', 'advanced-import'));
            }

            /*if file is too large*/
            if (!empty($max_size) && $file_size > $max_size) {
                wp_delete_file($upload['file']);
                return new WP_Error('import_file_error', sprintf(esc_html__('Remote file is too large, limit is %s', 'advanced-import'), size_format($max_size)));
            }
        }

        /*keep track of the old and new urls so we can substitute them later*/
        $this->imported_post_id($url, $upload['url']);
        $this->imported_post_id($post['guid'], $upload['url']);

        /*keep track of the destination if the remote url is redirected somewhere else*/
        if (isset($headers['x-final-location']) && $headers['x-final-location'] != $url) {
            $this->imported_post_id($headers['x-final-location'], $upload['url']);
        }
        return $upload;
    }

    /*
	Replace necessary ID by Local imported ID
	*/
    private function replace_old_id_to_new($option_value, $index_key = false)
    {
        /*Post IDS*/
        $replace_post_ids = apply_filters('advanced_import_replace_post_ids', [
            'page_id',
            'post_id',
            'image_id',
            'selectpage',
            'page_on_front',
            'page_for_posts',
            'first_page_id',
            'second_page_id',
            /*woocommerce pages*/
            'woocommerce_shop_page_id',
            'woocommerce_cart_page_id',
            'woocommerce_checkout_page_id',
            'woocommerce_pay_page_id',
            'woocommerce_thanks_page_id',
            'woocommerce_myaccount_page_id',
            'woocommerce_edit_address_page_id',
            'woocommerce_view_order_page_id',
            'woocommerce_terms_page_id',
            /*gutentor*/
            'wp_block_id',
        ]);

        /*Terms IDS*/
        $replace_term_ids = apply_filters('advanced_import_replace_term_ids', ['cat_id', 'nav_menu', 'online-shop-feature-product-cat', 'online_shop_featured_cats', 'online_shop_wc_product_cat', 'online_shop_wc_product_tag']);

        /*replace terms in keys*/

        if (is_array($option_value)) {
            foreach ($option_value as $key => $replace_old_value) {
                if (is_array($replace_old_value) && !is_null($replace_old_value)) {
                    $option_value[$key] = $this->replace_old_id_to_new($replace_old_value);
                } elseif ($this->isJson($replace_old_value) && is_string($replace_old_value) && !is_null($replace_old_value)) {
                    $value_array = json_decode($replace_old_value, true);
                    if (is_array($value_array)) {
                        $option_value[$key] = wp_json_encode($this->replace_old_id_to_new($value_array));
                    } else {
                        if (in_array($key, $replace_post_ids) && $key !== 0) {
                            $new_id = $this->imported_post_id($replace_old_value);
                            if ($new_id) {
                                $option_value[$key] = $new_id;
                            }
                        } elseif (in_array($key, $replace_term_ids) && $key !== 0) {
                            $new_id = $this->imported_term_id($replace_old_value);
                            if ($new_id) {
                                $option_value[$key] = $new_id;
                            }
                        } else {
                            $option_value[$key] = $replace_old_value;
                        }
                    }
                } else {
                    if (in_array($key, $replace_post_ids) && $key !== 0) {
                        $new_id = $this->imported_post_id($replace_old_value);
                        if (!$new_id) {
                            /**/
                        } else {
                            $option_value[$key] = $new_id;
                        }
                    } elseif (in_array($key, $replace_term_ids) && $key !== 0) {
                        $new_id = $this->imported_term_id($replace_old_value);
                        if ($new_id) {
                            $option_value[$key] = $new_id;
                        }
                    } else {
                        $option_value[$key] = $replace_old_value;
                    }
                }
            }
        } elseif (is_numeric($option_value) && $index_key) {
            if (in_array($index_key, $replace_post_ids) && $index_key !== 0) {
                $new_id = $this->imported_post_id($option_value);
                if (!$new_id) {
                    /**/
                } else {
                    $option_value = $new_id;
                }
            } elseif (in_array($index_key, $replace_term_ids) && $index_key !== 0) {
                $new_id = $this->imported_term_id($option_value);
                if ($new_id) {
                    $option_value = $new_id;
                }
            }
        }

        return $option_value;
    }

    /*
     * Callback function to importing widgets data
     * all widgets data is imported from here
     * return mix
     * */
    private function import_content_widgets_data()
    {
        $this->current_request = $this->current_request + 1;

        $import_widget_data = $this->get_widgets_json();
        $import_widget_positions = $import_widget_data['widget_positions'];
        $import_widget_options = $import_widget_data['widget_options'];

        /* get sidebars_widgets */
        $widget_positions = get_option('sidebars_widgets');
        if (!is_array($widget_positions)) {
            $widget_positions = [];
        }

        foreach ($import_widget_options as $widget_name => $widget_options) {
            /*replace $widget_options elements with updated imported entries.*/
            foreach ($widget_options as $widget_option_id => $widget_option) {
                $widget_options[$widget_option_id] = $this->replace_old_id_to_new($widget_option, $widget_option_id);
            }
            $existing_options = get_option('widget_' . $widget_name, []);
            if (!is_array($existing_options)) {
                $existing_options = [];
            }
            $new_options = $widget_options + $existing_options;

            $new_options = apply_filters('advanced_import_new_options', $new_options);

            advanced_import_update_option('widget_' . $widget_name, $new_options);
        }

        $sidebars_widgets = array_merge($widget_positions, $import_widget_positions);
        $sidebars_widgets = apply_filters('advanced_import_sidebars_widgets', $sidebars_widgets, $this);
        advanced_import_update_option('sidebars_widgets', $sidebars_widgets);

        return true;
    }

    /*check if string is json*/
    function isJson($string)
    {
        $test_json = @json_decode($string, true);
        if (is_array($test_json)) {
            return true;
        }
        return false;
    }

    /*
	 callback function to importing menus and options data
	 * all menus and import data is imported from here
	 * return mix
	 * */
    public function import_menu_and_options()
    {
        $this->current_request = $this->current_request + 1;

        /*final wrap up of delayed posts.*/
        $this->process_delayed_posts(true);

        /*Elementor posts*/
        advanced_import_elementor()->process_elementor_posts();

        /*it includes options and menu data*/
        $theme_options = $this->get_theme_options_json();

        /*options data*/
        $custom_options = $theme_options['options'];

        /*menu data*/
        $menu_ids = $theme_options['menu'];

        /*we also want to update the widget area manager options.*/
        if (is_array($custom_options)) {
            foreach ($custom_options as $option => $value) {
                /*replace old entries with updated imported entries.*/
                $value = $this->replace_old_id_to_new($value, $option);

                /*we have to update widget page numbers with imported page numbers.*/
                if (preg_match('#(wam__position_)(\d+)_#', $option, $matches) || preg_match('#(wam__area_)(\d+)_#', $option, $matches)) {
                    $new_page_id = $this->imported_post_id($matches[2]);
                    if ($new_page_id) {
                        // we have a new page id for this one. import the new setting value.
                        $option = str_replace($matches[1] . $matches[2] . '_', $matches[1] . $new_page_id . '_', $option);
                    }
                } elseif ($value && !empty($value['custom_logo'])) {
                    $new_logo_id = $this->imported_post_id($value['custom_logo']);
                    if ($new_logo_id) {
                        $value['custom_logo'] = $new_logo_id;
                    }
                } /** For Gutentor */ elseif (strpos($option, 'gutentor-cat') !== false) {
                    $cat_id = substr($option, strrpos($option, '-') + 1);
                    if ('child' !== $cat_id) {
                        $new_cat_id = $this->imported_term_id($cat_id);
                        $option = str_replace($cat_id, $new_cat_id, $option);
                    }
                }
                advanced_import_update_option($option, $value);
            }
        }

        /*
		Options completed
		Menu Start*/
        $save = [];
        foreach ($menu_ids as $menu_id => $term_id) {
            $new_term_id = $this->imported_term_id($term_id);
            if ($new_term_id) {
                $save[$menu_id] = $new_term_id;
            }
        }

        if ($save) {
            set_theme_mod('nav_menu_locations', array_map('absint', $save));
        }

        global $wp_rewrite;
        $wp_rewrite->set_permalink_structure('/%year%/%monthnum%/%day%/%postname%/');
        advanced_import_update_option('rewrite_rules', false);
        $wp_rewrite->flush_rules(true);

        return true;
    }

    public function log($message)
    {
        $this->logs[] = $message;
    }

    public function error($message)
    {
        $this->logs[] = esc_html__('ERROR!!!! ', 'advanced-import') . $message;
    }

    public function reset_transient()
    {
        delete_transient('content.json');
        delete_transient('widgets.json');
        delete_transient('options.json');
        delete_transient('delayed_posts');
        delete_transient('imported_term_ids');
        delete_transient('imported_post_ids');
        delete_transient('post_orphans');
        delete_transient('adi_elementor_data_posts');
    }

    /*
	 callback function for wp_ajax_install_plugin
	* Install plugin
	* 
	*/

    public function install_plugin($plugin)
    {
        include_once ABSPATH . 'wp-admin/includes/plugin.php';
        require_once ABSPATH . 'wp-admin/includes/file.php';
        include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
        include_once ABSPATH . 'wp-admin/includes/plugin-install.php';

        $pluginFile = esc_attr(isset($plugin['mainFile']) ? $plugin['mainFile'] : $plugin['slug'] . '.php');
        $pluginSlug = $plugin['slug'];
        $pluginName = "$pluginName/$pluginFile";
        $slug = sanitize_key(wp_unslash($pluginSlug));
        $pluginMainFilePath = $slug . '/' . $pluginFile;

        /*check for security*/
        if (!current_user_can('install_plugins')) {
            $status['errorMessage'] = __('Sorry, you are not allowed to install plugins on this site.', 'advanced-import');
            wp_send_json_error($status);
        }

        if (empty($pluginName) || empty($pluginSlug)) {
            wp_send_json_error([
                'slug' => '',
                'errorCode' => 'no_plugin_specified',
                'errorMessage' => __('No plugin specified.', 'advanced-import'),
            ]);
        }

        $pluginBaseName = plugin_basename(sanitize_text_field(wp_unslash($pluginName)));

        if (is_plugin_active_for_network($pluginMainFilePath) || is_plugin_active($pluginMainFilePath)) {
            // Plugin is activated
            return wp_send_json_success();
        }
        $status = [
            'install' => 'plugin',
            'slug' => sanitize_key(wp_unslash($pluginSlug)),
        ];

        // Looks like a plugin is installed, but not active.
        if (file_exists(WP_PLUGIN_DIR . '/' . $slug)) {
            $plugin_data = $pluginName;
            $status['plugin'] = $pluginBaseName;
            $status['pluginName'] = $plugin_data['Name'];

            if (current_user_can('activate_plugin', $pluginMainFilePath) && is_plugin_inactive($pluginMainFilePath)) {
                $result = activate_plugin($pluginMainFilePath);

                if (is_wp_error($result)) {
                    $status['errorCode'] = $result->get_error_code();
                    $status['errorMessage'] = $result->get_error_message();
                    wp_send_json_error($status);
                }

                $status['errorCode'] = 'plugin-activated';
                wp_send_json_success($status);
            }
        }

        $download_link = '';
        if ($plugin['zip']) {
            $download_link = $plugin['zip'];
        } else {
            $api = plugins_api('plugin_information', [
                'slug' => sanitize_key(wp_unslash($pluginSlug)),
                'fields' => [
                    'sections' => false,
                ],
            ]);

            if (is_wp_error($api)) {
                $status['errorMessage'] = $api->get_error_message();
                wp_send_json_error($status);
            }

            $status['pluginName'] = $api->name;
            $download_link = $api->download_link;
        }

        $skin = new WP_Ajax_Upgrader_Skin();
        $upgrader = new Plugin_Upgrader($skin);

        $result = $upgrader->install($download_link);

        if (defined('WP_DEBUG') && WP_DEBUG) {
            $status['debug'] = $skin->get_upgrade_messages();
        }

        if (is_wp_error($result)) {
            $status['errorCode'] = $result->get_error_code();
            $status['errorMessage'] = $result->get_error_message();
            wp_send_json_error($status);
        } elseif (is_wp_error($skin->result)) {
            $status['errorCode'] = $skin->result->get_error_code();
            $status['errorMessage'] = $skin->result->get_error_message();
            wp_send_json_error($status);
        } elseif ($skin->get_errors()->get_error_code()) {
            $status['errorMessage'] = $skin->get_error_messages();
            wp_send_json_error($status);
        } elseif (is_null($result)) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
            WP_Filesystem();
            global $wp_filesystem;

            $status['errorCode'] = 'unable_to_connect_to_filesystem';
            $status['errorMessage'] = __('Unable to connect to the filesystem. Please confirm your credentials.', 'advanced-import');

            // Pass through the error from WP_Filesystem if one was raised.
            if ($wp_filesystem instanceof WP_Filesystem_Base && is_wp_error($wp_filesystem->errors) && $wp_filesystem->errors->get_error_code()) {
                $status['errorMessage'] = esc_html($wp_filesystem->errors->get_error_message());
            }

            wp_send_json_error($status);
        }

        if ($api) {
            $install_status = install_plugin_install_status($api);
        } else {
            $install_status = install_plugin_install_status($plugin);
        }

        if (current_user_can('activate_plugin', $install_status['file']) && is_plugin_inactive($install_status['file'])) {
            $result = activate_plugin($install_status['file']);

            if (is_wp_error($result)) {
                $status['errorCode'] = $result->get_error_code();
                $status['errorMessage'] = $result->get_error_message();
                wp_send_json_error($status);
            }
        }

        wp_send_json_success($status);
    }
}

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function Xapp_Import_Admin()
{
    return Xapp_Import_Admin::instance();
}
