const router = require('express').Router();
const axios = require('axios');
const ProductData = require('../utils/productContructor');
const Products = require('../models/Products')
const Order = require('../utils/orderConstructor');
const getUnsortedProducts = require('../utils/getUnsortedProducts');
const PRINTFUL_64 = process.env.PRINTFUL_64;


router
.get('/printful', (req, res) => {

    //get all of our stores products
    axios.get('https://api.printful.com/store/products', {
        headers: {
            Authorization: `Basic ${PRINTFUL_64}`
        }
    }).then(apiRes => {

        return res.status(200).json(apiRes.data.result);
    })
    .catch(err => {
        console.log(err);

        return res.status(500).send(`Error getting products: ${err}`);
    })

})
.get('/products/add', (req, res) => {

    //get all of our stores products
    axios.get('https://api.printful.com/store/products', {
        headers: {
            Authorization: `Basic ${PRINTFUL_64}`
        }
    }).then(apiRes => {

        return getUnsortedProducts(res, apiRes.data.result);
    })
    .catch(err => {
        console.log(err);

        return res.status(500).send(`Error getting products: ${err}`);
    })

})
.post('/products/add', async (req, res) => {

    const { productsToAdd } = req.body;

    try {

        const added = await Products.create(productsToAdd);

        console.log(added);

        res.sendStatus(200);

    } catch(err) {
        console.log(err);

        return res.status(500).send(`Error adding products: ${err}`);
    }


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

        const data = apiRes.data.result.sync_variants.map(p => new ProductData(p));

        return res.status(200).json(data);
    })
    .catch(err => {
        console.log(err);

        return res.status(500).send(`Could not process request. Error: ${err}`);
    })
})
// Payment routes
.post('/payment/user', (req, res) => {
    //TODO add Stripe, take payment, construct printful order

})
.post('/payment/guest', (req, res) => {
    //TODO add Stripe, take payment, contruct printful order


})
//Order routes
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
    const { order } = req.params;
    axios.delete(`https://api.printful.com/orders/${order}`, {
        headers: {
            Authorization: `Basic ${PRINTFUL_64}`
        }
    })
    .then(apiRes => {

        if(!apiRes.data.result) {
            res.status(404).send(`Order ${order} does not exist`);
        }

        const order = new Order(apiRes.data.result);

        res.status(200).json(order);

    })
    .catch(err => {
        res.status(500).send(`Error canceling this order: ${err}`);
    })

})


module.exports = router;