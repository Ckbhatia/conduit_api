const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Construct articlesSchema
const articlesSchema = Schema(
  {
    slug: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, require: true },
    body: { type: String, required: true },
    tagsList: [{ type: Schema.Types.ObjectId, ref: "Tags" }],
    favorited: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    favoritesCount: Number,
    author: { type: String, required: true }
  },
  { timestamps: true }
);

// Create an instance of Articles model
const Articles = mongoose.model("Articles", articlesSchema);

// Exports the articles model
module.exports = Articles;
