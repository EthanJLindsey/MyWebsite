import './css/App.css';

import Navbar from './js/components/Navbar';
import Projects from './js/Projects';
import Contact from './js/Contact';
import Home from './js/Home';
import GlowWrapper from './js/components/GlowWrapper';
import MyFooter from './js/components/MyFooter';
import IconList from './js/components/IconList';
import { useRef } from 'react';

export default function App() {
	const refs = {
		home: useRef(null),
		projects: useRef(null),
		contact: useRef(null)
	};
	return (
		<div className='App'>
			<GlowWrapper
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'flex-start',
					minHeight: '100vh',
				}}>
				<Navbar refs={refs} style={{ width: '100%' }} />
				<IconList/>
				<Home ref={refs['home']}/>
				<Projects ref={refs['projects']}/>
				<Contact ref={refs['contact']}/>
				<MyFooter />
			</GlowWrapper>
		</div>
	);
}
