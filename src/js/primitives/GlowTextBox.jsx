export default function GlowTextBox({ children, style, ...rest }) {
	return (
		<div
			style={{
				...style,
				padding: '2px',
				borderRadius: '6px',
				backdropFilter: 'brightness(.6)',
				color: 'var(--gradient-2)'
			}}>
			{children}
		</div>
	);
}
