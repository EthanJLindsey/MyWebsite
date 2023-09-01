import EducationCard from './components/EducationCard';

const Education = ({ style }) => {
	const education = [
		{
			location: 'Iowa State University',
			date: 'Dec 2022',
			degree:
				"Bachelor's of Science in Computer Science; Minor in Music Technology",
			gpa: '3.91',
		},
	];
	return (
		<div
			style={{
				...style,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
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
		</div>
	);
};

export default Education;
