const flags = {
  enableDevelopmentEndpoints: JSON.parse(process.env.ENABLE_DEVELOPMENT_ENDPOINTS || 'false'),
};

module.exports = flags;
