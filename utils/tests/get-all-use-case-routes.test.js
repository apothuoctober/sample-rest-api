const { expect } = require('chai');

const useCases = require('../../use-cases');
const getAllUseCaseRoutes = require('../get-all-use-case-routes');

describe('Utils - Get all use case routes', function () {
  it('return a list ob objects with controller, method and path', function () {
    const results = getAllUseCaseRoutes(useCases);
    expect(results).to.be.an('array');
  });
});
