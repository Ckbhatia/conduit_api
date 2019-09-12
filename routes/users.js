const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const Auth = require('../auth/auth');

/* Post registeration user */
router.post('/', (req, res, next) => {
  Users.create(req.body, (err, user) => {
    if(err) return next(err);
    res.json(user);
  });
});

/* POST login user. */
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  Users.findOne({email}, async (err, user) => {
    if (err) return res.json({msg: err});
    if(!user) return res.status(400).json({status:'failed', message:'Invaild credentials'})
    if(!user.verifyPassword(password)) {
      return res.status(400).json({status:'failed', message:'Invaild password'});
    };
    let token = await Auth.genToken(user.id);
    res.status(200).json({status:'success',message:'user logged in',token});
  });
});

module.exports = router;