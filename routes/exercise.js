const express = require('express');
const Exercise = require('../models/exercise');
const router = express.Router();

// Add an exercise log
router.post('/', async (req, res) => {
  const { userId, type, duration } = req.body;

  try {
    const exercise = await Exercise.create({ userId, type, duration });
    res.status(201).json(exercise);
  } catch (err) {
    res.status(400).json({ error: 'Failed to log exercise' });
  }
});

// Get all exercises for a user
router.get('/:userId', async (req, res) => {
  try {
    const exercises = await exercise.find({ userId: req.params.userId });
    res.json(exercises);
  } catch (err) {
    res.status(400).json({ error: 'Failed to fetch exercises' });
  }
});

module.exports = router;
