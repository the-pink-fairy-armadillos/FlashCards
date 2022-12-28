const db = require('../db/db.js');
const express = require('express');
const router = express.Router();

router.post('/cards', async (req, res) => {
  // sanitize post data
  const data = {
    user_id: null,
    title: null,
    front: null,
    back: null,
    difficulty: null,
    hints: null,
    scheduled: null,
  };
  for (let key in data) {
    const value = req.body[key];
    data[key] = value === undefined ? null : value;
  }
  console.log('creating data: ', data);
  const row = await db.createCard(data);
  res.status(200).json(row);
});

module.exports = router;
