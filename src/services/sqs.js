const variables = require('../config/constants');
const AWS = require('aws-sdk');

AWS.config.update({ region: variables.awsRegion });

const SqsClient = new AWS.SQS({ apiVersion: '2012-11-05' });

exports.emailService = async (messageBody) => {
  console.log('messageBody', { messageBody, region: variables.awsRegion });
  const params = {
    MessageBody: JSON.stringify(messageBody),
    QueueUrl: variables.emailQueueUrl,
    MessageGroupId: 'send-email-lambda'
  };
  const sqsMessage = await SqsClient.sendMessage(params)
    .promise()
    .then((data) => {
      console.log('data', data);
      return data;
    })
    .catch((err) => {
      console.log('error', err);
      return null;
    });
  console.log('--sqsmessage--', sqsMessage);
  return true;
};
