import { API, graphqlOperation } from 'aws-amplify';

import { createMessage } from '../graphql/mutations';
import $ from 'jquery';

async function f() {
	console.log('submitting...');
	const message = $('#input-text').val();
	if (message === '') return;
	$('#input-text').val('');
	try {
		await API.graphql(
			graphqlOperation(createMessage, { input: { content: message } })
		);
	} catch (resp) {
		for (const err in resp.errors) console.log(err.message);
	}
	console.log(`Submitted message: "${message}"`);
	alert('Message successfully sent.');
}

export default function Contact() {
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'center',
				width: '90%',
			}}>
			<div
				style={{
					flex: '1 1 350px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<h2>Contact Me</h2>
				<ul
					className='bright-background' style={{
						padding: '5px',
						borderRadius: 'var(--border-radius)'
					}}>
					<li>
						Email&nbsp;
						<a
							href='mailto: ethan.james.lindsey@gmail.com'
							style={{ color: 'inherit' }}>
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
			<div
				style={{
					flex: '1 1 350px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<h3>Have questions or want to share comments with me?</h3>
				<p>
					You can email me or send me a message on LinkedIn! Alternatively, you
					can also sent me direct feedback using the textbox below.
				</p>
				<textarea
					id='input-text'
					rows='5'
					style={{
						width: '50%',
						height: '150px',
					}}
				/>
				<button
					onClick={f}
					className='submit-button'>
					Submit
				</button>
			</div>
		</div>
	);
}
