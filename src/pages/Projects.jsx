import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import IconList from '../components/IconList';
import '../css/Projects.css';

export default function Projects() {
	const [expanded, setExpanded] = useState(-1);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('/projects.json').then((j) => j.json().then((d) => setData(d)));
	}, []);

	return (
		<div className='project-content'>
			<IconList />
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
		</div>
	);
}
