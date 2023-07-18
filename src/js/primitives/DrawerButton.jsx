import { useState } from 'react';

export default function DrawerButton({active = false, onClick, ...rest }) {

	rest.style = {
		...rest.style,
		width: '25px',
		height: '25px',
		cursor: 'pointer',
	};

	const barStyle = {
		width: '25px',
		height: '1px',
		backgroundColor: 'white',
		margin: '5.5px 0',
		transition: '0.2s',
		padding: '0',
	};

	return (
		<div
			onClick={() => {
				onClick();
			}}
			{...rest}>
			<div
				style={{
					...barStyle,
					...(active && { transform: 'translate(0, 6.2px) rotate(45deg)' }),
				}}
			/>
			<div style={{ ...barStyle, ...(active && { opacity: 0 }) }} />
			<div
				style={{
					...barStyle,
					...(active && { transform: 'translate(0, -6.2px) rotate(-45deg)' }),
				}}
			/>
		</div>
	);
}
