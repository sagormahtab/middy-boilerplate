const env = process.env.APP_ENV || 'local';
const appPort = process.env.APP_PORT;
const host = process.env.HOST || 'localhost';
const awsRegion = process.env.AWS_REGION;
const loggerName = process.env.LOGGER_NAME;
const logLevel = process.env.LOG_LEVEL;
const apiPath = process.env.API_PATH;
const bucketName = process.env.S3_PAYSLIP_BUCKET;
const creditCheckBucketName = process.env.CREDIT_REPORT_S3_BUCKET;
const emailQueueUrl = process.env.EMAIL_QUEUE_URL;

const fileConfiguration = {
  limits: {
    fileSize: 100 * 1024 * 1024
  },
  fileExtensions: ['.*'],
  includeEmptyFields: true
};

const templates = {
  repaymentInvoiceRemind: 'repaymentInvoiceRemind',
  b2cClaimsContactPending: 'b2cClaimsContactPending',
  b2cCreditCheckApprove: 'b2cCreditCheckApprove'
};

const constants = {
  appPort,
  env,
  host,
  awsRegion,
  loggerName,
  logLevel,
  apiPath,
  bucketName,
  creditCheckBucketName,
  fileConfiguration,
  emailQueueUrl,
  templates
};

module.exports = constants;
