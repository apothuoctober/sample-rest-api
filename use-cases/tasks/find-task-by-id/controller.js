const Task = require('../../../models/task-model');

async function controller(req, res) {
  try {
    if (!req.authUser) return res.status(403).json('valid authorization is required');
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).json('task not found');
    if (!req.authTasksGroups.find((group) => group._id === task.groupId)) return res.status(403).json('be a member of task\'s group is required');
    return res.status(200).json(task);
  } catch (e) {
    return res.status(500).json({ message: `Unhandled error: ${e.message}`, details: e.stackTrace });
  }
}

module.exports = controller;
