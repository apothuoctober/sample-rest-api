require('dotenv').config();

const connectMongo = require('./mongo/connect-mongo');
const httpServer = require('./app/http-server');
const httpPort = require('./constants/httpPort');

connectMongo().then(() => {
  httpServer.listen(httpPort, () => {
    console.log('listening to', httpPort);
  });
});
