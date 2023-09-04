import { /*useEffect,*/ forwardRef, useState } from 'react';
import ProjectCard from './components/ProjectCard';
import '../css/Projects.css';

const Projects = forwardRef(({ style, ...rest }, ref) => {
	const [expanded, setExpanded] = useState(-1);

	const data = [
		{
			title: 'AntHill',
			description: (
				<>
					AntHill was my senior design team project that we developed the fall
					semester of 2022. The concept was an app similar to Fiverr or LinkedIn
					where individuals could build their experience by working
					collaboratively with teams on small scale projects. We followed Agile
					methodology to complete our objectives in sprints. We conducted team
					meetings twice a week, client meetings every two weeks, and tech demos
					for our professor every five weeks. We used Jira to schedule our
					sprints and divide our responsibilities, and Git was used for version
					control.
					<br />
					<br />
					We used Flutter for the front-end and Firebase for the back-end. I
					worked heavily on the core features of the app, including users,
					projects, the dashboard, and sign-in. My personal contributions were
					over 60% of the final code. I also used my experience to do code
					review on all commits to look for any major problems. For example, the
					sign-in page originally would download all user data and iterate
					through it to find a username and password match, which negatively
					impacted performance and security. To fix this, I edited the code to
					send a query to Firebase for the single user that matches if one
					exists.
					<br />
					<br />
					Note that our Firebase is no longer running after our graduation date.
				</>
			),
			backgroundImage: '/images/anthill/anthill-code.png',
			images: [
				'images/anthill/anthill-blue-2048.png',
				'images/anthill/anthill-profile-edit.png',
				'images/anthill/anthill-profile.png',
				'images/anthill/anthill-dashboard.png',
			],
			tags: ['Flutter', 'Firebase', 'Dart', 'App', 'Agile', 'Team Project'],
		},
		{
			title: 'Portfolio Website',
			description:
				'I first created this website in early July of 2023. The objective of this website is to show how I can develop and deploy using technologies that I had little previous experience with. It is built using React and hosted on AWS amplify. The glowing sphere in the background is given randomized values for size, position, and speed using Javascript. I use AWS DynamoDB on the Amplify Console to store the messages sent using the text area on the Contact page. AWS Lambda is set with a trigger which will send me an email using SES whenever a message is submitted to the database. Media listeners are used to dynamically change the position and display of the webpage to make navigation smoother on mobile. All the previously mentioned functions were deployed just a couple weeks after starting the project.',
			backgroundImage: '/images/my-website/website-home.png',
			tags: [
				'React',
				'AWS',
				'Javascript',
				'Node',
				'Personal Project',
				'Website',
			],
			links: [
				{
					name: 'GitHub',
					link: 'https://github.com/EthanJLindsey/Portfolio-Website',
				},
			],
		},
		{
			title: 'Web Adventure',
			description: (
				<>
					Web adventure was a personal project intended to give me more
					experience with Spring Boot and JavaScript during the summer of 2022.
					Users can create accounts and login using a MySQL database and Spring
					Security. I made a custom animation handling API to decouple the
					animation from the objects, which decreased development time. The
					character is animated, can move in the surrounding area, can swing his
					sword, can jump, and can sprint. I used free assets from itch.io and
					used a temporary logo during development.
				</>
			),
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
	];

	return (
		<div
			className='project-content'
			ref={ref}
			style={{ ...style }}>
			<h2
				style={{
					paddingTop: '50px',
					paddingBottom: '20px',
				}}>
				Projects
			</h2>
			<div
				className='project-list'
				style={{
					width: '100%',
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
