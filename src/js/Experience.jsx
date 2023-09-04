import { useState } from 'react';
import ExperienceCard from './components/ExperienceCard';

const Experience = ({ style }) => {
	const experience = [
		{
			employer: 'Iowa State University',
			title: 'Computer Science Tutor',
			startDate: 'Jan 2022',
			endDate: 'Dec 2022',
			description: (
				<>
					Qualifying to tutor a computer science course required getting a B or
					higher. I qualified to tutor for every available class, including data
					structures, advanced programming principles, and algorithms. The
					tutoring process involves rapidly switching between different clients,
					quickly identifying a wide variety of problems, and adapting to the
					clients' communication style. Usual days would have around 4 different
					students per hour, and new students would come in and leave as classes
					started and ended. Total, I served over 100 different clients on the
					entire range of undergraduate courses.
					<br />
					<br />
					Our clients mostly came to me specifically for help with advanced
					algorithms, using data structures, and debugging complex code. My
					clients most frequently came to me with C++ and Java. Total, I have
					helped to debug an estimated 500 errors with a success rate of 96%.
					There were over 10 other tutors employed, with around 5 working at any
					given time. It was common for tutors to ask each other for help or
					discuss different problems and their solutions.
				</>
			),
		},
		{
			employer: 'Iowa State University',
			title: 'Exam Proctor',
			startDate: 'Aug 2021',
			endDate: 'Dec 2021',
			description: (
				<>
					The Exam Accomodations Center provides tools to students to overcome
					the mental and physical barriers of taking exams and quizzes. My
					responsibilities included answering the phone, monitoring the security
					cameras, issuing out exams, managing files and records, and preparing
					assistive technology. During our down time, I stayed productive by
					cleaning and organizing the files, cabinents, and office supplies,
					totaling 30+ hours of additional work. By cleaning, I increased our
					storage space and stock of office supplies. I was also able to catch a
					critical scheduling error for our finals that would have otherwise
					been disasterous.
					<br />
					<br />
					A typical shift would have 10 to 15 students come in per hour, where I
					would sign them in, confirm their tools are set up, and assign their
					seating. Our maximum capacity could hold around 30 students at a time,
					which would be around midterms and finals.
				</>
			),
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
