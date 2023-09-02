import { useState } from 'react';
import ExperienceCard from './components/ExperienceCard';

const Experience = ({ style }) => {
	const experience = [
		{
			employer: 'Iowa State University',
			title: 'Computer Science Tutor',
			startDate: 'Jan 2022',
			endDate: 'Dec 2022',
			description:
				'I tutored students who were taking Computer Science courses. Our most common issues required a advanced understanding of data structures, algorithms, and debugging. Because of the stress that our clients sometimes felt, we also needed strong communication skills, listening skills, and conflict resolution skills. I covered courses that used a variety of technologies such as React, Node.js, C++, Python, and Java. Qualifying to be a tutor required strong grades and strong analytical skills to identify issues and solutions quickly after they are presented by our clients.',
		},
		{
			employer: 'Iowa State University',
			title: 'Exam Proctor',
			startDate: 'Aug 2021',
			endDate: 'Dec 2021',
			description:
				'The Exam Accomodations Center provides tools to students to overcome the mental and physical barriers of taking exams and quizzes. My responsibilities included answering the phone, monitoring the testing room, issuing out exams, and managing files and records. During our down time, I stayed productive by cleaning and organizing the files, cabinents, and office supplies, totaling 30+ hours of additional work. Through this cleaning I increased our storage by identifying and throwing away expired items, and I doubled our stock of office supplies by pooling together items that were previously hidden by the clutter. I was also able to catch a critical scheduling error for our finals that would have otherwise been disasterous.',
		},
	];
	const [expanded, setExpanded] = useState(-1);
	return (
		<div
			style={{
				...style,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<h3>Experience</h3>
			{experience.map((e, i) => (
				<ExperienceCard
					key={i}
					{...e}
					expanded={expanded === i}
					onClick={() => {
						setExpanded(expanded === i ? -1 : i);
					}}
				/>
			))}
		</div>
	);
};

export default Experience;
