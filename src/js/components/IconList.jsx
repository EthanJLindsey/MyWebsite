import { ReactComponent as LinkedinSVG } from '../../svg/icons8-linkedin.svg';
import { ReactComponent as GithubSVG } from '../../svg/icons8-github.svg';
import { useState, useEffect } from 'react';

export default function IconList() {
	const [mobile, setMobile] = useState(
		window.matchMedia('(max-width: 700px)').matches
	);

	useEffect(
		() =>
			window
				.matchMedia('(max-width: 700px)')
				.addEventListener('change', (m) => {
					setMobile(() => m.matches);
				}),
		[]
	);

	return (
		<div
			style={{
				padding: 0,
				margin: 0,
				bottom: 0,
				left: 0,
				display: 'flex',
				position: mobile ? 'initial' : 'fixed',
				flexDirection: mobile ? 'row' : 'column',
				alignItems: 'center',
			}}>
			<a
				href='mailto: ethan.james.lindsey@gmail.com'
				className={['blue-hover'].join(' ')}
				style={{
					fontSize: '40px',
					padding: '5px',
					textAlign: 'center',
					lineHeight: '20px',
					height: '30px',
					width: '30px',
				}}>
				@
			</a>
			<a
				href='https://www.linkedin.com/in/ejlindseycs/'
				rel='noopener noreferrer'
				target='_blank'>
				<LinkedinSVG
					style={{
						'--hover-color': '#0a66c2',
					}}
					className={['icon', 'hover-icon'].join(' ')}
				/>
			</a>
			<a
				href='https://github.com/EthanJLindsey'
				rel='noopener noreferrer'
				target='_blank'>
				<GithubSVG
					style={{
						'--hover-color': '#888888',
					}}
					className={['icon', 'hover-icon'].join(' ')}
				/>
			</a>
		</div>
	);
}
