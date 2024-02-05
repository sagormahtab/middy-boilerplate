const { S3Client } = require('@aws-sdk/client-s3');
const constants = require('../config/constants');

const s3 = new S3Client({
  s3ForcePathStyle: true,
  region: constants.awsRegion
});

module.exports = {
  s3: s3
};
