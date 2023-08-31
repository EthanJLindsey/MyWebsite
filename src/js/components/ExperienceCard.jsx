import { useRef, useState } from 'react';
import '../../css/components/ExperienceCard.css';
import Separator from '../primitives/Separator';
import ExpandButton from '../primitives/ExpandButton';

export default function ExperienceCard({
	location,
	department,
	title,
	startDate,
	endDate,
	description,
}) {
	const [expand, setExpand] = useState(false);
	const ref = useRef();
	return (
		<div className='experience-card'>
			<div className='date'>
				<div>{startDate}</div>
				<div>{endDate}</div>
			</div>
			<Separator />
			<div>
				<h4>
					{location} - {department}
				</h4>
				<h5>{title}</h5>
				<div style={{display:'flex'}}>
					<ExpandButton
						onClick={() => setExpand(!expand)}
						active={expand}
					/>
					&nbsp;Show {expand? 'less': 'more'}
				</div>
				<div
					style={{
						height: expand ? ref.current.clientHeight : '0px',
						overflow: 'hidden',
						transition: '400ms'
					}}>
					<p ref={ref}>{description}</p>
				</div>
			</div>
		</div>
	);
}
