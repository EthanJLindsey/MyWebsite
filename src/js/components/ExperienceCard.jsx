import '../../css/components/ExperienceCard.css';
import Separator from '../primitives/Separator';

export default function ExperienceCard({
	location,
	department,
	title,
	startDate,
	endDate,
  description
}) {
	return (
		<div className='experience-card'>
			<div className='date'>
				<div>{startDate}</div>
				<div>{endDate}</div>
			</div>
			<Separator />
			<div>
				<h4>{location} - {department}</h4>
				<h5>{title}</h5>
        <p>{description}</p>
			</div>
		</div>
	);
}
