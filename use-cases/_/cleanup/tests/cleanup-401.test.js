const { expect } = require('chai');

const route = require('../route');
const testRequest = require('../../../../test-utils/test-request');
const getRouteUrl = require('../../../../test-utils/get-route-url');

describe('Use case - Cleanup - Errors', function () {
  it('* must respond with 401 when auth is not provided', function (done) {
    testRequest({
      method: route.method,
      url: getRouteUrl(route),
    }).then((response) => {
      expect(response.status).to.eql(401);
      done();
    });
  });
  it('* must respond with 401 when auth is provided but invalid credentials', function (done) {
    testRequest({
      basicAuth: { username: 'foo', password: 'bar' },
      method: route.method,
      url: getRouteUrl(route),
    }).then((response) => {
      expect(response.status).to.eql(401);
      done();
    });
  });
});
