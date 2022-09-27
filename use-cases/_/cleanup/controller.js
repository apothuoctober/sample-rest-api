const Task = require('../../../models/task-model');
const TasksGroup = require('../../../models/tasks-group-model');
const User = require('../../../models/user-model');

async function controller(req, res) {
  try {
    await Task.deleteMany({});
    await TasksGroup.deleteMany({});
    await User.deleteMany({});
    return res.status(200).json('ok');
  } catch (e) {
    return res.status(500).json({ message: `Unhandled error: ${e.message}`, details: e.stackTrace });
  }
}

module.exports = controller;
