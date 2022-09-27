const Task = require('../../../models/task-model');
const userRolesInTasksGroup = require('../../../constants/userRolesInTasksGroup');

async function controller(req, res) {
  try {
    if (!req.authUser) return res.status(403).json('valid authorization is required');
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).json('task not found');
    if (!req.authTasksGroups.find((group) => group._id === task.groupId && [userRolesInTasksGroup.admin, userRolesInTasksGroup.writer].includes(group.role))) return res.status(403).json('admin or writer role is required');
    if (task.completed) return res.status(409).json('task already completed');
    task.completed = true;
    task.completedBy = req.authUser._id;
    await task.save();
    const taskAfter = await Task.findById(req.params.taskId);
    return res.status(200).json(taskAfter);
  } catch (e) {
    return res.status(500).json({ message: `Unhandled error: ${e.message}`, details: e.stackTrace });
  }
}

module.exports = controller;
