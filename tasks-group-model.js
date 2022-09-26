const { default: mongoose } = require('mongoose');

const userRolesInTasksGroup = require('./constants/userRolesInTasksGroup');

const TasksGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{
    userId: { type: mongoose.Types.ObjectId, ref: 'User' },
    role: {
      type: String,
      enum: Object.values(userRolesInTasksGroup),
      default: userRolesInTasksGroup.reader,
    },
  }],
  tasks: [{ type: mongoose.Types.ObjectId, ref: 'Task' }],
}, {
  timestamps: true,
});

const TasksGroup = mongoose.model('TasksGroup', TasksGroupSchema);

module.exports = TasksGroup;
