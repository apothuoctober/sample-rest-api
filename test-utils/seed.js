const crypto = require('crypto');

const User = require('../models/user-model');
const TasksGroup = require('../models/tasks-group-model');
const userRolesInTasksGroup = require('../constants/userRolesInTasksGroup');
const Task = require('../models/task-model');

async function seed() {
  const userOne = await User.create({
    email: `adrianpothuaud+${crypto.randomBytes(12).toString('utf8')}@gmail.com`,
    username: `adrianpothuaud+${crypto.randomBytes(12).toString('utf8')}`,
    password: 'password',
  });
  const userTwo = await User.create({
    email: `adrianpothuaud+${crypto.randomBytes(12).toString('utf8')}@gmail.com`,
    username: `adrianpothuaud+${crypto.randomBytes(12).toString('utf8')}`,
    password: 'password',
  });
  const userThree = await User.create({
    email: `adrianpothuaud+${crypto.randomBytes(12).toString('utf8')}@gmail.com`,
    username: `adrianpothuaud+${crypto.randomBytes(12).toString('utf8')}`,
    password: 'password',
  });

  const userOneToken = userOne.createJWT();
  const userTwoToken = userTwo.createJWT();
  const userThreeToken = userThree.createJWT();

  const tasksGroupOne = await TasksGroup.create({
    name: `tasks_group_+${crypto.randomBytes(12).toString('utf8')}`,
    members: [{
      userId: userOne._id.toString(),
      role: userRolesInTasksGroup.admin,
    }],
  });
  const tasksGroupTwo = await TasksGroup.create({
    name: `tasks_group_+${crypto.randomBytes(12).toString('utf8')}`,
    members: [{
      userId: userTwo._id.toString(),
      role: userRolesInTasksGroup.admin,
    }],
  });
  const tasksGroupThree = await TasksGroup.create({
    name: `tasks_group_+${crypto.randomBytes(12).toString('utf8')}`,
    members: [{
      userId: userThree._id.toString(),
      role: userRolesInTasksGroup.admin,
    }],
  });

  const taskOne = await Task.create({
    groupId: tasksGroupOne._id.toString(),
    name: `task_+${crypto.randomBytes(12).toString('utf8')}`,
  });
  const taskTwo = await Task.create({
    groupId: tasksGroupTwo._id.toString(),
    name: `task_+${crypto.randomBytes(12).toString('utf8')}`,
  });
  const taskThree = await Task.create({
    groupId: tasksGroupThree._id.toString(),
    name: `task_+${crypto.randomBytes(12).toString('utf8')}`,
  });

  return {
    userOne,
    userTwo,
    userThree,

    userOneToken,
    userTwoToken,
    userThreeToken,

    tasksGroupOne,
    tasksGroupTwo,
    tasksGroupThree,

    taskOne,
    taskTwo,
    taskThree,
  };
}

module.exports = seed;
