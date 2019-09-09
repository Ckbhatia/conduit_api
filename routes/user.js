var express = require('express');
var router = express.Router();

/* Get current user */
router.get('/', (req, res, next) => {
  res.send('Got req for current user');
});

/* POST login user. */
router.put('/', (req, res, next) => {
  const data = req.body;
  // Temp
  res.send(data);
//   Todo
// Add User modal and update functionality
});

module.exports = router;
