import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../css/Projects.css';

export default function Projects() {
	const [expanded, setExpanded] = useState(-1);
	const [data, setData] = useState([]);

	async function getProjects() {
		const json = await fetch('/project-list.json');
		setData(await json.json());
	}

	useEffect(()=> {
		getProjects();
	}, []);

	return (
		<div className='project-list'>
			{data.map((item, index) => (
				<ProjectCard
					key={index}
					title={item.title}
					description={item.description}
					image={item.image}
					tags={item.tags}
					expanded={expanded === index}
					onClick={() => setExpanded(index === expanded ? -1 : index)}
				/>
			))}
		</div>
	);
}
