const TasksGroup = require('../../../models/tasks-group-model');

async function controller(req, res) {
  try {
    if (!req.authUser) return res.status(403).json('valid authorization is required');
    const userTasksGroups = await TasksGroup.find({
      'members.userId': req.authUser._id,
    });
    return res.status(200).json(userTasksGroups);
  } catch (e) {
    return res.status(500).json({ message: `Unhandled error: ${e.message}`, details: e.stackTrace });
  }
}

module.exports = controller;
