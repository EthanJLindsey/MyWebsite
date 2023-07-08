import '../css/components/ExperienceCard.css';

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
			<div className='separator' />
			<div>
				<h3>{location} - {department}</h3>
				<h4>{title}</h4>
        <p>{description}</p>
			</div>
		</div>
	);
}
