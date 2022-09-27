const flags = require('../../constants/flags');

module.exports = flags.enableDevelopmentEndpoints ? {
  cleanup: require('./cleanup'),
} : {};
