import '../../css/components/EducationCard.css';
import Separator from '../primitives/Separator';

export default function EducationCard({ location, degree, gpa, date }) {
	return (
		<div className='education-card'>
			<div className='date'>{date}</div>
			<Separator/>
			<div>
				<h3>{location}</h3>
				<h4>{degree}</h4>
				<h4>{gpa} GPA</h4>
			</div>
		</div>
	);
}
