import '../../css/components/EducationCard.css';
import Separator from '../primitives/Separator';

export default function EducationCard({ location, degree, gpa, date }) {
	return (
		<div className='education-card'>
			<div className='date'>{date}</div>
			<Separator/>
			<div>
				<h4>{location}</h4>
				<h5>{degree}</h5>
				<p>{gpa} GPA</p>
			</div>
		</div>
	);
}
