const router = require('express').Router();
const axios = require('axios');
const PRINTFUL_64 = process.env.PRINTFUL_64;


router.get('/printful', (req, res) => {
    axios.get('https://api.printful.com/products', {
        headers: {
            Authorization: `Basic ${PRINTFUL_64}`
        }
    }).then(apiRes => {
        console.log(apiRes);

        res.sendStatus(200);
    })
    .catch(err => {
        console.log(err);

        res.sendStatus(500);
    })
})


module.exports = router;