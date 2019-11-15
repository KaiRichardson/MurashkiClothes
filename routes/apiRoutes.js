const router = require('express').Router();
const axios = require('axios');
const PRINTFUL_64 = process.env.PRINTFUL_64;


router.get('/printful', (req, res) => {

    //get all of our stores products
    axios.get('https://api.printful.com/store/products', {
        headers: {
            Authorization: `Basic ${PRINTFUL_64}`
        }
    }).then(apiRes => {
        console.log(apiRes.data.result) // <-- Array of products

        res.sendStatus(200);
    })
    .catch(err => {
        console.log(err);

        res.sendStatus(500);
    })

})
.get('/printful/variants', (req, res) => {
    axios.get('https://api.printful.com/store/products/142621663', {
        headers: {
            Authorization: `Basic ${PRINTFUL_64}`
        }
    }).then(apiRes => {
        console.log(apiRes.data.result);
        // str.split('-')[1].split('/') split color and size into array in the following format ["Color", "Size"]

        res.sendStatus(200);
    })
    .catch(err => {
        console.log(err);

        res.sendStatus(500);
    })
})


module.exports = router;