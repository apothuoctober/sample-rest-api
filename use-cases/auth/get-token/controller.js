const User = require('../../../user-model');

async function controller(req, res) {
  if (!(req.body.username || req.body.email)) return res.status(400).json('username or email is required in request body');

  let targetUser;
  if (req.body.username) {
    targetUser = await User.findOne({ username: req.body.username });
  } else if (req.body.email) {
    targetUser = await User.findOne({ email: req.body.email });
  }

  if (!targetUser) return res.status(404).json('user not found');

  if (!targetUser.comparePassword(req.body.password)) return res.status(400).json('bad password');

  return res.status(200).json(targetUser.createJWT());
}

module.exports = controller;
