const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  targetWeight: { type: Number },
  workoutsPerWeek: { type: Number }
});

module.exports = mongoose.model('goal', goalSchema);
