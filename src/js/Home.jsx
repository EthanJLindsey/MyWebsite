import EducationCard from './components/EducationCard';
import ExperienceCard from './components/ExperienceCard';

import '../css/Home.css';
import { forwardRef } from 'react';

const Home = forwardRef(({...rest}, ref) => {
	const education = [
		{
			"location": "Iowa State University",
			"date": "Dec 2022",
			"degree": "Bachelor's of Science in Computer Science with minor in Music Technology",
			"gpa": "3.91"
		}
	];
	const experience = [
		{
			"location": "Iowa State University",
			"department": "Computer Science Help Room",
			"title": "Computer Science Tutor",
			"startDate": "Jan 2022",
			"endDate": "Dec 2022",
			"description": "I tutored students who were taking Computer Science courses. Our most common issues required a advanced understanding of data structures, algorithms, and debugging. Because of the stress that our clients sometimes felt, we also needed strong communication skills, listening skills, and conflict resolution skills. I covered courses that used a variety of technologies such as React, Node.js, C++, Python, and Java. Qualifying to be a tutor required strong grades and strong analytical skills to identify issues and solutions quickly after they are presented by our clients."
		},
		{
			"location": "Iowa State University",
			"department": "Exam Accomodations Center",
			"title": "Exam Proctor",
			"startDate": "Aug 2021",
			"endDate": "Dec 2021",
			"description": "The Exam Accomodations Center provides tools to students to overcome the mental and physical barriers of taking exams and quizzes. My responsibilities included answering the phone, monitoring the testing room, issuing out exams, and managing files and records. During our down time, I stayed productive by cleaning and organizing the files, cabinents, and office supplies, totaling 30+ hours of additional work. Through this cleaning I increased our storage by identifying and throwing away expired items, and I doubled our stock of office supplies by pooling together items that were previously hidden by the clutter. I was also able to catch a critical scheduling error for our finals that would have otherwise been disasterous."
		}
	];

	return (
		<section className='home-content' ref={ref}>
			{/* Title Card */}
			<div className='introduction' style={{
				height: '90vh',
			}}>
				<div>
					<h1>Hi, I'm Ethan Lindsey.</h1>
					<h2>Developer</h2>
				</div>
			</div>
			<h3>Education</h3>
			{education.map((e, i) => (
				<EducationCard
					key={i}
					location={e.location}
					degree={e.degree}
					gpa={e.gpa}
					date={e.date}
				/>
			))}
			<h3>Experience</h3>
			{experience.map((e, i) => (
				<ExperienceCard
					key={i}
					location={e.location}
					department={e.department}
					title={e.title}
					startDate={e.startDate}
					endDate={e.endDate}
					description={e.description}
				/>
			))}
		</section>
	);
});

export default Home;
