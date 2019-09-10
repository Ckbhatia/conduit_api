var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // TODO
  // GET /
  // Expose the API endpoints
  res.send('Expose the API endpoints');
});

// Get Tags
router.get('/api/tags', (req, res, next) => {
  // TODO
  // GET /api/tags
  // No authentication required, returns a List of Tags
  res.send('Tags are gathered');
});


module.exports = router;