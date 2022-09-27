const Task = require('../../../models/task-model');
const TasksGroup = require('../../../models/tasks-group-model');
const User = require('../../../models/user-model');

async function controller(req, res) {
  await Task.deleteMany({});
  await TasksGroup.deleteMany({});
  await User.deleteMany({});

  return res.status(200).json('ok');
}

module.exports = controller;
