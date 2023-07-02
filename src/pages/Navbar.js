import { Link } from 'react-router-dom';
import { useState } from 'react';

import '../css/Navbar.css';
import DrawerButton from '../components/DrawerButton';
import Dropdown from '../components/Dropdown';

const items = [
	{
		title: 'Contact Me',
		url: '/contact',
	},
	{
		title: 'Resume',
		url: '/resume',
	},
	{
		title: 'Projects',
		url: '/projects',
	},
];

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
			{vis ? (
				<Dropdown open={open}>
					<div className='nav-items'>
						{items.map((item, index) => {
							return (
								<Link
									to={item.url}
									key={index}>
									{item.title}
								</Link>
							);
						})}
					</div>
				</Dropdown>
			) : (
				<div className='nav-items'>
					{items.map((item, index) => {
						return (
							<Link
								to={item.url}
								key={index}>
								{item.title}
							</Link>
						);
					})}
				</div>
			)}
		</nav>
	);
}
