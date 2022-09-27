const User = require('../../../models/user-model');

async function controller(req, res) {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json('user not found');
    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).json({ message: `Unhandled error: ${e.message}`, details: e.stackTrace });
  }
}

module.exports = controller;
