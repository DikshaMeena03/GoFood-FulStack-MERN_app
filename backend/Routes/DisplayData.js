// routes/foodRoutes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.post('/data', async (req, res) => {
  try {
    const db = mongoose.connection.db;
    const food_items = await db.collection('food_items').find({}).toArray();
    const foodCategory = await db.collection('foodCategory').find({}).toArray();
    res.send({ food_items, foodCategory });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;