const baseUrl = require('./base-url');

/**
 *
 * @param {{method: string, path: string}} route
 * @returns {string} url
 */
function getRouteUrl(route) {
  return `${baseUrl}${route.path}`;
}

module.exports = getRouteUrl;
