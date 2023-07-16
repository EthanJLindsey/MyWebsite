import '../../css/components/EducationCard.css';

export default function EducationCard({ location, degree, gpa, date }) {
	return (
		<div className='education-card'>
			<div className='date'>{date}</div>
			<div className='separator'/>
			<div>
				<h3>{location}</h3>
				<h4>{degree}</h4>
				<h4>{gpa} GPA</h4>
			</div>
		</div>
	);
}
