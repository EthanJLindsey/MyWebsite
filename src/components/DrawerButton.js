import '../css/DrawerButton.css';

export default function DrawerButton({ active, onClick }) {
	return (
		<div
			className={active ? 'drawer-button-active' : 'drawer-button'}
			onClick={() => onClick()}>
			<div className='bar1'></div>
			<div className='bar2'></div>
			<div className='bar3'></div>
		</div>
	);
}
