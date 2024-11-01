/**
 * External Dependencies
 */
import classnames from 'classnames';
import isHexcolor from 'is-hexcolor';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { InnerBlocks, MediaPlaceholder } from '@wordpress/block-editor';
// this is if we want to load style icons or images instead of rendering the block
// in the styles preview panel
// import { select } from '@wordpress/data';
import { Fragment, useCallback } from '@wordpress/element';
import { withSelect } from '@wordpress/data';

/**
 * Internal Dependencies
 */
import Controls from './controls';
import './editor.scss';
import './style.scss';
import { hexToRgb } from '../../utils/helpers';
import quotationMarks from './quotation-marks';

/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const ALLOWED_BLOCKS = [ 'core/paragraph', 'core/heading' ];
const TEMPLATE = [
	[
		'core/paragraph',
		{
			/* translators: content placeholder */
			placeholder: __( 'Testimonial', 'turbocharged-testimonial-block' ),
			/* translators: content placeholder */
			content: __( 'I am obsessed with learning how to build blocks!', 'turbocharged-testimonial-block' ),
			fontSize: 'large',
			className: 'mt-8',
		},
	],
	[
		'core/paragraph',
		{
			/* translators: content placeholder */
			placeholder: __( 'Author\'s name', 'turbocharged-testimonial-block' ),
			/* translators: content placeholder */
			content: __( 'Lee Shadle', 'turbocharged-testimonial-block' ),
			fontSize: 'regular',
			className: 'mb-0',
		},
	],
	[
		'core/paragraph',
		{
			/* translators: content placeholder */
			placeholder: __( 'Author\'s position', 'turbocharged-testimonial-block' ),
			/* translators: content placeholder */
			content: __( 'Teacher @ blockhandbook.com', 'turbocharged-testimonial-block' ),
			fontSize: 'small',
			customTextColor: '#bbb',
			className: 'mb-0',
		},
	],
];

function Testimonial( props ) {
	const {
		attributes,
		className,
		clientId,
		setAttributes,
		attributes: {
			borderColor,
			borderRadius,
			borderStyle,
			borderWidth,
			boxShadow,
			customBorderRadius,
			customBorderWidth,
			customBoxShadow,
			imgBackgroundColor,
			imgBackgroundSize,
			imgCustomSizing,
			imgFocalPoint,
			imgId,
			imgUrl,
			quotationMarkColor,
			quotationMarkIcon,
			quotationMarkOpacity,
			textBackgroundColor,
			textBackgroundOpacity,
			useCustomBoxShadow,
			useCustomBorderRadius,
			useCustomBorderWidth
		},
	} = props;

	let {
		attributes: {
			className: styleClassName,
			boxShadowColor,
		},
	} = props;

	// set boxShadowColor variable on container style so the predefined
	// boxShadow inherits any boxShadowColor styling.
	const convertToRGB = ( color ) => {
		let rgb = hexToRgb( color );
		rgb = `${ rgb.r }, ${ rgb.g }, ${ rgb.b }`;
		return rgb;
	};
	if ( isHexcolor( boxShadowColor ) ) {
		boxShadowColor = convertToRGB( boxShadowColor );
	}

	// this is to speed up style renders, instead of rendering the block
	// we'll kick back an image of the block to speed up selecting/loading styles
	// const blockIndex = select( 'core/block-editor' ).getBlockIndex( clientId );

	// if( blockIndex === -1 ) {
	// 	return <img src={ `/wp-content/plugins/turbocharged-testimonial-block/build/img/${ styleClassName }.png` } />;
	// }
	styleClassName = !! styleClassName ? styleClassName : 'is-style-third';
	const style = styleClassName.replace( 'is-style-', '' );

	const containerClasses = classnames( className );

	const rowClasses = classnames(
		'flex',
		{
			[ `${ borderStyle } overflow-hidden` ]: ! style.includes( 'circle' ),
			[ `${ boxShadow }` ]: ! style.includes( 'circle' ) && ! useCustomBoxShadow,
			[ `${ borderRadius }` ]: ! style.includes( 'circle' ) && ! useCustomBorderRadius,
			[ `${ borderWidth }` ]: ! style.includes( 'circle' ) && ! useCustomBorderWidth,
			'flex-row-reverse': style === 'third-flipped' || style === 'half-flipped',
			'flex-col': style === 'stacked',
			'flex-col-reverse': style === 'stacked-flipped',
			relative: style === 'full' || style.includes( 'circle' ),
		}
	);

	const imgColumnClasses = classnames(
		'bg-no-repeat',
		{
			'w-1/3': style === 'third' || style === 'third-flipped',
			'w-1/2': style === 'half' || style === 'half-flipped',
			'w-full absolute inset-0': style === 'full',
			'w-1/4 absolute mx-auto rounded-full z-10': style === 'circle',
			'w-full pt-64 relative': style === 'stacked' || style === 'stacked-flipped',
			'w-1/4 absolute rounded-full z-10 left-0': style === 'circle-left',
			'w-1/4 absolute rounded-full z-10 right-0 left-auto': style === 'circle-right',
			'bg-transparent': textBackgroundOpacity === 100 && style === 'full',
		}
	);

	const contentColumnClasses = classnames(
		'p-10 relative',
		{
			'w-2/3': style === 'third' || style === 'third-flipped',
			'w-1/2': style === 'half' || style === 'half-flipped',
			'w-full z-10 bg-transparent relative': style === 'full',
			[ `w-full pt-16 ${ boxShadow } ${ borderStyle }` ]: style === 'circle',
			[ `w-full pl-32 ${ boxShadow } ${ borderStyle }` ]: style === 'circle-left',
			[ `w-full pr-32 ${ boxShadow } ${ borderStyle }` ]: style === 'circle-right',
			[ `${ borderRadius }` ]: style === 'circle' && ! useCustomBorderRadius || style === 'circle-left' && ! useCustomBorderRadius || style === 'circle-right' && ! useCustomBorderRadius,
			[ `${ borderWidth }` ]: style === 'circle' && ! useCustomBorderWidth || style === 'circle-left' && ! useCustomBorderWidth || style === 'circle-right' && ! useCustomBorderWidth,
		}
	);

	const quotationMarkClasses = classnames(
		`flex absolute quotation-mark ${ quotationMarkOpacity }`,
		{
			'w-full justify-center right-0 -mt-16': style !== 'circle',
			'right-0 bottom-0 pr-2': style === 'circle',
			'w-full justify-center right-0 -mt-20': style === 'stacked',
			'w-full justify-center right-0 -mt-10': style === 'stacked-flipped',
		}
	);

	const rowStyle = {
		borderColor,
		borderRadius: useCustomBorderRadius ? customBorderRadius : null,
		borderWidth: useCustomBorderWidth ? customBorderWidth : null,
		boxShadow: useCustomBoxShadow && ! style.includes( 'circle' ) ? `${ customBoxShadow.x }px ${ customBoxShadow.y }px ${ customBoxShadow.blur }px ${ customBoxShadow.spread }px rgba( ${ boxShadowColor }, ${ customBoxShadow.opacity / 100 } )` : null
	}

	const imgColumnStyle = {
		backgroundImage: `url( ${ imgUrl } )`,
		backgroundSize: imgCustomSizing ? `${ imgBackgroundSize }px` : 'cover',
		backgroundPosition: imgCustomSizing ? `${ imgFocalPoint.x * 100 }% ${ imgFocalPoint.y * 100 }%` : 'center center',
		backgroundColor: imgBackgroundColor,
	};

	const contentColumnStyle = {
		backgroundColor: style === 'full' ? 'transparent' : textBackgroundColor, borderColor: style.includes( 'circle' ) ? borderColor : null,
		borderRadius: useCustomBorderRadius && style.includes( 'circle' ) ? customBorderRadius : null,
		borderWidth: useCustomBorderWidth && style.includes( 'circle' ) ? customBorderWidth : null,
		boxShadow: useCustomBoxShadow && style.includes( 'circle' ) ? `${ customBoxShadow.x }px ${ customBoxShadow.y }px ${ customBoxShadow.blur }px ${ customBoxShadow.spread }px rgba( ${ boxShadowColor }, ${ customBoxShadow.opacity / 100 } )` : null
	};

	const QuotationMark = quotationMarks[ quotationMarkIcon ];

	// Will not change unless media changes
	const onSelectImage = useCallback(
		( media ) => {
			setAttributes( {
				imgUrl: media.url, imgId: media.id,
			} );
		},
		[ setAttributes ]
	);

	return (
		<Fragment>
			<Controls
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
				onSelectImage={ onSelectImage }
				style={ style }
			/>
			<div className={ containerClasses } style={ { '--ttb-box-shadow-color': boxShadowColor } }>
				<div className={ rowClasses } style={ rowStyle }>
					<div className={ imgColumnClasses } style={ imgColumnStyle }>
						{
							! imgUrl &&
							<MediaPlaceholder
								icon="format-image"
								labels={ {
									title: __( 'Image', 'turbocharged-testimonial-block' ),
									instructions: __( 'Upload an image file or pick one from your media library.', 'turbocharged-testimonial-block' ),
								} }
								accept="image/*"
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								onSelect={ onSelectImage }
								value={ { imgId, imgUrl } }
							/>
						}
					</div>
					<div className={ contentColumnClasses } style={ contentColumnStyle }>
						{
							style === 'full' &&
							<div className={ `absolute w-full inset-0 -z-10 ${ textBackgroundOpacity }` } style={ { backgroundColor: textBackgroundColor, borderColor } }></div>
						}
						<div className={ quotationMarkClasses }>
							{ <QuotationMark color={ quotationMarkColor } /> }
						</div>
						<InnerBlocks
							allowedBlocks={ ALLOWED_BLOCKS }
							template={ TEMPLATE }
							templateLock={ true }
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default compose(
	[
		withSelect( ( select, props ) => {
			const { getEditorSettings } = select( 'core/editor' );
			const editorSettings = getEditorSettings();
			const { attributes } = props;

			// if editor colors are set, and the quotationMarkColor attribute is not set
			// then set the editor color as the quotationMarkColor and imgBackgroundColor
			if ( !! editorSettings.colors && ! attributes.quotationMarkColor ) {
				const colors = editorSettings.colors;
				let primaryColor = colors.map( ( color ) => {
					if( color.slug === 'primary' ){
						return color;
					}
					return false;
				} ).filter( ( color ) => color );
				if( primaryColor.length === 0 ) {
					primaryColor = [
						{
							name: 'primary',
							slug: 'primary',
							color: '#000000'
						}
					];
				}
				attributes.quotationMarkColor = primaryColor[ 0 ].color;
				attributes.imgBackgroundColor = primaryColor[ 0 ].color;
				return attributes;
			}
			// if the quotationMarkColor attribute is set, return and do nothing
			if ( !! attributes.quotationMarkColor ) {
				return;
			}
			// if neither an editor color or quotationMarkColor is set, return a default color
			return attributes.quotationMarkColor = '#000000';
		} ),
	]
)( Testimonial );
