<?php
/**
 * Register block scripts and styles.
 *
 * @package TurbochargedTestimonialBlock
 */

namespace TurbochargedTestimonialBlock;

// Stop the hackers if accessed directly.
if ( !defined('ABSPATH') ) {
	exit;
}

/**
 * Register blocks.
 *
 * @since 1.0.0
 */
class RegisterBlocks {

	/**
	 * Register class with appropriate WordPress hooks
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'register_blocks' ) );
	}

	/**
	 * Registers all block assets so they can be enqueued through Gutenberg.
	 *
	 * @return void
	 */
	public function register_blocks()
	{

		if ( ! function_exists( 'register_block_type' ) ) {
			// Gutenberg is not active.
			return;
		}

		// Shortcuts for variables.
		$instance = Plugin::get_instance();
		$slug = $instance->slug;
		$text_domain = $instance->text_domain;
		$plugin_dir_path = $instance->plugin_dir_path;
		$plugin_dir_url = $instance->plugin_dir_url;
		$version = $instance->version;

		// Register block specific frontend & backend styles.
		wp_register_style(
			$slug . '-style',
			$plugin_dir_url . 'build/style-index.css',
			array(),
			$version
		);

		// Register editor-only block styles.
		wp_register_style(
			$slug . '-editor-style',
			$plugin_dir_url . 'build/index.css',
			array('wp-edit-blocks'),
			$version
		);

		// Enqueue tailwind styles.
		wp_enqueue_style(
			$slug . '-tailwind-style',
			$plugin_dir_url . 'build/tailwind.css',
			array(),
			$version
		);

		$script_asset_path = "$plugin_dir_path/build/index.asset.php";
		if (!file_exists($script_asset_path)) {
			throw new Error(
				'You need to run `npm start` or `npm run build` for the "turbocharged-testimonial-block/testimonial" block first.'
			);
		}

		// Register editor-only block scripts.
		// Dynamically load dependencies using index.build.asset.php generated by
		// @wordpress/dependency-extraction-webpack-plugin.
		$script_asset = require "$plugin_dir_path/build/index.asset.php";

		wp_register_script(
			$slug . '-editor-script',
			$plugin_dir_url . 'build/index.js',
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		// Array of all blocks.
		// Add to array to add blocks.
		$blocks = array(
			$slug . '/testimonial',
		);

		// Loop through $blocks array and register blocks.
		// For reference: https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/.
		foreach ( $blocks as $block ) {
			register_block_type(
				$block,
				array(
					'style' => $slug . '-style',
					'editor_script' => $slug . '-editor-script',
					'editor_style' => $slug . '-editor-style',
				)
			);
		}
	}
}