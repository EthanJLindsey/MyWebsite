import { useState, useEffect } from 'react';

import EducationCard from '../components/EducationCard';
import ExperienceCard from '../components/ExperienceCard';

import '../css/Home.css';

export default function Home() {
	const [education, setEd] = useState([]);
	const [experience, setEx] = useState([]);

	useEffect(() => {
		fetch('/education.json').then((j) => j.json().then((d) => setEd(d)));
	}, []);

	useEffect(() => {
		fetch('/experience.json').then((j) => j.json().then((d) => setEx(d)));
	}, []);

	return (
		<section className='home-content'>
			{/* Title Card */}
			<div className='introduction'>
				<div className='intro-text'>
					<h1>Hi, I'm Ethan Lindsey.</h1>
					<h2>Developer</h2>
					<h2>Tutor</h2>
				</div>
				<div>hello</div>
			</div>
			<h2>Education</h2>
			{education.map((e, i) => (
				<EducationCard
					key={i}
					location={e.location}
					degree={e.degree}
					gpa={e.gpa}
					date={e.date}
				/>
			))}
			<h2>Experience</h2>
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
}
