const express = require('express');
const router = express.Router();

/* Handle profiles routes */

// Get articles
router.get('/', (req, res, next) => {
    // TODO
    // List articles
    // Returns most recent articles globally by default, provide tag, author or favorited query parameter to filter results
    // Query Parameters:
    // Filter by tag:
    // ?tag=AngularJS
    // Filter by author:
    // ?author=jake
    // Favorited by user:
    // ?favorited=jake
    // Limit number of articles (default is 20):
    // ?limit=20
    // Offset/skip number of articles (default is 0):
    // ?offset=0
    // Authentication optional, will return multiple articles, ordered by most recent first
    res.send('List of articles has been sent');
});


// Get feed articles
router.get('/feed', (req, res, next) => {
    // TODO
    // Feed articles
    // Can also take limit and offset query parameters like List Articles
    // Authentication required, will return multiple articles created by followed users, ordered by most recent first.
    res.send('Feed articles');
});

// Get article
router.get('/:slug', (req, res, next) => {
    // TODO
    // Get article
    // No authentication required, will return single article
    res.send('Get articles');
});


// Post article
router.post('/articles', (req, res, next) => {
    // TODO
    // Post article
    // Example request body:
    // {
    //   "article": {
    //     "title": "How to train your dragon",
    //     "description": "Ever wonder how?",
    //     "body": "You have to believe",
    //     "tagList": ["reactjs", "angularjs", "dragons"]
    //   }
    // }
    // Authentication required, will return an Article
    // Required fields: title, description, body
    // Optional fields: tagList as an array of Strings
    res.send('Article has been posted');
});

// Put article
router.put('/:slug', (req, res, next) => {
    // TODO
    // Put article
    // Example request body:

    // {
    //     "article": {
    //       "title": "Did you train your dragon?"
    //     }
    //   }
    //   Authentication required, returns the updated Article
    //   Optional fields: title, description, body
    //   The slug also gets updated when the title is changed
    res.send('Article updated');
});

// Delete article
router.delete('/:slug', (req, res, next) => {
    // TODO
    // Put article
    // Authentication required
    res.send('Article has been deleted');
});


/* Comments routes */

// Post comments
router.post('/:slug/comments', (req, res, next) => {
    // TODO
    // Add Comments to an Article
    // Example request body:
    // {
    //   "comment": {
    //     "body": "His name was my name too."
    //   }
    // }
    // Authentication required, returns the created Comment
    // Required field: body
    res.send('Comment has been added');
});

// Get comments
router.get('/:slug/comments', (req, res, next) => {
    // TODO
    // Get Comments from an Article
    // GET /api/articles/:slug/comments
    // Authentication optional, returns multiple comments
    res.send('Comments has been sent');
});

// Delete comment
router.delete('/:slug/comments/:id', (req, res, next) => {
    // TODO
    // Delete Comment
    // DELETE /api/articles/:slug/comments/:id
    // Authentication required
    res.send('Comment has been deleted');
});

/* Favorite routes */

// Post favorite article
router.get('/:slug/favorite', (req, res, next) => {
    // TODO
    // Favorite Article
    // POST /api/articles/:slug/favorite
    // Authentication required, returns the Article
    // No additional parameters required
    res.send('Article has been favorited');
});


// Delete Unfavorite Article
router.delete('/:slug/favorite', (req, res, next) => {
    // TODO
    // DELETE /api/articles/:slug/favorite
    // Authentication required, returns the Article
    // No additional parameters required
    res.send('Article has been unfavorited');
});

// Export the router
module.exports = router;