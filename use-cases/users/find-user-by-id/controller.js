const User = require('../../../models/user-model');

async function controller(req, res) {
  const user = await User.findById(req.params.userId);

  if (!user) return res.status(404).json('user not found');

  return res.status(200).json(user);
}

module.exports = controller;
