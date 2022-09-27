const TasksGroup = require('../../../models/tasks-group-model');

async function controller(req, res) {
  if (!req.authUser) return res.status(403).json('valid authorization is required');

  const userTasksGroup = await TasksGroup.findOne({
    _id: req.params.tasksGroupId,
    'members.userId': req.authUser._id,
  });

  if (!userTasksGroup) return res.status(404).json('tasks group not found');

  return res.status(200).json(userTasksGroup);
}

module.exports = controller;
