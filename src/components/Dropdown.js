import '../css/Dropdown.css';

export default function Dropdown({ open, children }) {
	return (
		<div className={open ? 'dropdown-open' : 'dropdown'}>
			{children}
		</div>
	);
}
