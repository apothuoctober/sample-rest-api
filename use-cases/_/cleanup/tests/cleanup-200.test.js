const { expect } = require('chai');

const admin = require('../../../../constants/admin');
const getRouteUrl = require('../../../../test-utils/get-route-url');
const route = require('../route');
const testRequest = require('../../../../test-utils/test-request');

describe('Use case - Cleanup - Nominal', function () {
  it('* must respond with 200 when auth is basic auth and valid admin credentials and delete all documents in database', async function () {
    const response = await testRequest({
      basicAuth: admin,
      method: route.method,
      url: getRouteUrl(route),
    });
    expect(response.status).to.eql(200);
  });
});
