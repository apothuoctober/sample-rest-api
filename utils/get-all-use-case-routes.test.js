const useCases = require('../use-cases');
const getAllUseCaseRoutes = require('./get-all-use-case-routes');

it('return a list ob objects with controller, method and path', () => {
  const results = getAllUseCaseRoutes(useCases);
  expect(results).to.be('array');
});
