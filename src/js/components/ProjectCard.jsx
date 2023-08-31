import { useRef, useState } from 'react';

import GlowTextBox from '../primitives/GlowTextBox';

import { ReactComponent as ExternalLinkSVG } from '../../svg/icons8-external-link.svg';
import { ReactComponent as CloseSVG } from '../../svg/icons8-close.svg';

export default function ProjectCard({
	image,
	title,
	description,
	tags,
	links,
	expanded,
	onClick,
}) {
	const [hover, setHover] = useState(false);
	const [mobile, setMobile] = useState(
		window.matchMedia('(max-width: 700px)').matches
	);

	const scrollRef = useRef();
	const sizeRef = useRef();

	window.matchMedia('(max-width: 700px)').addEventListener('change', (e) => {
		setMobile(e.matches);
	});

	return (
		<div
			ref={scrollRef}
			onClick={() => {
				if (expanded) return;
				setHover(false);
				onClick();
				setTimeout(
					() =>
						scrollRef.current.scrollIntoView({
							behavior: 'smooth',
							// block: 'center',
						}),
					200
				);
			}}
			onMouseEnter={() => {
				if (!expanded) setHover(true);
			}}
			onMouseLeave={() => {
				if (!expanded) setHover(false);
			}}
			style={{
				padding: 0,
				margin: '3px',
				borderRadius: '6px',
				overflow: 'clip',
				display: 'grid',
				flex: `1 0 ${expanded ? '99%' : '250px'}`,
			}}>
			{/* Background image */}
			<div
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					transition: 'inherit',
					filter: `brightness(${expanded ? 0.3 : 0.7})`,
					gridColumn: 1,
					gridRow: 1,
				}}
			/>
			{/* Content */}
			<div
				style={{
					gridColumn: '1',
					gridRow: '1',
					zIndex: 1,
					padding: '10px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'center',
					maxHeight: expanded? 'initial': '200px',
					animationName: expanded ? 'growHeight' : '',
					animationDuration: expanded ? '2s' : '',
				}}>
				<header
					style={{
						flex: '0',
						display: 'flex',
						width: '100%',
						justifyContent: 'space-between',
					}}>
					<CloseSVG
						onClick={() => {
							onClick();
							setTimeout(
								() =>
									scrollRef.current.scrollIntoView({
										behavior: 'smooth',
										// block: 'center',
									}),
								200
							);
						}}
						className='icon'
						style={{
							opacity: expanded ? 1 : 0,
							transition: '200ms',
							cursor: 'pointer',
						}}
					/>
					{title && (
						<h3
							style={{
								transition: '200ms',
								transform: hover ? 'translate(-2px,2px)' : 'initial',
								color: hover ? 'var(--hover-color)' : 'inherit',
							}}>
							{title}
						</h3>
					)}
				</header>

				{/* Links section */}
				{links && (
					<div
						style={{
							width: '100%',
							display: 'flex',
							padding: '10px',
							flex: `0 1 ${expanded ? 'auto' : 0}`,
							justifyContent: 'flex-end',
							opacity: expanded ? 1 : 0,
							// height: expanded ? 'auto' : 0,
							transition: '200ms',
							overflow: 'hidden',
						}}>
						{links.map((e, i) => (
							<GlowTextBox key={i}>
								<a
									href={e.link}
									rel='noopener noreferrer'
									target='_blank'
									style={{
										display: 'flex',
										alignItems: 'center',
									}}>
									{e.name}
									<ExternalLinkSVG
										style={{
											height: '19px',
											width: '19px',
										}}
									/>
								</a>
							</GlowTextBox>
						))}
					</div>
				)}

				{/* TODO fades in but cuts out */}
				<p
					ref={sizeRef}
					style={{
						opacity: expanded ? 1 : 0,
						fontSize: '18px',
						overflow: 'hidden',
						width: mobile ? '100%' : '80%',
						flex: '1',
					}}>
					{description}
				</p>

				{/* Tags section */}
				<div
					style={{
						width: '100%',
						flex: 0,
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'flex-end',
						transition: '200ms',
						transform: hover ? 'translate(-2px,-2px)' : 'initial',
					}}>
					{tags.map((tag, index) => (
						<GlowTextBox
							key={index}
							style={{ margin: '3px' }}>
							{tag}
						</GlowTextBox>
					))}
				</div>
			</div>
		</div>
	);
}
