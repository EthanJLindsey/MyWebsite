import '../css/components/CloseButton.css';

export default function CloseButton({ onClick }) {
	return (
		<div
			className='close-button'
			onClick={onClick}>
			<div className='bar1' />
			<div className='bar2' />

		</div>
	);
}
