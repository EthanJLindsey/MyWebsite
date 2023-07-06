import '../css/components/Dropdown.css';

export default function Dropdown({active, open, children }) {
	return active? (
		<div className={open ? 'dropdown-open' : 'dropdown'}>
			{children}
		</div>
	): children;
}
