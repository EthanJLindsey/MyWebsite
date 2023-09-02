import './css/App.css';

import Navbar from './js/components/Navbar';
import Projects from './js/Projects';
import Contact from './js/Contact';
import Home from './js/Home';
import GlowWrapper from './js/components/GlowWrapper';
import MyFooter from './js/components/MyFooter';
import IconList from './js/components/IconList';
import { useRef } from 'react';
import Education from './js/Education';
import Experience from './js/Experience';
import { useWindowWidth } from './js/data/listeners';

export default function App() {
	const width = useWindowWidth();
	const refs = {
		home: useRef(null),
		projects: useRef(null),
		contact: useRef(null),
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
					maxWidth: '100vw',
					padding: '5px'
				}}>
				<Navbar refs={refs} />
				<IconList />
				<Home
					ref={refs['home']}
					style={{
						maxWidth: width > 700 ?'calc(100% - 100px)': '',
					}}
				/>
				<Education
					style={{
						maxWidth: width > 700 ?'calc(100% - 100px)': '',
						width: '100%'
					}}
					/>
				<Experience
					style={{
						maxWidth: width > 700 ?'calc(100% - 100px)': '',
						width: '100%'
					}}
				/>
				<Projects
					ref={refs['projects']}
					style={{
						maxWidth: width > 700 ?'calc(100% - 100px)': '',
					}}
				/>
				<Contact
					ref={refs['contact']}
					style={{
						maxWidth: width > 700 ?'calc(100% - 100px)': '',
					}}
				/>
				<MyFooter />
			</GlowWrapper>
		</div>
	);
}
