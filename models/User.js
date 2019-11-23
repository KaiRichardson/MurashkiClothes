const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    stripeToken: String,
    orders: [String],
    address: {
        name: String,
        company: String,
        address1: String,
        address2: String,
        city: String,
        state_code: String,
        state_name: String,
        country_code: String,
        country_name: String,
        zip: String,
        phone: String
    }
})

const Users = mongoose.model('User', userSchema);

module.exports = Users;