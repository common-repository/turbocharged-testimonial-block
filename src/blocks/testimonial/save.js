/**
 * External Dependencies
 */
import classnames from 'classnames';
import isHexcolor from 'is-hexcolor';

/**
 * WordPress Dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import './editor.scss';
import './style.scss';
import { hexToRgb } from '../../utils/helpers';
import quotationMarks from './quotation-marks';

function save( props ) {
	const {
		className,
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

	const convertToRGB = ( color ) => {
		let rgb = hexToRgb( color );
		rgb = `${ rgb.r }, ${ rgb.g }, ${ rgb.b }`;
		return rgb;
	};
	if ( isHexcolor( boxShadowColor ) ) {
		boxShadowColor = convertToRGB( boxShadowColor );
	}

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

	// IMPORTANT - Good Test to use.  If you use Fragment as wrapper then
	// the wrapper classes don't get added to the block when saving!!!!
	// great Error test...

	return (
		<div className={ containerClasses } style={ { '--ttb-box-shadow-color': boxShadowColor } }>
			<div className={ rowClasses } style={ rowStyle }>
				<div className={ imgColumnClasses } style={ imgColumnStyle }>
				</div>
				<div className={ contentColumnClasses } style={ contentColumnStyle }>
					{
						style === 'full' &&
						<div className={ `absolute w-full inset-0 -z-10 ${ textBackgroundOpacity }` } style={ { backgroundColor: textBackgroundColor, borderColor } }></div>
					}
					<div className={ quotationMarkClasses }>
						{ <QuotationMark color={ quotationMarkColor } /> }
					</div>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}

export default save;
