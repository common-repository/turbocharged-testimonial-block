<?php
/**
 * Plugin Name: Turbocharged Testimonial Block
 * Plugin URI: https://blockhandbook.com/plugins/turbocharged-testimonial-block
 * Description: A turbocharged <strong>testimonial block</strong> with 10 superb styles for sharing positive things people have to say about your products and services.
 * Author: Block Handbook
 * Author URI: https://blockhandbook.com
 * Text Domain: turbocharged-testimonial-block
 * Domain Path: /languages
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Tested up to: 5.5
 * Version: 1.0.12
 * Requires at least: 5.0
 * Requires PHP: 5.6
 *
 * @package TurbochargedTestimonialBlock
 */

namespace TurbochargedTestimonialBlock;

require __DIR__ . '/vendor/autoload.php';

if ( ! class_exists( 'Plugin' ) ) :
	/**
	 * Plugin Class.
	 *
	 * @since 1.0.0
	 */
	class Plugin {

		/**
		 * Class instance.
		 *
		 * @var Plugin
		 */
		private static $instance = null;

		/**
		 * Plugin Path.
		 *
		 * @var string
		 */
		public $plugin_dir_path;

		/**
		 * Plugin URL.
		 *
		 * @var string
		 */
		public $plugin_dir_url;

		/**
		 * Plugin Slug.
		 *
		 * @var string
		 */
		public $slug;

		/**
		 * Plugin text-domain.
		 *
		 * @var string
		 */
		public $text_domain;

		/**
		 * Plugin version.
		 *
		 * @var string
		 */
		public $version;

		/**
		 * Plugin constructor.
		 * Called immediately when you instantiate a class.
		 * Really good article on setting up constructors for WP classes.
		 * https://carlalexander.ca/designing-class-wordpress-hooks/
		 */
		private function __construct() {
			// filesystem directory i.e. /var/home/www/blockhandbook/wp-content/plugins/.
			$this->plugin_dir_path = plugin_dir_path( __FILE__ );
			// web address w/ trailing slash.
			// i.e. - http://blockhandbook.com/wp-content/plugins/.
			$this->plugin_dir_url = plugin_dir_url( __FILE__ );
			$this->slug           = 'turbocharged-testimonial-block';
			$this->text_domain    = 'turbocharged-testimonial-block';
			$this->version        = '1.0.12';
		}

		/**
		 * Return Plugin Instance.
		 *
		 * @return object\Plugin
		 */
		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Load the plugin.
		 *
		 * @return void
		 */
		public static function load() {
			LoadTranslations::register();
			RegisterBlocks::register();
		}
	}
endif;

Plugin::load();
