const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    stripeToken: String,
    orders: [String]
})

mongoose.model('User', userSchema);