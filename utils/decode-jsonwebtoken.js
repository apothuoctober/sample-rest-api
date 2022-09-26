const jsonwebtoken = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'secret';

function decodeJWT(token) {
  jsonwebtoken.verify(token, jwtSecret);
  return jsonwebtoken.decode(token, jwtSecret);
}

module.exports = decodeJWT;
