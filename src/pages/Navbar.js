import { Link } from 'react-router-dom';
import { useState } from 'react';

import '../css/Navbar.css';
import DrawerButton from '../components/DrawerButton';
import Dropdown from '../components/Dropdown';

export default function Navbar() {
	const [vis, setVis] = useState(
		window.matchMedia('(max-width: 700px)').matches
	);
	const [open, setOpen] = useState(false);
	window.matchMedia('(max-width: 700px)').addEventListener('change', () => {
		setVis((v) => !v);
		setOpen((o) => false);
	});
	return (
		<nav className='navbar'>
			{/* Left side items */}
			<div>
				{vis && (
					<DrawerButton
						active={open}
						onClick={() => setOpen((o) => !o)}
					/>
				)}
				<Link
					to='/'
					className='title'>
					Ethan Lindsey
				</Link>
			</div>
			{/* Right side items */}
			{
				<Dropdown
					active={vis}
					open={open}>
					<div className='nav-items'>
						<Link to='/projects'>Projects</Link>
						<a
							href='Resume.pdf'
							rel='noopener noreferrer'
							target='_blank'>
							Resume
						</a>
						<Link to='/contact'>Contact Me</Link>
					</div>
				</Dropdown>
			}
		</nav>
	);
}
