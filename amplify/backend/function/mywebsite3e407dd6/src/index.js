/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
const ses = new SESClient({ region: 'us-east-2' });

export const handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);
	for (const record of event.Records) {
		console.log(record.eventID);
		console.log(record.eventName);
		console.log('DynamoDB Record: %j', record.dynamodb);
		// const command = new SendEmailCommand({
		//   Destination: {
		//     ToAddresses: ["ethan.james.lindsey@gmail.com"],
		//   },
		//   Message: {
		//     Body: {
		//       Text: { Data: `${record.dynamodb.NewImage.content.S}` },
		//     },

		//     Subject: { Data: "Message from Portfolio Website" },
		//   },
		//   Source: "noreply@mail.ethandev.net",
		// });

		// try {
		//   let response = await ses.send(command);
		//   // process data.
		//   return response;
		// } catch (error) {
		//   // error handling.
		// } finally {
		//   // finally.
		// }
	}
	return Promise.resolve('Successfully processed DynamoDB record');
};
