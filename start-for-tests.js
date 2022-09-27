require('dotenv').config();

const connectMongo = require('./mongo/connect-mongo-in-memory');
const httpServer = require('./app/http-server');
const httpPort = require('./constants/httpPort');

connectMongo().then(() => {
  httpServer.listen(httpPort, () => {
    console.log('listening to', httpPort);
  });
});
