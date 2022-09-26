const TasksGroup = require('../../../tasks-group-model');
const userRolesInTasksGroup = require('../../../constants/userRolesInTasksGroup');

async function controller(req, res) {
  if (!req.body.ownerId) return res.status(400).json('ownerId is required in request body');
  if (!req.body.name) return res.status(400).json('name is required in request body');

  const newTasksGroup = new TasksGroup({
    ...req.body,
    members: [{ userId: req.body.ownerId, role: userRolesInTasksGroup.admin }],
  });
  const savedNewTasksGroup = await newTasksGroup.save();

  return res.status(201).json(savedNewTasksGroup);
}

module.exports = controller;
