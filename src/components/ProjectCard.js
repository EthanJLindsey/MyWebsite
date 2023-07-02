import { Link } from 'react-router-dom';
import '../css/components/ProjectCard.css';

export default function ProjectCard({
	image,
	title,
	description,
	color,
	link,
}) {
	return (
		<div
			className='project-card'
			style={{ backgroundImage: `url(${image})` }}>
			<div>
				{title && <h1 style={{ color: color }}>{title}</h1>}
				{description && <p style={{ color: color }}>{description}</p>}
				{link && <Link to={link}>Click here to view</Link>}
			</div>
		</div>
	);
}
