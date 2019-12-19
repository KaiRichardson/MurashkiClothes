const router = require('express').Router();
const getUnsortedProducts = require('../utils/getUnsortedProducts');
const Products = require('../models/Products');
const axios = require('axios');
const PRINTFUL_64 = process.env.PRINTFUL_64;

router
  .get('/', async (req, res) => {
    try {
      const products = await Products.find({});

      if (!products) {
        return res.status(404).send(`Error. No products to retrieve`);
      }

      return res.status(200).json(products);
    } catch (err) {
      console.log(err);

      return res.status(500).send(`Error retrieving products: ${err}`);
    }
  })
  .get('/admin/add', (req, res) => {
    //get all of our stores products
    axios
      .get('https://api.printful.com/store/products', {
        headers: {
          Authorization: `Basic ${PRINTFUL_64}`
        }
      })
      .then((apiRes) => {
        return getUnsortedProducts(res, apiRes.data.result);
      })
      .catch((err) => {
        console.log(err);

        return res.status(500).send(`Error getting products: ${err}`);
      });
  })
  .post('/admin/add', async (req, res) => {
    const { productsToAdd } = req.body;

    if (productsToAdd.length === 0) {
      return res.status(404).send('Product information missing from request. Please try again.');
    }

    try {
      const added = await Products.create(productsToAdd);

      if (!added) {
        return res.status(204).send('No products added. If there should have been products added, please try again.');
      }

      return res.status(200).json(added);
    } catch (err) {
      console.log(err);

      return res.status(500).send(`Error adding products: ${err}`);
    }
  })
  .post('/admin/edit', async (req, res) => {
    const { productsToUpdate } = req.body;

    if (!productsToUpdate || productsToUpdate.length === 0) {
      return res.status(400).send('There were no products to add in this request!')
    }

    const _ids = productsToUpdate.map((p) => p._id);

    return res.sendStatus(200);
  });

module.exports = router;
