import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../css/Projects.css';

const items = [
	{
		title: 'AntHill',
		description:
			'Senior design project that connected users to collaborate on projects. Implemented' +
			' ~60% of the final code. Resolved a critical security flaw where the login process downloaded ' +
			'our entire user database to a malicious users device. ',
		tags: ['Flutter', 'Dart', 'Firebase', 'App', 'Website', 'Team Project'],
		image:
			'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_16x9.jpg?w=1200',
	},
	{
		title: 'MyProject',
		description:
			'jdf;alskdjf;adf ;d jaa;lkdj f;aldjf asldkfj sal;fj ;alsd fas;jld f;salfj as;l jsa;ldf kas;ldf jas;ldf jas;lf jsadlfas;d jfa;lsdfkj ;askfj ;las jf;lasd jf;as f;asjkl df;jasl kdf;sajldkf ;las fj;sda flkasj f;kasd ;flas;dkfaj;dlkfj a;sdkfj; asdkfjas; dkfjas ;dfjkas;d lfkja;l',
		image:
			'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_16x9.jpg?w=1200',
	},
	{
		title: 'MyProject',
		description:
			'l fj ;las jf;lasd jf;as f;asjkl df;jasl kdf;sajldkf ;las fj;sda flkasj f;kasd ;flas;dkfaj;dlkfj a;sdkfj; asdkfjas; dkfjas ;dfjkas;d lfkja;l',
		image:
			'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_16x9.jpg?w=1200',
	},
	{
		title: 'MyProject',
		description: 'this is my project',
		image:
			'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_16x9.jpg?w=1200',
	},
	{
		title: 'MyProject',
		description: 'this is my project',
		image:
			'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_16x9.jpg?w=1200',
	},
];

export default function Projects() {
	const [expanded, setExpanded] = useState(-1);
	return (
		<div className='project-list'>
			{items.map((item, index) => (
				<ProjectCard
					key={index}
					title={item.title}
					description={item.description}
					image={item.image}
					tags={item.tags}
					expanded={expanded === index}
					onClick={() => setExpanded(index === expanded? -1: index)}
				/>
			))}
		</div>
	);
}
