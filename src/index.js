require('dotenv').config();

const middy = require('@middy/core');
const httpRouterHandler = require('@middy/http-router');
const httpHeaderNormalizer = require('@middy/http-header-normalizer');
const multipartBodyParser = require('@middy/http-multipart-body-parser');
const { fileConfiguration } = require('./config/constants');
const { loggerMiddleware } = require('./middlewares/logMiddleware');

const routes = require('./routes');
const { initDB } = require('./config/db');

initDB();
exports.handler = middy()
  .use(loggerMiddleware())
  .use(httpHeaderNormalizer())
  .use(multipartBodyParser(fileConfiguration))
  .handler(httpRouterHandler(routes));
