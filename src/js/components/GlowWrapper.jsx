import { useEffect, useState } from 'react';
import { useWindowHeight, useWindowWidth } from '../data/listeners';

export default function GlowWrapper({ children, style, ...rest }) {
	const maxWidth = useWindowWidth();
	const maxHeight = useWindowHeight();

	const [x, setX] = useState(125);
	const [y, setY] = useState(125);
	const [time, setTime] = useState(1);
	const [size, setSize] = useState(4);

	useEffect(() => {
		const interval = setInterval(() => {
			setX(Math.random() * maxWidth - 250);
			setY(Math.random() * maxHeight - 250);
			setSize(Math.random() * 4 + 2);
			setTime(Math.random() * 4 + 6);
		}, time * 1000);
		return () => clearInterval(interval);
	});

	return (
		<div
			style={{
				display: 'grid',
				overflow: 'hidden',
			}}>
			<div
				style={{
					width: '100vw',
					height: '100vh',
					overflow: 'hidden',
					position: 'fixed',
					gridColumn: 1,
					gridRow: 1,
				}}>
				<div
					style={{
						position: 'relative',
						left: x + 'px',
						top: y + 'px',
						transform: 'scale(' + size + ')',
						transition: time + 's',
						width: '250px',
						height: '250px',
						backgroundImage: 'var(--glow-image)',
					}}
				/>
			</div>
			<div
				style={{
					...style,
					gridColumn: 1,
					gridRow: 1,
					zIndex: 0,
				}}
				{...rest}>
				{children}
			</div>
		</div>
	);
}
