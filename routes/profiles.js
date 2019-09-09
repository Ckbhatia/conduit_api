const express = require('express');
const router = express.Router();

/* Handle profiles routes */

// Get username
router.get('/:username', (req, res, next) => {
    // TODO
    // Get profile
    // Authentication optional, returns a Profile
    res.send('Profile has been sent');
});


// Get username follow
router.get('/:username/follow', (req, res, next) => {
    // TODO
    // Follow user
    // Authentication required, returns a Profile
    // No additional parameters required
    res.send('Author has been followed');
});


// Delete username follow
router.delete('/:username/follow', (req, res, next) => {
    // TODO
    // Unfollow user
    // Authentication required, returns a Profile
    // No additional parameters required
    res.send('Author has been unfollowed');
});


// Export the router
module.exports = router;