import { Link } from 'react-router-dom';
import { useState } from 'react';
import $ from 'jquery';

import DrawerButton from './DrawerButton';

export default function Navbar({ style }) {
	const [vis, setVis] = useState($(window).width() < 700);
	const [open, setOpen] = useState(false);

	window.matchMedia('(max-width: 700px)').addEventListener('change', (e) => {
		setVis((v) => e.matches);
		setOpen((o) => false);
	});

	const hoverProps = {
		onMouseOver: (e) => {
			e.target.style.color = 'var(--on-hover)';
			e.target.style.transform = 'translate(0,-2px)';
		},
		onMouseLeave: (e) => {
			e.target.style.color = linkStyle.color;
			e.target.style.transform = 'none';
		},
	};
	const linkStyle = {
		textDecoration: 'none',
		color: 'var(--on-primary)',
		transition: '200ms',
	};
	const childStyle = {
		padding: '7px',
		margin: 0,
	};
	return (
		<nav
			style={{
				...style,
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}>
			{/* Left side items */}
			{vis && (
				<DrawerButton
					onClick={() => setOpen((o) => !o)}
					style={{ ...childStyle }}
				/>
			)}
			<Link
				to='/'
				className='title'
				style={{...childStyle, ...linkStyle}}
				{...hoverProps}>
				Ethan Lindsey
			</Link>
			{/* Right side items */}
			<div
				style={{
					flex: '1',
					flexBasis: vis ? '100%' : 'fit-content',
					overflow: 'hidden',
					transition: '200ms',
					height: vis ? (open ? '84px' : 0) : 'fit-content',
					display: 'flex',
					flexDirection: vis ? 'column' : 'row',
					alignItems: vis && 'center',
					justifyContent: !vis && 'flex-end',
				}}>
				<Link
					to='/projects'
					style={{...childStyle, ...linkStyle}}
					{...hoverProps}>
					Projects
				</Link>
				<a
					href='/Resume.pdf'
					rel='noopener noreferrer'
					target='_blank'
					style={{...childStyle, ...linkStyle}}
					{...hoverProps}>
					Resume
				</a>
				<Link
					to='/contact'
					style={{...childStyle, ...linkStyle}}
					{...hoverProps}>
					Contact Me
				</Link>
			</div>
		</nav>
	);
}
