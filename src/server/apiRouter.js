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
    const data = { user_id, title, front, back, difficulty, hints, scheduled }; 
    
    const row = await db.updateCard(data); 
    res.status(200).json(row); 
    console.log('updated sucessfully') 
    return next(); 

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

    const _id = req.params.id; 
    const row = await db.deleteCard(_id); 
    if(row === undefined) throw `no card with id=${_id} was found`; 
    res.status(200).json(row);  
    console.log('deleted sucessfully') 
    return next(); 

  } catch(err) {
    next({
      log: 'error deleting the card', 
      status: 500, 
      message: { err: err }, 
    }); 
  }
})

module.exports = router;
