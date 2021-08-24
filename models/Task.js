const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  crontext: {
    type: String,
    required: [true, 'Please add cron expresion']
  },
  url: {
    type: String,
    required: [true, 'Please add a url']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', TaskSchema);