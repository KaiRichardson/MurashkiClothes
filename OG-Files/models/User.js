const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    stripeToken: String,
    orders: [String]
})

const Users = mongoose.model('User', userSchema);

module.exports = Users;