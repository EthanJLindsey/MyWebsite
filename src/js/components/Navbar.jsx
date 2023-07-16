import { Link } from 'react-router-dom';
import { useState } from 'react';
import $ from 'jquery';

import DrawerButton from './DrawerButton';
import Dropdown from './Dropdown';

export default function Navbar({ style }) {
	const [vis, setVis] = useState($(window).width() < 700);
	const [open, setOpen] = useState(false);

	window.matchMedia('(max-width: 700px)').addEventListener('change', (e) => {
		setVis((v) => e.matches);
		setOpen((o) => false);
	});

	const childStyle = {
		textDecoration: 'none',
		color: 'var(--on-primary)',
		display: 'inline-block',
		margin: '5px',
		padding: 0,
		flex: '0 1 fit-content',
	};
	const hoverStyle = {
		onMouseOver: (e) => {
			e.target.style.color = 'var(--on-hover)';
			e.target.style.transform = 'translate(0,-2px)';
		},
		onMouseLeave: (e) => {
			e.target.style.color = childStyle.color;
			e.target.style.transform = 'none';
		},
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
				style={{ ...childStyle }}>
				Ethan Lindsey
			</Link>
			{/* Right side items */}
			{/* TODO
				- convert to div
				- delete css
				- add conditional style
			*/}
			<Dropdown
				active={vis}
				open={open}>
				<Link
					to='/projects'
					style={childStyle}
					{...hoverStyle}>
					Projects
				</Link>
				<a
					href='/Resume.pdf'
					rel='noopener noreferrer'
					target='_blank'
					style={childStyle}
					{...hoverStyle}>
					Resume
				</a>
				<Link
					to='/contact'
					style={childStyle}
					{...hoverStyle}>
					Contact Me
				</Link>
			</Dropdown>
		</nav>
	);
}
