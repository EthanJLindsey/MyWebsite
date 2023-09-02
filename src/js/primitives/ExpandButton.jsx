import { useRef } from 'react';

const ExpandButton = ({ onClick, active, style }) => {
	const mainRef = useRef();
	const height = style?.height ?? '20px';
	const width = style?.width ?? '20px';
	return (
		<div
			ref={mainRef}
			onClick={onClick}
			style={{
				height: height,
				width: width,
				display: 'grid',
				cursor: 'pointer',
			}}>
			<div
				style={{
					gridRow: '1',
					gridColumn: '1',
					backgroundColor: 'white',
					transition: '400ms',
					height: '1px',
					width: `13px`,
					borderRadius: '2px',
					transform: `translate(-1px,10px) rotate(${active?'-':''}45deg)`
				}}
			/>
			<div
				style={{
					gridRow: '1',
					gridColumn: '1',
					backgroundColor: 'white',
					transition: '400ms',
					height: '1px',
					width: `13px`,
					borderRadius: '2px',
					transform: `translate(8px,10px) rotate(${active?'':'-'}45deg)`
				}}
			/>
		</div>
	);
};

export default ExpandButton;
