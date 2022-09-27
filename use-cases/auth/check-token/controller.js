const decodeJWT = require('../../../utils/decode-jsonwebtoken');

async function controller(req, res) {
  try {
    if (!req.body.token) return res.status(400).json('token is required in request body');
    decodeJWT(req.body.token);
    return res.status(200).json('valid');
  } catch (e) {
    return res.status(500).json({ message: `Unhandled error: ${e.message}`, details: e.stackTrace });
  }
}

module.exports = controller;
