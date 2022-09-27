const { expect } = require('chai');

const route = require('../route');
const testRequest = require('../../../../test-utils/test-request');
const admin = require('../../../../constants/admin');
const getRouteUrl = require('../../../../test-utils/get-route-url');

describe('Use case - Cleanup - Nominal', function () {
  it('* must respond with 200 when auth is basic auth and valid admin credentials', function (done) {
    testRequest({
      basicAuth: admin,
      method: route.method,
      url: getRouteUrl(route),
    }).then((response) => {
      expect(response.status).to.eql(200);
      done();
    });
  });
});
