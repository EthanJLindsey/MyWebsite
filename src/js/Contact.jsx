import { API, graphqlOperation } from 'aws-amplify';
import '../css/Contact.css';

import {createMessage} from '../graphql/mutations';
import $ from 'jquery';

async function f() {
	console.log('submitting...');
	const message = $('#input-text').val()
	if (message === '') return;
	$('#input-text').val('');
	try{
		await API.graphql(graphqlOperation(createMessage, {input: {content: message}}));
	} catch (resp) {
		for (const err in resp.errors)console.log(err.message);
	}
	console.log(`Submitted message: "${message}"`);
	alert('Message successfully sent.');
}

export default function Contact() {
	return (
		<div className='contact'>
			<div className='link-div'>
				<h1>Contact Me</h1>
				<ul>
					<li>
						Email&nbsp;
						<a href='mailto: ethan.james.lindsey@gmail.com'>
							ethan.james.lindsey@gmail.com
						</a>
					</li>
					<li>
						LinkedIn&nbsp;
						<a
							href='https://www.linkedin.com/in/ejlindseycs/'
							rel='noopener noreferrer'
							target='_blank'>
							ejlindseycs
						</a>
					</li>
					<li>
						GitHub&nbsp;
						<a
							href='https://github.com/EthanJLindsey'
							rel='noopener noreferrer'
							target='_blank'>
							EthanJLindsey
						</a>
					</li>
				</ul>
			</div>
			<div className='feedback-div'>
				<h1>Have questions or want to share comments with me?</h1>
				<p>
					You can email me or send me a message on LinkedIn! Alternatively, you
					can also sent me direct feedback using the textbox below.
				</p>
				<textarea id='input-text' rows='5'></textarea>
				<button
					onClick={f}
					className='submit-button'>
					Submit
				</button>
			</div>
		</div>
	);
}
