const router = require('express').Router();
const registerUser = require('../utils/registerUser');

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    //TODO Integrate Bcrypt, likely in a helper function
    if (!username || !email || !password) {
        res.status(400).send('Request is missing user info.');
    }

    return registerUser(res, username, email, password);

})

module.exports = router;