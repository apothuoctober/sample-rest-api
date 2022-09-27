const User = require('../../../models/user-model');

async function controller(req, res) {
  const users = await User.find({});
  return res.status(200).json(users);
}

module.exports = controller;
