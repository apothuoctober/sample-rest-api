const Task = require('../../../models/task-model');
const userRolesInTasksGroup = require('../../../constants/userRolesInTasksGroup');
const TasksGroup = require('../../../models/tasks-group-model');

async function controller(req, res) {
  if (!req.authUser) return res.status(403).json('valid authorization is required');

  if (!req.body.groupId) return res.status(400).json('groupId is required in request body');
  if (!req.body.name) return res.status(400).json('name is required in request body');

  if (!req.authTasksGroups.find((group) => group._id === req.body.groupId && [userRolesInTasksGroup.admin, userRolesInTasksGroup.writer].includes(group.role))) return res.status(403).json('group role admin or writer is required');

  const newTask = new Task(req.body);
  const savedNewTask = await newTask.save();

  const tasksGroup = await TasksGroup.findById(req.body.groupId);
  tasksGroup.tasks.push(savedNewTask._id.toString());
  await tasksGroup.save();

  return res.status(201).json(savedNewTask);
}

module.exports = controller;
