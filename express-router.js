const useCases = require('./use-cases');
const getAllUseCaseRoutes = require('./utils/get-all-use-case-routes');

function setupExpressRouter(app) {
  const routes = getAllUseCaseRoutes(useCases);
  for (let routeIndex = 0; routeIndex < routes.length; routeIndex++) {
    const route = routes[routeIndex];
    app[route.method](route.path, route.controller);
  }
}

module.exports = setupExpressRouter;
