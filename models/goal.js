const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  targetWeight: { type: Number },
  workoutsPerWeek: { type: Number }
});

module.exports = mongoose.model('Goal', goalSchema);
