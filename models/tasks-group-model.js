const { default: mongoose } = require('mongoose');

const userRolesInTasksGroup = require('../constants/userRolesInTasksGroup');

const TasksGroupMemberSchema = new mongoose.Schema({
  userId: { type: String },
  role: {
    type: String,
    enum: Object.values(userRolesInTasksGroup),
    default: userRolesInTasksGroup.reader,
  },
}, {
  _id: false,
  timestamps: true,
});

const TasksGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: {
    type: [TasksGroupMemberSchema],
    default: [],
  },
  tasks: [{ type: mongoose.Types.ObjectId, ref: 'Task' }],
}, {
  timestamps: true,
});

const TasksGroup = mongoose.model('TasksGroup', TasksGroupSchema);

module.exports = TasksGroup;
