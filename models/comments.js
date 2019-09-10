const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Construct commentsSchema
const commentsSchema = Schema({
    body: {type: String, required: true},
    // TODO
    // Update author, reference it to the author
    author: {type: String, required: true}
}, {timestamps: true});

// Create an instance of comments model
const Comments = mongoose.model('Comments', commentsSchema);

// Exports the Comments model
module.exports = Comments;