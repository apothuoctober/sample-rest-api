const { default: mongoose } = require('mongoose');

const connStr = process.env.MONGODB_CONN_STR || 'mongodb://localhost:27017/todos-api';

function connectMongo() {
  return new Promise((resolve, reject) => {
    // noinspection JSCheckFunctionSignatures
    mongoose.connect(connStr, { dbName: 'todos-api' }, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = connectMongo;
