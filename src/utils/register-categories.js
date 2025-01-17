/**
 * External Dependencies
 */
/**
 * WordPress Dependencies
 */
import { setCategories, getCategories } from '@wordpress/blocks';

/**
 * Internal Dependencies
 */
import icon from './icons';

// We can update our category registered in php
// so we can add an icon.
// updateCategory( 'block-examples',
// 	{
// 		icon: <FontAwesomeIcon style={ { width: '20px', height: '20px' } } icon={ [ 'fas', 'bolt' ] } size="3x" />,
// 	} );
// However, I prefer to set block categories with javascript
// so our category gets added to the top of the list instead of the bottom ;)

const categories = [
	{
		slug: 'turbocharged-testimonial-block',
		title: 'Turbocharged Testimonial Block',
		icon: icon.plugin,
	},
	...getCategories().filter( ( { categorySlug } ) => categorySlug !== 'turbocharged-testimonial-block' ),
];
setCategories( categories );
