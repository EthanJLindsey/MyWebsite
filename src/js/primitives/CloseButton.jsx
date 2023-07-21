import '../../css/components/CloseButton.css';

export default function CloseButton({ onClick, ...rest }) {
	return (
		<div
			className='close-button'
			onClick={onClick}
			{...rest}>
			<div className='bar1' />
			<div className='bar2' />

		</div>
	);
}
