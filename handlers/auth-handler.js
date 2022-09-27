const decodeJWT = require('../utils/decode-jsonwebtoken');
const TasksGroup = require('../models/tasks-group-model');

async function authHandler(req, res, next) {
  if (req.headers.Authorization || req.headers.authorization) {
    req.isAuth = true;
    const authorization = req.headers.Authorization || req.headers.authorization;
    const parsedAuthorization = authorization.replace('Bearer ', '');
    if (parsedAuthorization) {
      req.isAuthToken = true;
      try {
        const decodedToken = decodeJWT(parsedAuthorization);
        req.decodedAuthToken = decodedToken;
        const {
          _id, email, username, password,
        } = decodedToken;
        req.isAuthTokenValid = true;
        req.authUser = {
          _id, email, username, password,
        };
        const userTasksGroups = await TasksGroup.find({
          'members.userId': req.authUser._id,
        });
        req.authTasksGroups = userTasksGroups.map((tasksGroup) => ({
          _id: tasksGroup._id.toString(),
          role: tasksGroup.members.find((member) => member.userId === _id).role,
        }));
      } catch (e) {
        req.isAuthTokenValid = false;
      }
    } else {
      req.isAuthToken = false;
    }
  } else {
    req.isAuth = false;
  }

  return next();
}

module.exports = authHandler;
