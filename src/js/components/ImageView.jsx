import { useState } from 'react';

import { ReactComponent as CloseSVG } from '../../svg/icons8-close.svg';

const ImageView = ({ src, alt, style, ...rest }) => {
	const [fullscreen, setFullscreen] = useState(false);

	if (fullscreen) {
		style.border = null;
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
					cursor: 'pointer',
					height: '90%',
					borderRadius: '4px',
					top: 0,
					left: 0,
				}}
				{...rest}
			/>
			{fullscreen && (
				<>
					<img
					src={src}
					alt={alt}
					style={{
						...style,
						cursor: null,
						position: 'fixed',
						width: '100vw',
						height: '100vh',
						zIndex: '30',
						objectFit: 'contain',
						backdropFilter: 'brightness(.3) blur(2px)',
						overflow: 'hidden',
						borderRadius: null,
						top: 0,
						left: 0,
						border: null,
						margin: null,
					}}
					{...rest}
								/>
					<CloseSVG
						onClick={() => {
							document.body.style.overflow = 'auto';
							setFullscreen(false);
						}}
						className='icon'
						style={{
							cursor: 'pointer',
							position: 'fixed',
							fill: 'invert',
							backgroundColor: 'rgb(0,0,0,.5)',
							borderRadius: '4px',
							zIndex: 31,
							top: 0,
							left: 0,
							margin: '5px',
							padding: '3px'
						}}
					/>
				</>
			)}
		</>
	);
};

export default ImageView;
