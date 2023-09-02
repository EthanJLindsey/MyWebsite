import '../../css/components/EducationCard.css';

export default function EducationCard({ location, degree, gpa, date }) {
	return (
		<div className='education-card'>
			<div className='date'>{date}</div>
			<div style={{
				backgroundColor: 'white',
				flex: '0 0 1px',
				height: '100%',
				marginLeft: '10px',
				marginRight: '10px'
			}}/>
			<div>
				<h4>{location}</h4>
				<h5>{degree}</h5>
				<p>{gpa} GPA</p>
			</div>
		</div>
	);
}
