const Products = require('../models/Products');

module.exports = getUnsortedProducts = async(res, printProducts) => {

  try {
    const products = await Products.find({}, '-category -name -imgUrls');

    const prodData = printProducts.map(p => products.indexOf(p.id) === -1);

    return res.status(200).json(prodData);

  } catch (err) {
    console.log(err);
    return res.status(500).send(`Error getting products: ${err}`)
  }
    
    

}