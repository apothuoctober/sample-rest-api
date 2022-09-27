const { default: mongoose } = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

function connectMongoInMemory() {
  return new Promise((resolve, reject) => {
    MongoMemoryServer.create().then((mongoServer) => {
      // noinspection JSCheckFunctionSignatures
      mongoose.connect(mongoServer.getUri(), { dbName: 'todos-api' }, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  });
}

module.exports = connectMongoInMemory;
