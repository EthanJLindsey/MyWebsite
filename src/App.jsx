import './css/App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './pages/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import IconList from './components/IconList';

export default function App() {
	return (
		<div className='App'>
			<Navbar style={{ flex: 0 }} />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/projects'
					element={<Projects />}
				/>
				<Route
					path='/contact'
					element={<Contact />}
				/>
			</Routes>
		</div>
	);
}
