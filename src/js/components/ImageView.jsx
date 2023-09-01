import { useState } from 'react';

const ImageView = ({ src, alt, onMouseOver, style }) => {
	const [fullscreen, setFullscreen] = useState(false);

	if (fullscreen) {
		style.position = 'fixed';
		style.width = '100vw';
		style.height = '100vh';
	}

	return (
		<img
			src={src}
			alt={alt}
			onClick={() => setFullscreen(!fullscreen)}
			onMouseOver={onMouseOver}
			style={{
				...style,
        transition: null,
				...(fullscreen
					? {
							position: 'fixed',
							width: '100vw',
							height: '100vh',
							zIndex: '30',
              objectFit: 'contain',
              backdropFilter: 'brightness(.3) blur(2px)',
							top: 0,
							left: 0,
              border: null,
              margin: null,
					  }
					: {}),
			}}
		/>
	);
};

export default ImageView;
