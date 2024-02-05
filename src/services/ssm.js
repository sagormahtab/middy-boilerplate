const { SSMClient } = require('@aws-sdk/client-ssm');
const constants = require('../config/constants');

const ssmClient = new SSMClient({
  region: constants.awsRegion
});

module.exports = {
  ssm: ssmClient
};
