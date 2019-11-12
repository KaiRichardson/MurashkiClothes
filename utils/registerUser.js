const bcrypt = require('bcrypt');
const Users = require('../models/User');

module.exports = async (res, username, email, password) => {
    
    try {
        const user = await Users.findOne({username});

        if (user) {
            return res.status(400).send('Username already exists.');
        }
    
        const hashed = await bcrypt.hash(password, 10);
        
        const newUser = await Users.create({ username, email, password: hashed }).save();
    
        return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).send(`Could not register user, error: ${error}`);
    }

}