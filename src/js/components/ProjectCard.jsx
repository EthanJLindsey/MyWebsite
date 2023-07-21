import { useRef, useState } from 'react';

import CloseButton from '../primitives/CloseButton';
import GlowTextBox from '../primitives/GlowTextBox';

import { ReactComponent as ExternalLinkSVG } from '../../svg/icons8-external-link.svg';

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
	const ref = useRef();
	return (
		<div
			ref={ref}
			onClick={() => {
				if (expanded) return;
				setHover(false);
				onClick();
				setTimeout(
					() =>
						ref.current.scrollIntoView({
							behavior: 'smooth',
							block: 'center',
						}),
					800
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
				transition: '1s',
				display: 'grid',
				flex: `1 1 ${expanded ? '95vw' : '350px'}`,
				height: expanded ? '95vh' : '300px',
			}}>
			{/* Background image */}
			<div
				style={{
					backgroundImage: `url(${image})`,
					backgroundSize: 'cover',
					transition: 'inherit',
					filter: `brightness(${expanded ? 0.4 : 0.7})`,
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
				}}>
				<header
					style={{
						flex: '0',
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<CloseButton
						onClick={onClick}
						style={{
							opacity: expanded ? 1 : 0,
							transition: '200ms',
						}}
					/>
					{title && (
						<h1
							style={{
								transition: '200ms',
								transform: hover ? 'translate(2px,2px)' : 'initial',
								color: hover ? 'var(--on-hover)' : 'inherit',
							}}>
							{title}
						</h1>
					)}
				</header>

				{/* TODO fades in but cuts out */}
				<p
					style={{
						opacity: expanded ? 1 : 0,
						flex: `0 1 ${expanded ? 'auto' : 0}`,
						transition: '600ms',
						overflow: 'clip',
					}}>
					{description}
				</p>

				{/* Links section */}
				{links && (
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							opacity: expanded ? 1 : 0,
							height: expanded ? 'auto' : 0,
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
									<ExternalLinkSVG />
								</a>
							</GlowTextBox>
						))}
					</div>
				)}

				{/* Tags section */}
				<div
					style={{
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
