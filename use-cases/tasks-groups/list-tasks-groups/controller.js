const TasksGroup = require('../../../models/tasks-group-model');

async function controller(req, res) {
  if (!req.authUser) return res.status(403).json('valid authorization is required');

  const userTasksGroups = await TasksGroup.find({
    'members.userId': req.authUser._id,
  });

  return res.status(200).json(userTasksGroups);
}

module.exports = controller;
