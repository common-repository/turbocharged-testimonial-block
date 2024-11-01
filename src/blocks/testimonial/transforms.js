/**
 * WordPress Dependencies
 */
import { createBlock } from '@wordpress/blocks';
import { create, split, toHTMLString } from '@wordpress/rich-text';

/**
 * Internal Dependencies
 */

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/quote', 'core/pullquote' ],
			transform: ( attributes ) => {
				const { value, citation } = attributes;
				const pieces = split( create( { html: value, multilineTag: 'p' } ), '\u2028' );

				return createBlock( `turbocharged-testimonial-block/testimonial`, {
					testimonial: toHTMLString( { value: pieces[ 0 ] } ),
					author: citation,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/cover' ],
			transform: ( attributes, innerBlocks ) => {
				const { url } = attributes;
				const title = innerBlocks[ 0 ].attributes.content;

				return createBlock( 'turbocharged-testimonial-block/testimonial', {
					testimonial: title,
					imgUrl: url,
				} );
			},
		},
	],
	// in order to transform to the quote block we need to pass the testimonial
	// value wrapped in a p tag.  however, we also need to make sure to clean
	// that value in the from above otherwise it will keep adding p tags and break
	// the block on save.
	to: [
		{
			type: 'block',
			blocks: [ 'core/quote' ],
			transform: ( attributes, innerBlocks ) => {
				const testimonial = innerBlocks[ 0 ].attributes.content;
				const author = innerBlocks[ 1 ].attributes.content;

				return createBlock( 'core/quote', {
					value: `<p>${ testimonial }</p>`,
					citation: author,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/pullquote' ],
			transform: ( attributes, innerBlocks ) => {
				const testimonial = innerBlocks[ 0 ].attributes.content;
				const author = innerBlocks[ 1 ].attributes.content;

				return createBlock( 'core/pullquote', {
					value: `<p>${ testimonial }</p>`,
					citation: author,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/cover' ],
			transform: ( attributes ) => {
				const { imgId, imgUrl } = attributes;

				return createBlock( 'core/cover', {
					url: imgUrl,
					id: imgId,
				} );
			},
		},
	],
};

export default transforms;
