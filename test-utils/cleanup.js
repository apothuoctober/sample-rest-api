const Task = require('../models/task-model');
const TasksGroup = require('../models/tasks-group-model');
const User = require('../models/user-model');

async function cleanup() {
  await Task.deleteMany({});
  await TasksGroup.deleteMany({});
  await User.deleteMany({});
}

module.exports = cleanup;
