const TasksGroup = require('../../../models/tasks-group-model');
const userRolesInTasksGroup = require('../../../constants/userRolesInTasksGroup');

async function controller(req, res) {
  if (!req.authUser) return res.status(403).json('valid authorization is required');

  if (!req.body.name) return res.status(400).json('name is required in request body');

  const newTasksGroup = new TasksGroup({
    ...req.body,
    members: [{ userId: req.authUser._id, role: userRolesInTasksGroup.admin }],
  });
  const savedNewTasksGroup = await newTasksGroup.save();

  return res.status(201).json(savedNewTasksGroup);
}

module.exports = controller;
