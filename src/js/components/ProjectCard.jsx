import { Link } from 'react-router-dom';
import { useRef } from 'react';
import '../../css/components/ProjectCard.css';
import CloseButton from './CloseButton';

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
				if (expanded) return;
				onClick();
				setTimeout(
					() =>
						ref.current.scrollIntoView({
							behavior: 'smooth',
							block: 'center',
						}),
					500
				);
			}}>
			<div
				className='project-background'
				style={{ backgroundImage: `url(${image})` }}
			/>
			<div className='project-info'>
				<header>
					<CloseButton onClick={onClick} />
					{title && <h1>{title}</h1>}
				</header>
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
