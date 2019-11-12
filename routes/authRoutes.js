const router = require('express').Router();
const Users = require('../models/User');

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400).send('Request is missing user info.');
    }

    const user = await Users.findOne({username});

    if (user) {
        res.status(400).send('Username already exists.');
    }
    
    const newUser = await Users.create({
        username,
        email,
        password 
    })

    console.log(newUser);

    res.status(200).send('User created');
})