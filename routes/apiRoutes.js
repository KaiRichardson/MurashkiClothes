const router = require('express').Router();
const axios = require('axios');
const Product = require('../utils/productContructor');
const PRINTFUL_64 = process.env.PRINTFUL_64;


router
.get('/printful', (req, res) => {

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
.get('/printful/variants/:id', (req, res) => {
    const { id } = req.params;
    axios.get(`https://api.printful.com/store/products/${id}`, {
        headers: {
            Authorization: `Basic ${PRINTFUL_64}`
        }
    }).then(apiRes => {

        if (!apiRes.data.result.sync_variants) {
            res.status(404).send('Product not found!');
        }

        const data = apiRes.data.result.sync_variants.map(p => new Product(p));

        res.status(200).json(data);
    })
    .catch(err => {
        console.log(err);

        res.status(500).send(`Could not process request. Error: ${err}`);
    })
})



module.exports = router;