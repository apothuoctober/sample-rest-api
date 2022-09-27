const { default: mongoose } = require('mongoose');

const TaskSchema = new mongoose.Schema({
  groupId: { type: String },
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
  completedBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
