import '../css/Home.css';
import { forwardRef } from 'react';

const Home = forwardRef(({...rest}, ref) => {
	return (
		<div className='home-content' ref={ref}>
			{/* Title Card */}
			<div className='introduction' style={{
				height: '90vh',
			}}>
				<div>
					<h1>Hi, I'm Ethan Lindsey.</h1>
					<h2>Developer</h2>
				</div>
			</div>
		</div>
	);
});

export default Home;
