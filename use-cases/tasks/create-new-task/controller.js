const Task = require('../../../task-model');

async function controller(req, res) {
  if (!req.body.groupId) return res.status(400).json('groupId is required in request body');
  if (!req.body.name) return res.status(400).json('name is required in request body');

  const newTask = new Task(req.body);
  const savedNewTask = await newTask.save();

  return res.status(201).json(savedNewTask);
}

module.exports = controller;
