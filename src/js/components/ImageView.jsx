import { useState } from 'react';

import { ReactComponent as CloseSVG } from '../../svg/icons8-close.svg';

const ImageView = ({ src, alt, style, ...rest }) => {
	const [fullscreen, setFullscreen] = useState(false);

	if (fullscreen) {
		style.position = 'fixed';
		style.width = '100vw';
		style.height = '100vh';
	}

	document.body.style.overflow = fullscreen? 'hidden': 'auto';

	return (
		<>
			<img
				src={src}
				alt={alt}
				onClick={() => setFullscreen(true)}
				style={{
					...style,
					transition: null,
					cursor: fullscreen ? '' : 'pointer',
					position: fullscreen ? 'fixed' : null,
					width: fullscreen ? '100vw' : null,
					height: fullscreen ? '100vh' : '90%',
					zIndex: fullscreen ? '30' : '',
					objectFit: fullscreen? 'contain': '',
					backdropFilter: fullscreen? 'brightness(.3) blur(2px)':'',
					overflow: fullscreen? 'hidden': null,
					top: 0,
					left: 0,
					border: fullscreen? null: style.border,
					margin: fullscreen? null: style.margin,
				}}
				{...rest}
			/>
			{fullscreen && (
				<CloseSVG
					onClick={() => {
						setFullscreen(false);
					}}
					className='icon'
					style={{
						cursor: 'pointer',
						position: 'fixed',
						zIndex: 31,
						top: '0',
						right: '0',
					}}
				/>
			)}
		</>
	);
};

export default ImageView;
