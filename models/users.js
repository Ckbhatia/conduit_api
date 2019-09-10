const mongoose = require('mongoose');


const Schema = mongoose.Schema;

// Construct usersSchema
const usersSchema = Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {String, required: true},
    bio: String,
    image: String,
    // TODO:
    // Update the favorites and following
    following: Number,
    favorites: Array
}, {timestamps: true});

// Create Users model instance
const Users = mongoose.model('Users', usersSchema);

// Exports the Users model
module.exports = Users;