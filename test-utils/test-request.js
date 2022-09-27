const { expect } = require('chai');
const axios = require('axios');

/**
 * Wrap axios promise and return response event if the status code is not 2xx
 * @param {{username: string, password: string}?} [basicAuth]
 * @param {string?} [jwt]
 * @param {'delete' | 'get' | 'patch' | 'post' | 'put'} method
 * @param {object?} [payload]
 * @param {string} url
 * @returns {Promise<import('axios').AxiosResponse>} response
 */
function testRequest({
  basicAuth,
  jwt,
  method,
  payload,
  url,
}) {
  return new Promise((resolve) => {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (basicAuth !== undefined && typeof basicAuth === 'object') {
      axiosConfig.auth = basicAuth;
    }

    if (jwt !== undefined && typeof jwt === 'string') {
      axiosConfig.headers.Authorization = `Bearer ${jwt}`;
    }

    let axiosBase;
    if (['delete', 'get'].includes(method)) {
      axiosBase = axios[method](url, axiosConfig);
    } else {
      axiosBase = axios[method](url, payload, axiosConfig);
    }

    axiosBase
      .then((axiosResponse) => {
        resolve(axiosResponse);
      })
      .catch((axiosError) => {
        if (axiosError.response) resolve(axiosError.response);
        else expect.fail(axiosError);
      });
  });
}

module.exports = testRequest;
