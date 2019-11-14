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

// Post username follow
router.post("/:username/follow", async (req, res) => {
  try {
    const username = req.params.username;
    // Current log in user
    const currentUser = req.user.username;
    const user = await Users.findOne({ username }).select("_id");
    if (!user) return res.json({ message: "User does't exist" });
    // Update follower user
    const updateUser = await Users.findOneAndUpdate(
      { username: currentUser },
      { $push: { followers: user.id } },
      { safe: true, upsert: true, new: true }
    );
    // Update current user ( Log in ) with pushing following user
    const updateCurrentUser = await Users.findOneAndUpdate(
      { username },
      { $push: { following: user.id } },
      { safe: true, upsert: true, new: true }
    ).select("-_id, -password");
    res.status(200).json({ profile: updateCurrentUser });
  } catch (error) {
    res.json({ message: "There's an error", error });
  }
});

// Delete username follow
router.delete("/:username/follow", async (req, res) => {
  try {
    const username = req.params.username;
    // Current log in user
    const currentUser = req.user.username;
    const user = await Users.findOne({ username }).select("_id");
    if (!user) return res.json({ message: "User does't exist" });
    // Update follower user
    const updateUser = await Users.findOneAndUpdate(
      { username: currentUser },
      { $pull: { followers: user.id } },
      { safe: true, upsert: true, new: true }
    );
    // Update current user ( Log in ) with pushing following user
    const updateCurrentUser = await Users.findOneAndUpdate(
      { username },
      { $pull: { following: user.id } },
      { safe: true, upsert: true, new: true }
    ).select("-_id, -password");
    res.status(200).json({ profile: updateCurrentUser });
  } catch (error) {
    res.json({ message: "There's an error", error });
  }
});

// Export the router
module.exports = router;
