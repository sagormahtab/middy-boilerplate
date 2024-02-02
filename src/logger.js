const bunyan = require('bunyan');
const constants = require('./config/constants');

const loggerConfig = {
  name: constants.loggerName,
  streams: [
    {
      type: 'stream',
      stream: process.stdout,
      level: constants.logLevel
    }
  ]
};

const logger = bunyan.createLogger(loggerConfig);

module.exports = logger;
