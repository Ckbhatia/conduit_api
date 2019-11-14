const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

// Construct usersSchema
const usersSchema = Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    bio: String,
    image: String,
    // TODO:
    // Update the favorites and following
    // In testing not to commit these changes
    following: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    followers: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    favorites: [{ type: Schema.Types.ObjectId, ref: "Articles" }],
}, {timestamps: true});

// Hash the password
usersSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});


/**
 * Verifies the passwords
 * @param {string}
 * @returns {Boolean} 
 */ 
usersSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// Create Users model instance
const Users = mongoose.model('Users', usersSchema);

// Exports the Users model
module.exports = Users;