/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import { attributes, name } from './block.json';
import deprecated from './deprecated';
import edit from './edit';
import icon from './icon';
import save from './save';
import styles from './styles';
import transforms from './transforms';
import './editor.scss';
import './style.scss';

console.log( wp );

//const registerBlocktype( name, settings );
const settings = {
	title: __( 'Testimonial', 'turbocharged-testimonial-block' ),
	description: __( 'A turbocharged testimonial block with 10 superb styles for sharing positive things people have to say about your products and services.', 'turbocharged-testimonial-block' ),
	keywords: [ 'testimonial', 'testimonials', 'blockhandbook', 'block handbook', 'turbocharged testimonial block' ],
	icon,
	category: 'turbocharged-testimonial-block',
	supports: {
		align: false,
	},
	attributes,
	deprecated,
	transforms,
	styles,
	edit,
	save,
};

export { name, settings };
