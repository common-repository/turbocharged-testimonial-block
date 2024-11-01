/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl, Button, ButtonGroup, Dropdown, DropdownMenu, FocalPointPicker, MenuGroup, MenuItem, PanelBody, PanelRow, RangeControl, SelectControl, ToggleControl, Toolbar, ToolbarButton, ToolbarGroup, Tooltip } from '@wordpress/components';
import { BlockControls, ColorPalette, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

/**
 * Internal Dependencies
 */
import { toUpperCase } from '../../utils/helpers';
import quotationMarks from './quotation-marks';
import icons  from '../../utils/icons';
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const pkg = require( '../../../package.json' );
const slug = pkg.config.slug;

export default function Controls( props ) {
	const {
		setAttributes,
		onSelectImage,
		className,
		style,
		attributes: {
			borderColor,
			borderRadius,
			customBorderRadius,
			customBorderWidth,
			customBoxShadow,
			borderStyle,
			borderWidth,
			boxShadow,
			boxShadowColor,
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
			useCustomBorderWidth,
			useCustomBorderRadius
		},
	} = props;

	// this is kinda annoying, in order to be able to purge styles for production
	// we need to include the classes fully-written.  these were programatically
	// generated initially but I had to put them here for the purge.
	const opacity = {
		0: 'opacity-0',
		10: 'opacity-10',
		20: 'opacity-20',
		30: 'opacity-30',
		40: 'opacity-40',
		50: 'opacity-50',
		60: 'opacity-60',
		70: 'opacity-70',
		80: 'opacity-80',
		90: 'opacity-90',
		100: 'opacity-100',
	};

	return (
		<Fragment>
			<BlockControls>
				<ToolbarGroup>
					<MediaUpload
						onSelect={ onSelectImage }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						value={ imgId }
						render={ ( { open } ) => (
							<Button
								className="components-toolbar__control"
								label={ __( 'Edit Image', 'turbocharged-testimonial-block' ) }
								icon="format-image"
								onClick={ open }
							/>
						) }
					/>
					<Dropdown						
						renderToggle={ ( { isOpen, onToggle } ) => (
							<Button
								icon={ icons.boxShadow }
								label={ __( 'Box Shadow', 'turbocharged-testimonial-block' ) }
								onClick={ onToggle }
							/>
						) }
						renderContent={ () => {
							return(
								<div className="block-editor-block-settings-menu__popover">
									<div className="components-dropdown-menu__menu turbocharged-testimonial-block">	
								{
									!	useCustomBoxShadow &&
									<MenuGroup>
										{
											[
												{ 
													label: __( 'None', 'turbocharged-testimonial-block' ), icon: icons.boxShadowNone, value: 'shadow-none'
												},
												{ 
													label: __( 'Small', 'turbocharged-testimonial-block' ), icon: icons.boxShadowSmall, value: 'shadow'
												},
												{
													label: __( 'Medium', 'turbocharged-testimonial-block' ), icon: icons.boxShadowMedium, value: 'shadow-md' 
												},
												{ 
													label: __( 'Large', 'turbocharged-testimonial-block' ), icon: icons.boxShadowLarge, value: 'shadow-lg' 
												},
												{ 
													label: __( 'X-Large', 'turbocharged-testimonial-block' ), icon: icons.boxShadowXLarge, value: 'shadow-xl' 
												},
											].map( ( item ) => {
												return(
													<MenuItem
														icon={ item.icon }
														className={ boxShadow === item.value ? 'is-active components-dropdown-menu__menu-item' : 'components-dropdown-menu__menu-item' }
														key={ item.label } 
														onClick={ () => setAttributes( { boxShadow: item.value } ) }
													>
														{ item.label }
													</MenuItem>
												)
											})
										}
									</MenuGroup>
								}
								{
									useCustomBoxShadow &&
									<MenuGroup>
									<div className={ slug }	>
										<div className="px-6 pb-0 pt-3">
										{
											Object.keys( customBoxShadow ).map( ( key ) => {
												return(
													<RangeControl
														key={ key }
														label={ toUpperCase( key ) }
														className="clear-both"
														value={ customBoxShadow[ key ] }
														showTooltip={ false }
														onChange={
															( value ) => {
																const newCustomBoxShadow = { ...customBoxShadow, [ key ]: value };
																setAttributes( { customBoxShadow: newCustomBoxShadow } );
															}
														}
														initialPosition={ customBoxShadow[ key ] }
														min={ 0 }
														max={ 100 }
														step={ 1 }
													/>
												)
											} )
										}
										</div>
									</div>
									</MenuGroup>				
								}		
								<MenuGroup>				
								<div className={ slug }	>
									<ToggleControl
										className="px-3 pt-3"
										label={ __( 'Custom', 'turbocharged-testimonial-block' ) }
										checked={ useCustomBoxShadow }
										onChange={ ( ) => setAttributes( { useCustomBoxShadow: ! useCustomBoxShadow } ) }
									/>
								</div>
								</MenuGroup>	
							</div>
								</div>
							) } 
						}
					/>
					<Dropdown						
						renderToggle={ ( { isOpen, onToggle } ) => (
							<Button
								icon={ icons.borderRadius }
								label={ __( 'Border Radius', 'turbocharged-testimonial-block' ) }
								onClick={ onToggle }
							/>
						) }
						renderContent={ () => {
							return(
								<div className="block-editor-block-settings-menu__popover">
									<div className="components-dropdown-menu__menu turbocharged-testimonial-block">	
								{
									!	useCustomBorderRadius &&
									<MenuGroup>
									{
									[
										{ 
											label: __( 'None', 'turbocharged-testimonial-block' ), icon: icons.borderRadiusNone, value: 'rounded-none' 
										},
										{ 
											label: __( 'Small', 'turbocharged-testimonial-block' ), icon: icons.borderRadiusSmall, value: 'rounded-sm' 
										},
										{ 
											label: __( 'Medium', 'turbocharged-testimonial-block' ), icon: icons.borderRadiusMedium, value: 'rounded-md' 
										},
										{ 
											label: __( 'Large', 'turbocharged-testimonial-block' ), icon: icons.borderRadiusLarge, value: 'rounded-lg' 
										},
										{ 
											label: __( 'X-Large', 'turbocharged-testimonial-block' ), icon: icons.borderRadiusXLarge, value: 'rounded-xl' 
										},
									].map( ( item ) => {
										return(
											<MenuItem
												icon={ item.icon }
												className={ borderRadius === item.value ? 'is-active components-dropdown-menu__menu-item' : 'components-dropdown-menu__menu-item' }
												key={ item.label } 
												onClick={ () => setAttributes( { borderRadius: item.value } ) }
											>
												{ item.label }
											</MenuItem>
										)
									})
								}
									</MenuGroup>
								}
								{
									useCustomBorderRadius &&
									<MenuGroup>
									<div className={ slug }	>
										<div className="px-3 pb-0 pt-3">
										{
											useCustomBorderRadius &&
											<RangeControl
												value={ customBorderRadius }
												showTooltip={ false }
												onChange={
													( value ) => {
														setAttributes( { customBorderRadius: value } );
													}
												}
												initialPosition={ customBorderRadius }
												min={ 0 }
												max={ 200 }
												step={ 1 }
											/>
										}
										</div>
									</div>
									</MenuGroup>				
								}		
								<MenuGroup>				
								<div className={ slug }	>
									<ToggleControl
										className="px-3 pt-3"
										label={ __( 'Custom', 'turbocharged-testimonial-block' ) }
										checked={ useCustomBorderRadius }
										onChange={ ( ) => setAttributes( { useCustomBorderRadius: ! useCustomBorderRadius } ) }
									/>
								</div>
								</MenuGroup>	
							</div>
								</div>
							) } 
						}
					/>
					<Dropdown						
						renderToggle={ ( { isOpen, onToggle } ) => (
							<Button
								icon={ icons.borderWidth }
								label={ __( 'Border Width', 'turbocharged-testimonial-block' ) }
								onClick={ onToggle }
							/>
						) }
						renderContent={ () => {
							return(
								<div className="block-editor-block-settings-menu__popover">
									<div className="components-dropdown-menu__menu turbocharged-testimonial-block">	
								{
									!	useCustomBorderWidth &&
									<MenuGroup>
									{
										[
											{ 
												label: __( 'None', 'turbocharged-testimonial-block' ), icon: icons.borderWidth ,value: 'border-0' 
											},
											{ 
												label: __( 'Small', 'turbocharged-testimonial-block' ), icon: icons.borderWidthSmall, value: 'border-1' 
											},
											{ 
												label: __( 'Medium', 'turbocharged-testimonial-block' ), icon: icons.borderWidthMedium, value: 'border-2' 
											},
											{ 
												label: __( 'Large', 'turbocharged-testimonial-block' ), icon: icons.borderWidthLarge ,value: 'border-4' 
											},
											{ 
												label: __( 'X-Large', 'turbocharged-testimonial-block' ), icon: icons.borderWidthXLarge ,value: 'border-8' 
											},
										].map( ( item ) => {
											return(
												<MenuItem
													icon={ item.icon }
													className={ borderWidth === item.value ? 'is-active components-dropdown-menu__menu-item' : 'components-dropdown-menu__menu-item' }
													key={ item.label } 
													onClick={ () => setAttributes( { borderWidth: item.value } ) }
												>
													{ item.label }
												</MenuItem>
											)
										})
									}
								</MenuGroup>
								}
								{
									useCustomBorderWidth &&
									<MenuGroup>
									<div className={ slug }	>
										<div className="px-3 pb-0 pt-3">
										{
											useCustomBorderWidth &&
											<RangeControl
												value={ customBorderWidth }
												showTooltip={ false }
												onChange={
													( value ) => {
														setAttributes( { customBorderWidth: value } );
													}
												}
												initialPosition={ customBorderWidth }
												min={ 0 }
												max={ 50 }
												step={ 1 }
											/>
										}
										</div>
									</div>
									</MenuGroup>				
								}		
								<MenuGroup>				
								<div className={ slug }	>
									<ToggleControl
										className="px-3 pt-3"
										label={ __( 'Custom', 'turbocharged-testimonial-block' ) }
										checked={ useCustomBorderWidth }
										onChange={ ( ) => setAttributes( { useCustomBorderWidth: ! useCustomBorderWidth } ) }
									/>
								</div>
								</MenuGroup>	
							</div>
								</div>
							) } 
						}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody
					title={ __( 'Background Settings', 'turbocharged-testimonial-block' ) }
					initialOpen={ false }
				>
					{
						! imgUrl &&
						<BaseControl>
							<MediaUpload
								onSelect={ onSelectImage }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								value={ imgId }
								render={ ( { open } ) => (
									<Button
										className="components-button editor-post-featured-image__toggle"
										onClick={ open }
									>
										{ __( 'Select Testimonial Image', 'turbocharged-testimonial-block' ) }
									</Button>
								) }
							/>
						</BaseControl>
					}
					{
						imgUrl &&
						<Fragment>
							<ToggleControl
								label={ __( 'Custom image sizing', 'turbocharged-testimonial-block' ) }
								checked={ imgCustomSizing }
								onChange={ ( ) => setAttributes( { imgCustomSizing: ! imgCustomSizing } ) }
							/>
							{
								imgCustomSizing &&
								<Fragment>
									<FocalPointPicker
										url={ imgUrl }
										value={ imgFocalPoint }
										onChange={ ( focalPoint ) => setAttributes( { imgFocalPoint: focalPoint } ) }
									/>
									<RangeControl
										label={ __( 'Image size', 'turbocharged-testimonial-block' ) }
										value={ imgBackgroundSize }
										onChange={
											( value ) => {
												setAttributes( { imgBackgroundSize: value } );
											}
										}
										initialPosition={ imgBackgroundSize }
										min={ 0 }
										max={ 1000 }
										step={ 50 }
										allowReset
									/>
								</Fragment>
							}
							<BaseControl>
								<div className="turbocharged-testimonial-block">
									{
										! imgCustomSizing &&
											<MediaUpload
												onSelect={ onSelectImage }
												allowedTypes={ ALLOWED_MEDIA_TYPES }
												value={ imgId }
												render={ ( { open } ) => (
													<Button className="h-24 d-block w-full hover:bg-gray-200 mb-2" onClick={ open }>
														<img className="h-24 mx-auto" src={ imgUrl } 	alt="" />
													</Button>
												) }
											/>
									}
									<MediaUpload
										onSelect={ onSelectImage }
										allowedTypes={ ALLOWED_MEDIA_TYPES }
										value={ imgId }
										render={ ( { open } ) => (
											<Button
												isSecondary
												onClick={ open }
											>
												Replace Image
											</Button>
										) }
									/>
									<PanelRow>
										<div className="mt-1">
											<Button
												isLink
												isDestructive
												onClick={ () => setAttributes( { imgUrl: '', imgId: '' } ) }
											>
												Remove Image
											</Button>
										</div>
									</PanelRow>
								</div>
							</BaseControl>
						</Fragment>
					}
					<BaseControl
						id="img-background-color"
						label={ __( 'Image background color', 'turbocharged-testimonial-block' ) }
					>
						<ColorPalette
							id="img-background-color"
							value={ imgBackgroundColor }
							onChange={ ( color ) => setAttributes( { imgBackgroundColor: color } )	}
						/>
					</BaseControl>
					<BaseControl
						id="text-background-color"
						label={ __( 'Content background color', 'turbocharged-testimonial-block' ) }
					>
						<ColorPalette
							id="text-background-color"
							value={ textBackgroundColor }
							onChange={ ( color ) => setAttributes( { textBackgroundColor: color } )	}
						/>
					</BaseControl>
					{
						style === 'full' &&
						<RangeControl
							label={ __( 'Content Background Opacity', 'turbocharged-testimonial-block' ) }
							value={ parseInt( textBackgroundOpacity.replace( 'opacity-', '' ) ) }
							onChange={
								( value ) => {
									value = opacity[ value ];
									setAttributes( { textBackgroundOpacity: value } );
								}
							}
							initialPosition={ parseInt( textBackgroundOpacity.replace( 'opacity-', '' ) ) }
							min={ 0 }
							max={ 100 }
							step={ 10 }
							allowReset
						/>
					}
				</PanelBody>
				<PanelBody
					title={ __( 'Quotation Mark Settings', 'turbocharged-testimonial-block' ) }
					initialOpen={ false }
				>
					<Toolbar className={ className }>
						{
							quotationMarks.map( ( item, index ) => {
								return (
									<ToolbarButton
										key={ index }
										title={ `Style ${ index + 1 }` }
										icon={ quotationMarks[ index ] }
										isActive={ quotationMarkIcon === index }
										onClick={ ( ) => setAttributes( { quotationMarkIcon: index } ) }
									/>
								);
							} )
						}
					</Toolbar>
					<BaseControl
						id="quotation-mark-background-color"
						label={ __( 'Quotation Mark Color', 'turbocharged-testimonial-block' ) }
					>
						<ColorPalette
							id="quotation-mark-background-color"
							alpha={ true }
							value={ quotationMarkColor }
							onChange={ ( color ) => setAttributes( { quotationMarkColor: color } )	}
						/>
					</BaseControl>
					<RangeControl
						label={ __( 'Quotation mark opacity', 'turbocharged-testimonial-block' ) }
						value={ parseInt( quotationMarkOpacity.replace( 'opacity-', '' ) ) }
						onChange={
							( value ) => {
								value = opacity[ value ];
								setAttributes( { quotationMarkOpacity: value } );
							}
						}
						initialPosition={ parseInt( quotationMarkOpacity.replace( 'opacity-', '' ) ) }
						min={ 0 }
						max={ 100 }
						step={ 10 }
						allowReset
					/>
				</PanelBody>
				<PanelBody
					title={ __( 'Border Settings', 'turbocharged-testimonial-block' ) }
					initialOpen={ false }
				>
					<BaseControl
						id="border-radius"
						className={ slug }
						label={ __( 'Border Radius', 'turbocharged-testimonial-block' ) }
					>
					<Button 
						className="float-right mb-3"
						isTertiary
						isSmall
						onClick={ () => setAttributes( { useCustomBorderRadius: ! useCustomBorderRadius } ) }
						>
						{ useCustomBorderRadius ? 'Defaults' : 'Custom' }
					</Button>
					{
						useCustomBorderRadius &&
						<RangeControl
							value={ customBorderRadius }
							onChange={
								( value ) => {
									setAttributes( { customBorderRadius: value } );
								}
							}
							initialPosition={ customBorderRadius }
							min={ 0 }
							max={ 200 }
							step={ 1 }
							allowReset
						/>
					}
					{
						! useCustomBorderRadius &&
						<div className="flex justify-between">							
								<ButtonGroup
									id="border-radius"
								>
								{
									[
										{ label: __( 'None', 'turbocharged-testimonial-block' ), value: 'rounded-none' },
										{ label: 'S', value: 'rounded-sm' },
										{ label: 'M', value: 'rounded-md' },
										{ label: 'L', value: 'rounded-lg' },
										{ label: 'XL', value: 'rounded-xl' },
									].map( ( item ) => {
										return (
											<Button
												key={ item.label }
												isPrimary={ borderRadius === item.value }
												isSecondary={ borderRadius !== item.value }
												onClick={ ( ) => setAttributes( { borderRadius: item.value } ) }
											>{ item.label }</Button>
										);
									} )
								}
							</ButtonGroup>
						</div>
					}
					</BaseControl>
					<BaseControl
						id="border-width"
						className={ slug }
						label={ __( 'Border Width', 'turbocharged-testimonial-block' ) }
					>
					<Button 
						className="float-right mb-3"
						isTertiary
						isSmall
						onClick={ () => setAttributes( { useCustomBorderWidth: ! useCustomBorderWidth } ) }
						>
						{ useCustomBorderWidth ? __( 'Defaults', 'turbocharged-testimonial-block' ) : __( 'Custom', 'turbocharged-testimonial-block' ) }
					</Button>
					{
						useCustomBorderWidth &&
						<RangeControl
							value={ customBorderWidth }
							onChange={
								( value ) => {
									setAttributes( { customBorderWidth: value } );
								}
							}
							initialPosition={ customBorderWidth }
							min={ 0 }
							max={ 50 }
							step={ 1 }
							allowReset
						/>
					}
					{
						! useCustomBorderWidth &&
						<div className="flex justify-between">							
								<ButtonGroup
									id="border-width"
								>
								{
									[
										{ label: __( 'None', 'turbocharged-testimonial-block' ), value: 'border-0' },
										{ label: 'S', value: 'border-1' },
										{ label: 'M', value: 'border-2' },
										{ label: 'L', value: 'border-4' },
										{ label: 'XL', value: 'border-8' },
									].map( ( item ) => {
										return (
											<Button
												key={ item.label }
												isPrimary={ borderWidth === item.value }
												isSecondary={ borderWidth !== item.value }
												onClick={ ( ) => setAttributes( { borderWidth: item.value } ) }
											>{ item.label }</Button>
										);
									} )
								}
							</ButtonGroup>
						</div>
					}
					</BaseControl>
					<SelectControl
						label={ __( 'Border Style', 'turbocharged-testimonial-block' ) }
						value={ borderStyle }
						options={
							[
								{ label: __( 'None', 'turbocharged-testimonial-block' ), value: 'border-none' },
								{ label: __( 'Solid', 'turbocharged-testimonial-block' ), value: 'border-solid' },
								{ label: __( 'Dashed', 'turbocharged-testimonial-block' ), value: 'border-dashed' },
								{ label: __( 'Dotted', 'turbocharged-testimonial-block' ), value: 'border-dotted' },
								{ label: __( 'Double', 'turbocharged-testimonial-block' ), value: 'border-double' },
							]
						}
						onChange={ ( value ) => setAttributes( { borderStyle: value } ) }
					/>
					<BaseControl
						id="border-color"
						label={ __( 'Border Color', 'turbocharged-testimonial-block' ) }
					>
						<ColorPalette
							id="border-color"
							value={ borderColor }
							onChange={ ( color ) => setAttributes( { borderColor: color } )	}
						/>
					</BaseControl>
				</PanelBody>
				<PanelBody
					title={ __( 'Shadow Settings', 'turbocharged-testimonial-block' ) }
					initialOpen={ false }
				>
					<BaseControl
						id="shadow-size"
						className={ slug }
						label={ __( 'Shadow Size', 'turbocharged-testimonial-block' ) }
					>
					<Button 
						className="float-right mb-3"
						isTertiary
						isSmall
						onClick={ () => setAttributes( { useCustomBoxShadow: ! useCustomBoxShadow } ) }
						>
						{ useCustomBoxShadow ? __( 'Defaults', 'turbocharged-testimonial-block' ) : __( 'Custom', 'turbocharged-testimonial-block' ) }
					</Button>
					{
						useCustomBoxShadow &&
						Object.keys( customBoxShadow ).map( ( key ) => {
							return(
								<RangeControl
								key={ key }
								label={ toUpperCase( key ) }
								className="clear-both"
								value={ customBoxShadow[ key ] }
								onChange={
									( value ) => {
										const newCustomBoxShadow = { ...customBoxShadow, [ key ]: value };
										setAttributes( { customBoxShadow: newCustomBoxShadow } );
									}
								}
								initialPosition={ customBoxShadow[ key ] }
								min={ 0 }
								max={ 100 }
								step={ 1 }
								allowReset
							/>
							)
						} )						
					}
					{ 
						! useCustomBoxShadow &&
						<div className="flex justify-between">
							<ButtonGroup
								id="shadow-size"
							>
								{
									[
										{ label: __( 'None', 'turbocharged-testimonial-block' ), value: 'shadow-none' },
										{ label: 'S', value: 'shadow' },
										{ label: 'M', value: 'shadow-md' },
										{ label: 'L', value: 'shadow-lg' },
										{ label: 'XL', value: 'shadow-xl' },
									].map( ( item ) => {
										return (
											<Button
												key={ item.label }
												isPrimary={ boxShadow === item.value }
												isSecondary={ boxShadow !== item.value }
												onClick={ ( ) => setAttributes( { boxShadow: item.value } ) }
											>{ item.label }</Button>
										);
									} )
								}
								</ButtonGroup>							
							</div>
						}						
					</BaseControl>
					<BaseControl
						id="shadow-color"
						label={ __( 'Shadow Color', 'turbocharged-testimonial-block' ) }
					>
						<ColorPalette
							id="shadow-color"
							value={ boxShadowColor }
							onChange={ ( color ) => {
								if ( color === undefined ) {
									setAttributes( { boxShadowColor: '#000000' } );
								} else {
									setAttributes( { boxShadowColor: color } );
								}
							}	}
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
}
