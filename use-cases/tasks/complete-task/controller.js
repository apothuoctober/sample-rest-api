const Task = require('../../../models/task-model');

async function controller(req, res) {
  const task = await Task.findById(req.params.taskId);

  if (!task) return res.status(404).json('task not found');

  task.completed = true;
  await task.save();

  const taskAfter = await Task.findById(req.params.taskId);

  return res.status(200).json(taskAfter);
}

module.exports = controller;
