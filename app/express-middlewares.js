const express = require('express');
const basicAuth = require('express-basic-auth');

const authHandler = require('../handlers/auth-handler');
const admin = require('../constants/admin');

function setupExpressMiddlewares(app) {
  app.use(express.json());
  app.use('*', (req, res, next) => {
    console.log('new request', req.method, req.baseUrl);
    return next();
  });
  app.use('*', authHandler);
  app.use(['/_', '/users'], basicAuth({
    users: { [admin.username]: admin.password },
  }));
}

module.exports = setupExpressMiddlewares;
