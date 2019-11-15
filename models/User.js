const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    stripeToken: String,
    orders: [String],
    address: {
        name,
        company,
        address1,
        address2,
        city,
        state_code,
        state_name,
        country_code,
        country_name,
        zip,
        phone
    }
})

const Users = mongoose.model('User', userSchema);

module.exports = Users;