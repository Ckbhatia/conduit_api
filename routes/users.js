var express = require('express');
var router = express.Router();

/* Post registeration user */
router.post('/', (req, res, next) => {
  res.send('Got registeration req');
});

/* POST login user. */
router.post('/login', (req, res, next) => {
  const data = req.body;
  // Temp
  res.send(data);
});

module.exports = router;
