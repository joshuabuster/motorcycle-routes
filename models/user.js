const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String
  }, {
    timestamps: true
  });



module.exports = mongoose.model('User', userSchema);