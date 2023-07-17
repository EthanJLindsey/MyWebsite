import './css/App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './js/components/Navbar';
import Projects from './js/Projects';
import Contact from './js/Contact';
import Home from './js/Home';
import GlowWrapper from './js/components/GlowWrapper';

export default function App() {
	return (
		<div className='App'>
			<GlowWrapper style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'flex-start',
				minHeight: '100vh'
			}}>
				<Navbar style={{width: '100%'}}/>
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
			</GlowWrapper>
		</div>
	);
}
