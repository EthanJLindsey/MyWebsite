import { /*useEffect,*/ forwardRef, useState } from 'react';
import ProjectCard from './components/ProjectCard';
import '../css/Projects.css';

const Projects = forwardRef(({ style, ...rest }, ref) => {
	const [expanded, setExpanded] = useState(-1);

	const data = [
		{
			title: 'AntHill',
			description:
				'AntHill was my senior design team project of fall 2022 where we designed a social media application that connected users to collaborate on projects. I personally implemented ~60% of the final code. I resolved a critical security flaw where the login process downloaded , our entire user database to a malicious users device. We used Firebase, which is a cloud computing platform similar to AWS, where we could store our data and host our website. Note that our Firebase is no longer running after our graduation date.',
			backgroundImage: '/images/anthill/anthill-code.png',
			images: [
				'images/anthill/anthill-blue-2048.png',
				'images/anthill/anthill-profile-edit.png',
				'images/anthill/anthill-profile.png',
				'images/anthill/anthill-dashboard.png'
			],
			tags: [
				'Flutter',
				'Dart',
				'Firebase',
				'App',
				'Website',
				'Agile',
				'Team Project',
			],
		},
		{
			title: 'Web Adventure',
			description:
				'Web adventure was a personal project intended to give me more experience with Spring Boot and JavaScript during the summer of 2022. Users can create accounts and login using a MySQL database and Spring Security. I made a custom animation handling API to decouple the animation from the objects, which decreased development time. The character is animated, can move in the surrounding area, can swing his sword, can jump, and can sprint. I used free assets from itch.io and used a temporary logo during development.',
			backgroundImage: '/images/web-adventure/web-adventure-example.png',
			tags: [
				'Kotlin',
				'Javascript',
				'Spring Boot',
				'MySQL',
				'Website',
				'Personal Project',
			],
			links: [
				{
					name: 'GitHub',
					link: 'https://github.com/EthanJLindsey/Web-Adventure',
				},
			],
		},
		{
			title: 'ethandev.net',
			description:
				'I first created this website in early July of 2023. The objective of this website as a whole is to show how I can develop and deploy using technologies that I had little previous experience with. It is built using React and hosted on AWS amplify. The glowing sphere in the background is given randomized values for size, position, and speed using Javascript. I use AWS DynamoDB on the Amplify Console to store the messages sent using the text area on the Contact page. Media listeners are used to dynamically change the position and display of the webpage to make navigation smoother on mobile. All the previously mentioned functions were deployed just a couple weeks after starting the project.',
			backgroundImage: '/images/my-website/website-home.png',
			tags: ['React', 'AWS', 'Javascript', 'Personal Project', 'Website'],
			links: [
				{
					name: 'GitHub',
					link: 'https://github.com/EthanJLindsey/Portfolio-Website',
				},
			],
		},
	];

	return (
		<div
			className='project-content'
			ref={ref}
			style={{...style}}
			>
			<h2 style={{
				paddingTop: '50px',
				paddingBottom: '20px'
			}}>Projects</h2>
			<div className='project-list' style={{
				width: '100%'
			}}>
				{data.map((item, index) => (
					<ProjectCard
						key={index}
						{...item}
						expanded={expanded === index}
						onClick={() => setExpanded(index === expanded ? -1 : index)}
					/>
				))}
			</div>
		</div>
	);
});

export default Projects;
