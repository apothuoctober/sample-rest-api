const Task = require('../../../task-model');
const TasksGroup = require('../../../tasks-group-model');
const User = require('../../../user-model');

async function controller(req, res) {
  await Task.deleteMany({});
  await TasksGroup.deleteMany({});
  await User.deleteMany({});

  return res.status(200).json('ok');
}

module.exports = controller;
