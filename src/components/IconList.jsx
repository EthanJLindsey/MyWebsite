import '../css/components/IconList.css';

import {ReactComponent as EmailSVG} from '../svg/iconmonstr-paper-plane-1.svg';
import {ReactComponent as LinkedinSVG} from '../svg/iconmonstr-linkedin-3.svg';
import {ReactComponent as GithubSVG} from '../svg/iconmonstr-github-1.svg';

export default function IconList() {
	return (
		<ul className='contact-icons'>
			<li className='mail-icon'>
				<a href='mailto: ethan.james.lindsey@gmail.com'>
					<EmailSVG/>
				</a>
			</li>
			<li className='linkedin-icon'>
				<a
					href='https://www.linkedin.com/in/ejlindseycs/'
					rel='noopener noreferrer'
					target='_blank'>
					<LinkedinSVG/>
				</a>
			</li>
			<li className='github-icon'>
				<a
					href='https://github.com/EthanJLindsey'
					rel='noopener noreferrer'
					target='_blank'>
					<GithubSVG/>
				</a>
			</li>
		</ul>
	);
}
