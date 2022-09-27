const userRolesInTasksGroup = require('../../../constants/userRolesInTasksGroup');
const TasksGroup = require('../../../models/tasks-group-model');

async function controller(req, res) {
  try {
    if (!req.authUser) return res.status(403).json('valid authorization is required');
    if (!req.authTasksGroups.find((group) => group._id === req.params.tasksGroupId && group.role === userRolesInTasksGroup.admin)) return res.status(403).json('group role admin is required');
    if (!req.body.userIds) return res.status(400).json('userIds is required in request body');
    const tasksGroup = await TasksGroup.findById(req.params.tasksGroupId);
    for (let userIndex = 0; userIndex < req.body.userIds.length; userIndex++) {
      const userId = req.body.userIds[userIndex];
      const memberItem = tasksGroup.members.find((member) => member._id === userId);
      const memberItemIndex = tasksGroup.members.indexOf(memberItem);
      if (memberItemIndex > -1) tasksGroup.members.splice(memberItemIndex, 1);
    }
    await tasksGroup.save();
    const tasksGroupAfter = await TasksGroup.findById(req.params.tasksGroupId);
    return res.status(200).json(tasksGroupAfter);
  } catch (e) {
    return res.status(500).json({ message: `Unhandled error: ${e.message}`, details: e.stackTrace });
  }
}

module.exports = controller;
