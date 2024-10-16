const express = require('express');
const Goal = require('../models/Goal');
const router = express.Router();

// Set a fitness goal
router.post('/', async (req, res) => {
  const { userId, targetWeight, workoutsPerWeek } = req.body;

  try {
    const goal = await Goal.create({ userId, targetWeight, workoutsPerWeek });
    res.status(201).json(goal);
  } catch (err) {
    res.status(400).json({ error: 'Failed to set goal' });
  }
});

// Get goals for a user
router.get('/:userId', async (req, res) => {
  try {
    const goal = await Goal.findOne({ userId: req.params.userId });
    res.json(goal);
  } catch (err) {
    res.status(400).json({ error: 'Failed to fetch goals' });
  }
});

module.exports = router;
