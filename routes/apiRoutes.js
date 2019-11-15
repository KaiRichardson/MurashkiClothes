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
        // console.log(apiRes.data.result.sync_variants[0]);
        console.log(apiRes.data.result.sync_variants[12].variant_id);
        console.log(' \n\n -------------------------- \n\n')
        console.log(apiRes.data.result.sync_variants[12].retail_price);
        console.log(' \n\n -------------------------- \n\n')
        console.log(apiRes.data.result.sync_variants[12].name);
        console.log(' \n\n -------------------------- \n\n')
        console.log('FILES', apiRes.data.result.sync_variants[12].files); //previews are stored here 151086221
        console.log(' \n\n -------------------------- \n\n')
        console.log('PRODUCT', apiRes.data.result.sync_variants[12].product);
        // str.split('-')[1].split('/') split color and size into array in the following format ["Color", "Size"]

        res.sendStatus(200);
    })
    .catch(err => {
        console.log(err);

        res.sendStatus(500);
    })
})
.get('/printful/files', (req, res) => {
    axios.get('https://api.printful.com/files', {
        headers: {
            Authorization: `Basic ${PRINTFUL_64}`
        }
    }).then(apiRes => {
        console.log(apiRes.data);

        res.sendStatus(200);
    })
    .catch(err => {
        console.log(err);

        res.sendStatus(500);
    })
})


module.exports = router;