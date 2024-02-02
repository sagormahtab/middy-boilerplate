const AWS = require("aws-sdk");
const variables = require("../config/constants");

AWS.config.update({
    region: variables.awsRegion
});

const s3 = new AWS.S3({
    s3ForcePathStyle: true
});

module.exports = {
    s3: s3
};