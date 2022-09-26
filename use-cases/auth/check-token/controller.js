const decodeJWT = require('../../../utils/decode-jsonwebtoken');

async function controller(req, res) {
  if (!req.body.token) return res.status(400).json('token is required in request body');
  decodeJWT(req.body.token);
  return res.status(200).json('valid');
}

module.exports = controller;
