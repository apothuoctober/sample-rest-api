const userRolesInTasksGroup = require('../../../constants/userRolesInTasksGroup');
const TasksGroup = require('../../../models/tasks-group-model');

async function controller(req, res) {
  try {
    if (!req.authUser) return res.status(403).json('valid authorization is required');
    if (!req.authTasksGroups.find((group) => group._id === req.params.tasksGroupId && group.role === userRolesInTasksGroup.admin)) return res.status(403).json('group role admin is required');
    if (!req.body.invitations) return res.status(400).json('invitations is required in request body');
    const { invitations } = req.body;
    for (let invitationIndex = 0; invitationIndex < invitations.length; invitationIndex++) {
      const invitation = invitations[invitationIndex];
      if (!invitation.userId) return res.status(400).json(`userId is required in request body at invitations[${invitationIndex}]`);
      if (!invitation.role) return res.status(400).json(`role is required in request body at invitations[${invitationIndex}]`);
      if (!Object.values(userRolesInTasksGroup).includes(invitation.role)) return res.status(400).json(`role is invalid in request body at invitations[${invitationIndex}]`);
    }
    const tasksGroup = await TasksGroup.findById(req.params.tasksGroupId);
    for (let invitationIndex = 0; invitationIndex < invitations.length; invitationIndex++) {
      const invitation = invitations[invitationIndex];
      tasksGroup.members.push(invitation);
    }
    await tasksGroup.save();
    const tasksGroupAfter = await TasksGroup.findById(req.params.tasksGroupId);
    return res.status(200).json(tasksGroupAfter);
  } catch (e) {
    return res.status(500).json({ message: `Unhandled error: ${e.message}`, details: e.stackTrace });
  }
}

module.exports = controller;
