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
				minHeight: expanded ? '95vh' : '300px',
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
					alignItems: 'center',
				}}>
				<header
					style={{
						flex: '0',
						display: 'flex',
						width: '100%',
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
						<h2
							style={{
								transition: '200ms',
								transform: hover ? 'translate(2px,2px)' : 'initial',
								color: hover ? 'var(--on-hover)' : 'inherit',
							}}>
							{title}
						</h2>
					)}
				</header>

				{/* Links section */}
				{links && (
					<div
						style={{
							width: '100%',
							display: 'flex',
							padding: '10px',
							flex: `0 1 ${expanded? 'auto': 0}`,
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
									<ExternalLinkSVG />
								</a>
							</GlowTextBox>
						))}
					</div>
				)}

				{/* TODO fades in but cuts out */}
				<p
					style={{
						opacity: expanded ? 1 : 0,
						fontSize: '20px',
						flex: `1 1 ${expanded? 'fit-content': '0px'}`,
						transition: '600ms',
						overflow: 'hidden',
						width: '80%',
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
