require('dotenv').config();

const connectMongo = require('./connect-mongo');
const httpServer = require('./http-server');

const httpPort = process.env.PORT || '8080';

connectMongo().then(() => {
  httpServer.listen(httpPort, () => {
    console.log('listening to', httpPort);
  });
});
