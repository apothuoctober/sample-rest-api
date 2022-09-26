const express = require('express');

function setupExpressMiddlewares(app) {
  app.use(express.json());
  app.use('*', (req, res, next) => {
    console.log('new request', req.method, req.baseUrl);
    return next();
  });
}

module.exports = setupExpressMiddlewares;
