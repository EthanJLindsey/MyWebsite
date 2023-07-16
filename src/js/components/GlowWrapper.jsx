import { useEffect, useState } from 'react';
import $ from 'jquery';

export default function GlowWrapper({ children, style, ...rest }) {
	const [x, setX] = useState(125);
	const [y, setY] = useState(125);
	const [time, setTime] = useState(1);
	const [size, setSize] = useState(4);

	useEffect(() => {
		const interval = setInterval(() => {
			setX(Math.random() * $('.glow-background').width() - 250);
			setY(Math.random() * $('.glow-background').height() - 250);
			setSize(Math.random() * 6 + 4);
			setTime(Math.random() * 4 + 4);
		}, time * 1000);
		return () => clearInterval(interval);
	});

	return (
		<div
			className='glow-background'
			style={{
				display: 'grid',
				overflow: 'hidden'
			}}>
			<div
				id='glow'
				style={{
					position: 'relative',
					left: x + 'px',
					top: y + 'px',
					transform: 'scale(' + size + ')',
					transition: time + 's',
					width: '250px',
					height: '250px',
					gridColumn: 1,
					gridRow: 1,
					backgroundImage: 'var(--glow-image)',
				}}
			/>
			<div
				style={{ ...style, gridColumn: 1, gridRow: 1, zIndex: 0 }}
				{...rest}>
				{children}
			</div>
		</div>
	);
}
