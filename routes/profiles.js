const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const Auth = require("../auth/auth");

/* Handle profiles routes */

// Get username
router.get("/:username", (req, res) => {
  const username = req.params.username;
  Users.findOne(
    { username },
    "-_id bio image following username",
    (err, profile) => {
      if (err) return res.json({ msg: err });
      if (!profile)
        return res.status(404).json({ message: "User doesn't exist" });
      res.json({ profile });
    }
  );
});

// Check authorization first
router.use(Auth.verToken);

// Get username follow
router.get("/:username/follow", (req, res) => {
  // TODO
  // Follow user
  // Authentication required, returns a Profile
  // No additional parameters required
});

// Delete username follow
router.delete("/:username/follow", (req, res, next) => {
  // TODO
  // Unfollow user
  // Authentication required, returns a Profile
  // No additional parameters required
  res.send("Author has been unfollowed");
});

// Export the router
module.exports = router;
