import { useState } from 'react';

import DrawerButton from '../primitives/DrawerButton';
import { useWindowWidth } from '../data/listeners';

export default function Navbar({ refs, style }) {
	const maxWidth = useWindowWidth();

	const vis = maxWidth <= 700;
	const [open, setOpen] = useState(false);

	const closeDrawerProps = {
		onClick: () => {
			setOpen(false);
		},
	};
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
			<div
				className='title'
				style={{ ...childStyle, ...linkStyle }}
				onClick={() => {
					refs['home'].current?.scrollIntoView({ behavior: 'smooth' });
					setOpen(false);
				}}>
				Ethan Lindsey
			</div>
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
				<div
					style={{ ...childStyle, ...linkStyle }}
					className='blue-hover'
					onClick={() => {
						refs['projects'].current?.scrollIntoView({ behavior: 'smooth' });
						setOpen(false);
					}}>
					Projects
				</div>
				<a
					href='/Resume.pdf'
					rel='noopener noreferrer'
					target='_blank'
					style={{ ...childStyle, ...linkStyle }}
					className='blue-hover'
					{...closeDrawerProps}>
					Resume
				</a>
				<div
					style={{ ...childStyle, ...linkStyle }}
					className='blue-hover'
					onClick={() => {
						refs['contact'].current?.scrollIntoView({ behavior: 'smooth' });
						setOpen(false);
					}}>
					Contact Me
				</div>
			</div>
		</nav>
	);
}
