import { useRef, useState } from 'react';

const ImageGallery = ({ images, style }) => {
	const [active, setActive] = useState(0);

	const activeRef = useRef();
	// activeRef.current?.scrollIntoView({behavior: 'smooth'});

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
				scrollbarWidth: 'none',
				msOverflowStyle: 'none',
			}}>
			{images?.map((item, index) => {
				return (
					<img
						key={index}
						ref={index === active ? activeRef : null}
						alt=''
						src={item}
						onMouseOver={() => setActive(index)}
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
