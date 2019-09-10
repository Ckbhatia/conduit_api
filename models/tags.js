const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Construct tagsSchema
const tagsSchema = Schema({
    name: [type: String, required: true],
    // TODO
    // Update article, reference it to the articles
    article: {type: [Schema.Types.ObjectId], ref: 'articles', required: true}
}, {timestamps: true});

// Create an instance of Tags model
const Tags = mongoose.model('Tags', tagsSchema);

// Exports the Comments model
module.exports = Tags;