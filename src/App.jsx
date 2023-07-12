import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import $ from 'jquery';

import Navbar from './pages/Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { useEffect, useState } from 'react';

export default function App() {
	const [x, setX] = useState('250px');
	const [y, setY] = useState('250px');
	const [time, setTime] = useState(1);
	const [size, setSize] = useState(2);

	useEffect(() => {
		const interval = setInterval(() => {
			setX(Math.random() * $('.App').width()-250);
			setY(Math.random() * $('.App').height()-250);
			setSize(Math.random() * 3 + 2);
			setTime(Math.random() * 4 + 4);
			console.log('set');
		}, time * 1000);
		return () => clearInterval(interval);
	});

	return (
		<div className='App'>
			<div id='glow-animation'>
				<div
					style={{
						left: x + 'px',
						top: y + 'px',
						transform: 'scale(' + size + ')',
						transition: time+'s'
					}}
				/>
			</div>
			<div>
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
		</div>
	);
}
