import { useEffect, useState } from 'react';
import $ from 'jquery';

export default function GlowWrapper({ children, style, ...rest }) {
	const [x, setX] = useState(250);
	const [y, setY] = useState(250);
	const [time, setTime] = useState(1);
	const [size, setSize] = useState(2);

	useEffect(() => {
		const interval = setInterval(() => {
			setX(Math.random() * $('.glow-background').width() - 250);
			setY(Math.random() * $('.glow-background').height() - 250);
			setSize(Math.random() * 3 + 2);
			setTime(Math.random() * 4 + 4);
		}, time * 1000);
		return () => clearInterval(interval);
	});

	return (
		<div
			className='glow-background'
			style={{
				display: 'grid',
			}}>
			<div
				id='glow'
				style={{
					position: 'relative',
					left: x + 'px',
					top: y + 'px',
					transform: 'scale(' + size + ')',
					transition: time + 's',
					width: '500px',
					height: '500px',
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
