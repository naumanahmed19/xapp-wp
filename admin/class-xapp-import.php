<?php // phpcs:ignore WordPress.Files.FileName
/**
 * Advanced Import Admin class
 *
 * Collection of admin hooks
 *
 * @package Advanced_Import
 * @since 1.0.0
 */

 if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly      
 

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
class xapp_Import_Admin
{
    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct()
    {
    }

    /**
     * Main xapp_Import_Admin Instance
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
            $instance = new xapp_Import_Admin();
        }

        // Always return the instance.
        return $instance;
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
function xapp_Import_Admin()
{
    return xapp_Import_Admin::instance();
}
