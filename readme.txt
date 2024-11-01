=== Turbocharged Testimonial Block ===
Author URI: https://blockhandbook.com
Plugin URI: https://blockhandbook.com/plugins/turbocharged-testimonial-block
Contributors: blockhandbook, leeshadle
Tags: testimonials, testimonial, blockhandbook, block, blocks, gutenberg blocks, gutenberg, WordPress blocks
Requires at least: 5.0
Tested up to: 5.5
Stable tag: 1.0.12
Requires PHP: 5.6
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A turbocharged testimonial block packed with 10 super styles for sharing positive things people have to say about your products and services.

== Description ==

Turbocharged Testimonial Block for the new WordPress Block Editor ( Gutenberg ).

This single gutenberg block is packed with 10 terrific testmonial styles for sharing positive things people have to say about your products and services.

##Features##
- Custom Background Image
- Custom Background Color
- Custom Font Sizing
- Custom Font Colors
- Custom Border Colors ( or no borders at all )
- Custom Quotation Mark Colors
- 14 Beautiful Quotation Mark styles
- 5 Designer Default Settings for Drop Shadows
- Add your own Custom Drop Shadow
- 5 Designer Default Settings for Borders
- Add your own Custom Border Radius & Border Width

<strong>Learn more</strong>:

* [Visit the BlockHandbook website](https://blockhandbook.com)
* [Follow on Twitter](https://twitter.com/blockhandbook)

== Screenshots ==

1. 10 super styles on a Page
2. 10 super styles in the Dashboard
3. Custom Background Image & Color Settings
4. Custom Quotation Mark Settings
5. Custom Border Settings
6. Custom Drop Shadow Settings

== Theme Authors ==
Easily override default Turbocharged Testimonial Block styles with your own styles using super-simple css variables.  Add custom style systems for box-shadow, border-width, and border-radius settings.

To override frontend styling, add custom settings to your style.css file like so:

    [class*="turbocharged-testimonial-block"] {
    /* Turbocharged Testimonial Block (ttb) Style Variables */

    /* Border Radius */
	--ttb-border-radius-sm:2px;
	--ttb-border-radius-md:4px;
	--ttb-border-radius-lg:8px;
	--ttb-border-radius-xl:24px;
	--ttb-border-radius-2xl:9999px;

	/* Border Width */
	--ttb-border-width-none:0px;
	--ttb-border-width-sm:1px;
	--ttb-border-width-md:2px;
	--ttb-border-width-lg:4px;
	--ttb-border-width-xl:8px;
	--ttb-border-width-2xl:16px;

	/* Box Shadow */
	--ttb-box-shadow-sm: 0 1px 3px 0 rgba( var( --ttb-box-shadow-color ), 0.1), 0 1px 2px 0 rgba( var( --ttb-box-shadow-color ), 0.06);
	--ttb-box-shadow-md:0 4px 6px -1px rgba( var( --ttb-box-shadow-color ), 0.1), 0 2px 4px -1px rgba( var( --ttb-box-shadow-color ), 0.06);
	--ttb-box-shadow-lg:0 10px 15px -3px rgba( var( --ttb-box-shadow-color ), 0.1), 0 4px 6px -2px rgba( var( --ttb-box-shadow-color ), 0.05);
	--ttb-box-shadow-xl:0 20px 25px -5px rgba( var( --ttb-box-shadow-color ), 0.1), 0 10px 10px -5px rgba( var( --ttb-box-shadow-color ), 0.04);
	--ttb-box-shadow-2xl:0 25px 50px -12px rgba( var( --ttb-box-shadow-color ), 0.25);
    }

To override editor styling, add custom settings to your editor-style.css file like so:


    .editor-styles-wrapper [class*="turbocharged-testimonial-block"] {
	/* Turbocharged Testimonial Block (ttb) Style Variables */

	/* Border Radius */
	--ttb-border-radius-sm:2px;
	--ttb-border-radius-md:4px;
	--ttb-border-radius-lg:8px;
	--ttb-border-radius-xl:24px;
	--ttb-border-radius-2xl:9999px;

	/* Border Width */
	--ttb-border-width-none:0px;
	--ttb-border-width-sm:1px;
	--ttb-border-width-md:2px;
	--ttb-border-width-lg:4px;
	--ttb-border-width-xl:8px;
	--ttb-border-width-2xl:16px;

	/* Box Shadow */
	--ttb-box-shadow-sm: 0 1px 3px 0 rgba( var( --ttb-box-shadow-color ), 0.1), 0 1px 2px 0 rgba( var( --ttb-box-shadow-color ), 0.06);
	--ttb-box-shadow-md:0 4px 6px -1px rgba( var( --ttb-box-shadow-color ), 0.1), 0 2px 4px -1px rgba( var( --ttb-box-shadow-color ), 0.06);
	--ttb-box-shadow-lg:0 10px 15px -3px rgba( var( --ttb-box-shadow-color ), 0.1), 0 4px 6px -2px rgba( var( --ttb-box-shadow-color ), 0.05);
	--ttb-box-shadow-xl:0 20px 25px -5px rgba( var( --ttb-box-shadow-color ), 0.1), 0 10px 10px -5px rgba( var( --ttb-box-shadow-color ), 0.04);
	--ttb-box-shadow-2xl:0 25px 50px -12px rgba( var( --ttb-box-shadow-color ), 0.25);
    }


== Installation ==

1. Upload the `turbocharged-testimonials-block` plugin files to the `/wp-content/plugins/` directory, or upload the turbocharged-testimonials-block.zip file through the WordPress plugins screen directly by clicking 'Add New' and selecting the zip file from your computer.
2. Install and active the Gutenberg WordPress plugin.
3. Activate the Turbocharged Testimonials Block plugin through the 'Plugins' screen in WordPress.
4. Use the Turbocharged Testimonials Block on your pages and posts.


== Frequently Asked Questions ==

= How do I start using the Turobcharged Testimonials Block? =
Make sure you're using the Gutenberg block editor, the Turbocharged Testimonials Block will not work with the classic editor.  If you want to be on the bleeding edge of technology you'll want to install the latest version of the [Gutenberg editor plugin](https://wordpress.org/plugins/gutenberg/).

== Changelog ==

= 1.0.12 =
* Updating composer autoloader...

= 1.0.11 =
* Fixing bug if theme has editor colors uses a custom slug for a primary color

= 1.0.10 =
* Fixing bug if theme has editor colors uses a custom slug for a primary color

= 1.0.9 =
* Fixing bug if theme doesn't have editor colors set

= 1.0.8 =
* WordPress 5.4 Compatability updates

= 1.0.6 =
* WordPress 5.4 Compatability updates

= 1.0.5 =
* Updating readme.txt
* Updating screenshot-5.png
* Updating screenshot-6.png

= 1.0.4 =
* Adding Custom Box Shadow Sizing
* Adding Custom Border Radius Sizing
* Adding Custom Border Width Sizing

= 1.0.3 =
* Testing Github Actions Deployment

= 1.0.2 =
* Testing Github Actions Deployment

= 1.0.1 =
* Testing Github Actions Deployment

= 1.0.0 =
* Initial Release
