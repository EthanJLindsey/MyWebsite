import { ReactComponent as LinkedinSVG } from '../../svg/icons8-linkedin.svg';
import { ReactComponent as GithubSVG } from '../../svg/icons8-github.svg';
import { useState, useEffect } from 'react';

export default function IconList() {
	const [mobile, setMobile] = useState(
		window.matchMedia('(max-width: 700px)').matches
	);
	const [hover, setHover] = useState(0);

	useEffect(
		() =>
			window
				.matchMedia('(max-width: 700px)')
				.addEventListener('change', (m) => {
					setMobile(() => m.matches);
				}),
		[]
	);

	const iconStyle = {
		height: '40px',
		width: '40px',
		transition: '200ms',
	};

	return (
		<ul
			style={{
				padding: 0,
				margin: 0,
				bottom: 0,
				left: 0,
				display: 'flex',
				position: mobile ? 'initial' : 'fixed',
				flexDirection: mobile ? 'row' : 'column',
			}}>
			{/* <li>
				<a href='mailto: ethan.james.lindsey@gmail.com'>
					<EmailSVG
						onMouseEnter={() => setHover(1)}
						onMouseLeave={() => setHover(0)}
						style={{
							...iconStyle,
							transform: hover === 1 ? 'translate(0,-2px)' : 'initial',
							fill: hover === 1 ? 'rgb(197, 34, 31)' : 'var(--on-primary)',
						}}
					/>
				</a>
			</li> */}
			<li>
				<a
					href='https://www.linkedin.com/in/ejlindseycs/'
					rel='noopener noreferrer'
					target='_blank'>
					<LinkedinSVG
						onMouseEnter={() => setHover(2)}
						onMouseLeave={() => setHover(0)}
						style={{
							...iconStyle,
							transform: hover === 2 ? 'translate(0,-2px)' : 'initial',
							fill: hover === 2 ? '#0a66c2' : 'var(--on-primary)',
						}}
					/>
				</a>
			</li>
			<li>
				<a
					href='https://github.com/EthanJLindsey'
					rel='noopener noreferrer'
					target='_blank'>
					<GithubSVG
						onMouseEnter={() => setHover(3)}
						onMouseLeave={() => setHover(0)}
						style={{
							...iconStyle,
							transform: hover === 3 ? 'translate(0,-2px)' : 'initial',
							fill: hover === 3 ? '#888888' : 'var(--on-primary)',
						}}
					/>
				</a>
			</li>
		</ul>
	);
}
