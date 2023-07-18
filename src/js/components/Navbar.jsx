import { Link } from 'react-router-dom';
import { useState } from 'react';
import $ from 'jquery';

import DrawerButton from '../primitives/DrawerButton';

export default function Navbar({ style }) {
	const [vis, setVis] = useState($(window).width() < 700);
	const [open, setOpen] = useState(false);

	window.matchMedia('(max-width: 700px)').addEventListener('change', (e) => {
		setVis(e.matches);
		setOpen(false);
	});

	const hoverProps = {
		onMouseOver: (e) => {
			e.target.style.color = 'var(--on-hover)';
			e.target.style.transform = 'translate(0,-2px)';
		},
		onMouseLeave: (e) => {
			e.target.style.color = 'inherit';
			e.target.style.transform = 'none';
		},
	};
	const closeDrawerProps = {
		onClick: ()=>{
			setOpen(false);
		}
	}
	const linkStyle = {
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
					onClick={() => setOpen(!open)}
					style={{ ...childStyle }}
					active={open}
				/>
			)}
			<Link
				to='/'
				className='title'
				style={{ ...childStyle, ...linkStyle }}
				{...hoverProps}
				{...closeDrawerProps}>
				Ethan Lindsey
			</Link>
			{/* Right side items */}
			<div
				style={{
					flex: '1',
					flexBasis: vis ? '100%' : 'fit-content',
					overflow: 'hidden',
					transition: '200ms',
					height: vis ? (open ? '105.6px' : 0) : 'fit-content',
					display: 'flex',
					flexDirection: vis ? 'column' : 'row',
					alignItems: vis && 'center',
					justifyContent: !vis && 'flex-end',
				}}>
				<Link
					to='/projects'
					style={{ ...childStyle, ...linkStyle }}
					{...hoverProps}
					{...closeDrawerProps}>
					Projects
				</Link>
				<a
					href='/Resume.pdf'
					rel='noopener noreferrer'
					target='_blank'
					style={{ ...childStyle, ...linkStyle }}
					{...hoverProps}
					{...closeDrawerProps}>
					Resume
				</a>
				<Link
					to='/contact'
					style={{ ...childStyle, ...linkStyle }}
					{...hoverProps}
					{...closeDrawerProps}>
					Contact Me
				</Link>
			</div>
		</nav>
	);
}
