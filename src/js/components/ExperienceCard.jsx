import { useRef } from 'react';
import '../../css/components/ExperienceCard.css';
import ExpandButton from '../primitives/ExpandButton';

export default function ExperienceCard({
	employer,
	title,
	startDate,
	endDate,
	description,
	expanded,
	onClick,
}) {
	const ref = useRef();
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'flex-start',
				width: '90%',
			}}>
			<div
				style={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
				}}>
				<div
					style={{
						marginTop: '10px',
						marginBottom: '10px',
					}}>
					{startDate}
				</div>
				<div
					style={{
						marginTop: '10px',
						// marginBottom: '10px',
					}}>
					{endDate}
				</div>
			</div>
			<div
				style={{
					backgroundColor: 'white',
					flex: '0 0 1px',
					height: '100%',
					marginLeft: '10px',
					marginRight: '10px',
				}}
			/>
			<div style={{
				marginTop: '10px'
			}}>
				<h4>{employer}</h4>
				<h5>{title}</h5>
				<div
					style={{ display: 'flex', marginTop: '10px', marginBottom: '10px' }}>
					<ExpandButton
						onClick={onClick}
						active={expanded}
					/>
					&nbsp; Show {expanded ? 'less' : 'more'}
				</div>
				<div
					style={{
						height: expanded ? ref.current.clientHeight : '0px',
						overflow: 'hidden',
						transition: '400ms',
					}}>
					<p ref={ref} style={{margin: 0}}>{description}</p>
				</div>
			</div>
		</div>
	);
}
