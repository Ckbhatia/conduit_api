const express = require("express");
const router = express.Router();
const Auth = require("../auth/auth");
const Users = require("../models/users");

// Check authorization first
router.use(Auth.verToken);

/* Get current user */
router.get("/", (req, res) => {
  const user = req.user;
  res.json({ user });
});

/* POST login user. */
router.put("/", (req, res) => {
  const data = req.body;
  const userId = req.user.id;
  Users.findOneAndUpdate(userId, data, { new: true }, (err, user) => {
    if (err) return res.json({ msg: err });
    user.password = data.password;
    user.save((err, updateduser) => {
      if (err) return res.json({ msg: err });
      res.json({ updateduser });
    });
  });
});

module.exports = router;
