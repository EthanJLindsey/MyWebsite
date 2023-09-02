import { useState } from 'react';

import { ReactComponent as CloseSVG } from '../../svg/icons8-close.svg';

const ImageView = ({ src, alt, style, ...rest }) => {
	const [fullscreen, setFullscreen] = useState(false);

	if (fullscreen) {
		style.position = 'fixed';
		style.width = '100vw';
		style.height = '100vh';
	}

	return (
		<>
			<img
				src={src}
				alt={alt}
				onClick={() => {
					document.body.style.overflow = 'hidden';
					setFullscreen(true);
				}}
				style={{
					...style,
					transition: null,
					cursor: fullscreen ? '' : 'pointer',
					position: fullscreen ? 'fixed' : null,
					width: fullscreen ? '100vw' : null,
					height: fullscreen ? '100vh' : '90%',
					zIndex: fullscreen ? '30' : '',
					objectFit: fullscreen ? 'contain' : '',
					backdropFilter: fullscreen ? 'brightness(.3) blur(2px)' : '',
					overflow: fullscreen ? 'hidden' : null,
					borderRadius: fullscreen ? null: '4px',
					top: 0,
					left: 0,
					border: fullscreen ? null : style.border,
					margin: fullscreen ? null : style.margin,
				}}
				{...rest}
			/>
			{fullscreen && (
				<CloseSVG
					onClick={() => {
						document.body.style.overflow = 'auto';
						setFullscreen(false);
					}}
					className='icon'
					style={{
						cursor: 'pointer',
						position: 'fixed',
						zIndex: 31,
						top: 0,
						left: 0,
						margin: '10px',
					}}
				/>
			)}
		</>
	);
};

export default ImageView;
