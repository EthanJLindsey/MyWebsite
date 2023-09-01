import { useState } from 'react';
import ImageView from './ImageView';

const ImageGallery = ({ images, style }) => {
	const [active, setActive] = useState(0);

	return (
		<div
    className='scrollbar-hidden'
			style={{
				...style,
				display: 'flex',
				height: '150px',
				alignItems: 'center',
				overflowY: 'hidden',
				overflowX: 'scroll',
			}}>
			{images?.map((item, index) => {
				return (
					<ImageView
						key={index}
						onMouseOver={() => setActive(index)}
						alt=''
						src={item}
						style={{
							height: '90%',
							margin: '4px',
							transition: '200ms',
							border: `2px solid ${active === index? 'var(--hover-color)': 'transparent'}`,
							cursor: 'pointer',
						}}
					/>
				);
			})}
		</div>
	);
};

export default ImageGallery;
