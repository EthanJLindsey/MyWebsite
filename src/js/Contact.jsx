import { API, graphqlOperation } from 'aws-amplify';

import { createMessage } from '../graphql/mutations';
import $ from 'jquery';
import { forwardRef } from 'react';

async function f() {
	const message = $('#input-text').val();
	if (message === '') return;
	try {
		await API.graphql(
			graphqlOperation(createMessage, { input: { content: message } })
		);
	} catch (resp) {
		for (const err in resp.errors) console.log(err.message);
	}
	console.log(`Submitted message: "${message}"`);
	alert('Message successfully sent.');
	$('#input-text').val('');
}

const Contact = forwardRef(({ style, ...rest }, ref) => {
	return (
		<div
			ref={ref}
			style={{
				...style,
				display: 'flex',
				flexWrap: 'wrap',
				alignItems: 'center',
				width: '90%',
				paddingTop: '200px',
				paddingBottom: '200px',
			}}>
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
						width: 'calc(min(300px,100%))',
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
});

export default Contact;
