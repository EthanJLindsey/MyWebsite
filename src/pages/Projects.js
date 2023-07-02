import ProjectCard from '../components/ProjectCard';
import '../css/Projects.css';


const items = [
	{
		title: 'MyProject',
		description: 'this is my project',
        color: 'black',
		image:
			'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_16x9.jpg?w=1200',
	},
	{
		title: 'MyProject',
		description: 'this is my project',
        color: 'black',
		image:
			'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_16x9.jpg?w=1200',
	},
	{
		title: 'MyProject',
		description: 'this is my project;alksdfj;asldfja;s kdfj;lasjdaf;askjdf;alskdjf;adf lkjas;dkfjas;kdfj asd;fj;a sd;lkfaj ;d jaa;lkdj f;aldjf asldkfj sal;fj ;alsd fas;jld f;salfj as;l jsa;ldf kas;ldf jas;ldf jas;lf jsadlfas;d jfa;lsdfkj ;askfj ;las jf;lasd jf;as f;asjkl df;jasl kdf;sajldkf ;las fj;sda flkasj f;kasd ;flas;dkfaj;dlkfj a;sdkfj; asdkfjas; dkfjas ;dfjkas;d lfkja;l',
        color: 'black',
		image:
			'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_16x9.jpg?w=1200',
	},
	{
		title: 'MyProject',
		description: 'this is my project',
        color: 'black',
		image:
			'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_16x9.jpg?w=1200',
	},
	
];

export default function Projects() {
	return (
		<div className='project-list'>
			{items.map((item, index) => (
				<ProjectCard
                    key={index}
					title={item.title}
					description={item.description}
					image={item.image}
                    color={item.color}
				/>
			))}
		</div>
	);
}
