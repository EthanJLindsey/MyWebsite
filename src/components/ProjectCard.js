import { Link } from 'react-router-dom';
import { useRef } from 'react';
import '../css/components/ProjectCard.css';

function f(tag) {
	console.log(`${tag} clicked.`);
}

export default function ProjectCard({
	image,
	title,
	description,
	tags,
	link,
	expanded,
	onClick,
}) {
	const ref = useRef();
	return (
		<div
			ref={ref}
			className={'project-card' + (expanded ? '-expanded' : '')}
			onClick={() => {
				onClick();
				if (!expanded) {
					setTimeout(
						() =>
							ref.current.scrollIntoView({
								behavior: 'smooth',
								block: 'center',
							}),
						400
					);
				}
			}}>
			<div
				className='project-background'
				style={{ backgroundImage: `url(${image})` }}
			/>
			<div className='project-content'>
				{title && <h1>{title}</h1>}
				{description && <p>{description}</p>}
				<div className='tags'>
					{tags &&
						tags.map((tag, index) => (
							<div
								key={index}
								onClick={() => f(tag)}>
								{tag}
							</div>
						))}
				</div>
				<div className='link-list'>
					{link && <Link to={link}>Click here to view</Link>}
				</div>
			</div>
		</div>
	);
}
