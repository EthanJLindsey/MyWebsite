import '../css/Navbar.css'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/' className='title'>Ethan Lindsey</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/resume'>Resume</Link>
        </div>
    )
}