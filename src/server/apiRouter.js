const db = require('../db/db.js');
const express = require('express');
const router = express.Router();

router.post('/db', async (req, res) => {
  const rn = await db.getCards();
  res.status(200).send(rn);
});

router.update('/cards/:id', async (req, res, next) => {
  try {
    const { user_id, title, front, back, difficulty, hints, scheduled } = req.body; 

  } catch(err) {
    next({
      log: 'error updating the card', 
      status: 500, 
      message: { err: err }, 
    }); 
  }
})

router.delete('/cards/:id', async (req, res, next) => {
  try {
      // const {user_id} = req.body
      // let query = 'DELETE FROM cards WHERE '
  } catch(err) {
    next({
      log: 'error deleting the card', 
      status: 500, 
      message: { err: err }, 
    }); 
  }
})

module.exports = router;
