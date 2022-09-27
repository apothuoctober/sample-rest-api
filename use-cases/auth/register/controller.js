const User = require('../../../models/user-model');

async function controller(req, res) {
  try {
    if (!req.body.email) return res.status(400).json('email is required in request body');
    if (!req.body.username) return res.status(400).json('username is required in request body');
    if (!req.body.password) return res.status(400).json('password is required in request body');
    const registeredUserByEmail = await User.findOne({ email: req.body.email });
    if (registeredUserByEmail !== null) return res.status(409).json('email already registered');
    const registeredUserByUsername = await User.findOne({ username: req.body.username });
    if (registeredUserByUsername !== null) return res.status(409).json('username already registered');
    const newUser = new User(req.body);
    const savedNewUser = await newUser.save();
    return res.status(201).json(savedNewUser);
  } catch (e) {
    return res.status(500).json({ message: `Unhandled error: ${e.message}`, details: e.stackTrace });
  }
}

module.exports = controller;
