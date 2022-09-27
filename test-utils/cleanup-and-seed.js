const { default: mongoose } = require('mongoose');

const cleanup = require('./cleanup');
const seed = require('./seed');
const connectMongoInMemory = require('../mongo/connect-mongo-in-memory');

async function cleanupAndSeed() {
  await connectMongoInMemory();
  await cleanup();
  await seed();
}

module.exports = cleanupAndSeed;
