const middy = require('@middy/core');
const cors = require('@middy/http-cors');
const httpErrorHandler = require('@middy/http-error-handler');
const { health } = require('./controllers/health');
const { apiPath } = require('./config/constants');

const routes = [
  {
    method: 'GET',
    path: `${apiPath}/health`,
    handler: middy(health).use(cors()).use(httpErrorHandler())
  }
];

module.exports = routes;
