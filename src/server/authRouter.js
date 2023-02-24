const express = require('express');
const router = express.Router();
require('./auth.js');
const passport = require('passport');

// const users = require('../db/users.js');

router.get('/user', (req, res) => {
  // req.user is the parsed jwt containing user information
  // console.log('L8 user info in authRouter.js', req.user);
  res.status(200).json(req.user ? req.user : null);
});

router.get('/google', passport.authenticate('google', { scope: ['email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/failure',
  }),
  (req, res) => {
    // success
    return res.redirect('/library');
  }
);

router.get('/failure', (request, response) => {
  response.send('authentication failed...');
});
// TODO: add comments about login, logout being set by passport
// https://www.passportjs.org/concepts/authentication/login/
router.get('/logout', (request, response) => {
  request.logout(() => {
    // https://stackoverflow.com/questions/72336177/error-reqlogout-requires-a-callback-function
    // console.log('logging out');
    request.session.destroy(); // destroy cookie?
    response.redirect('/');
  });
});

module.exports = router;
