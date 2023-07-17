export default function Separator({ thickness = '2px', direction = 'vertical', style, ...rest }) {
	return (
		<div
			style={{
				width: direction==='vertical'? thickness: 'auto',
				height: direction==='horizontal'? thickness: 'auto',
				backgroundColor: 'white',
				marginLeft: direction==='vertical' ? '10px': '0',
				marginRight: direction==='vertical' ? '10px': '0',
				marginTop: direction==='horizontal' ? '10px': '0',
				marginBottom: direction==='horizontal' ? '10px': '0',
				borderRadius: '6px',
				...style,
			}}
			{...rest}></div>
	);
}
