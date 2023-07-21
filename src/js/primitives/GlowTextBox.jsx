export default function GlowTextBox({ children, style, ...rest }) {
	return (
		<div
			style={{
				...style,
				color: 'var(--gradient-2)',
				fill: 'var(--gradient-2)',
				padding: '2px',
				borderRadius: '6px',
				border: '1px solid var(--gradient-2)',
				backgroundImage: `
          linear-gradient(
            to bottom right,
            var(--gradient-1),
            var(--gradient-2),
            var(--gradient-3),
            var(--gradient-4)
          ),
          linear-gradient(rgba(0,0,0,0.4) 0 0)`,
				WebkitBackgroundClip: 'text, padding-box',
				WebkitTextFillColor: 'transparent',
			}}>
			{children}
		</div>
	);
}
