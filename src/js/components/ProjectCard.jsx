import { useEffect, useRef, useState } from 'react';

import GlowTextBox from '../primitives/GlowTextBox';

import { ReactComponent as ExternalLinkSVG } from '../../svg/icons8-external-link.svg';
import { ReactComponent as CloseSVG } from '../../svg/icons8-close.svg';
import ImageGallery from './ImageGallery';

export default function ProjectCard({
	backgroundImage,
	title,
	description,
	tags,
	links,
	expanded,
	onClick,
	images,
}) {
	const [hover, setHover] = useState(false);
	const hiddenContentRef = useRef();

	useEffect(() => {
		if (!hiddenContentRef.current) return;
		const {current} = hiddenContentRef;
		const resizeObserver = new ResizeObserver(() => {
			setHiddenHeight(current.clientHeight);
		});
		resizeObserver.observe(current);
		return () => resizeObserver.disconnect();
	}, []);


	const [hiddenHeight, setHiddenHeight] = useState();



	return (
		<div
			onClick={() => {
				if (expanded) return;
				setHover(false);
				onClick();
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
				gridTemplateColumns: '100%',
				flex: `1 0 ${expanded ? '99%' : '250px'}`,
				transition: '500ms'
			}}>
			{/* Background image */}
			<div
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					transition: 'inherit',
					filter: `brightness(${expanded ? 0.3 : 0.7})`,
					gridColumn: 1,
					gridRow: 1,
					zIndex: -1
				}}
			/>
			{/* Content */}
			<div
				style={{
					gridColumn: '1',
					gridRow: '1',
					padding: '10px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'center',
					minHeight: '200px',
					maxWidth: '100%',
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

				{/* All Hidden Content */}
				<div
					style={{
						height: expanded ? `${hiddenHeight}px` : 0,
						transition: '500ms',
						opacity: expanded ? 1: 0,
						maxWidth: 'inherit',
						overflow: 'hidden',
					}}>
					{/* Used to get size of all hidden content */}
					<div ref={hiddenContentRef}
					>
						{/* Links section */}
						{links && (
							<div
								style={{
									display: 'flex',
									padding: '10px',
									justifyContent: 'flex-end',
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
							style={{
								fontSize: '18px',
								flex: '1',
							}}>
							{description}
						</p>
						{images && <ImageGallery images={images} style={{
							margin: '5px'
						}}/>}
					</div>
				</div>

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
