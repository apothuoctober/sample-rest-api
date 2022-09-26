const express = require('express');

const setupExpressMiddlewares = require('./express-middlewares');
const setupExpressRouter = require('./express-router');

const expressApp = express();

setupExpressMiddlewares(expressApp);
setupExpressRouter(expressApp);

module.exports = expressApp;
