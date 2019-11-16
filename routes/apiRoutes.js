const router = require('express').Router();
const axios = require('axios');
const Product = require('../utils/productContructor');
const Order = require('../utils/orderConstructor');
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
.post('/payment/user', (req, res) => {
    //TODO add Stripe, take payment, construct printful order

})
.post('/payment/guest', (req, res) => {
    //TODO add Stripe, take payment, contruct printful order


})
.get('/printful/:order', (req, res) => {
    const { order } = req.params;

    axios.get(`https://api.printful.com/orders/${order}`, {
        headers: {
            Authorization: `Basic ${PRINTFUL_64}`
        }
    })
    .then(apiRes => {

        if(!apiRes.data.result) {
            res.status(404).send(`Order number ${order} does not exist!`)
        }

        const order = new Order(apiRes.data.result);

        res.status(200).json(order);
    })
    .catch(err => {
        res.status(500).send(`Could not get order information: ${err}`);
    })

})
.put('/printful/:order', (req, res) => {
    //TODO make request to printful to modify existing order

})
.delete('/printful/:order', (req, res) => {
    //TODO cancel order
})


module.exports = router;