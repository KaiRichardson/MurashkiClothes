const Products = require('../models/Products');

module.exports = getUnsortedProducts = async(res, printProducts) => {

  try {
    const products = await Products.find({}, '-category -name -imgUrls');

    const prodIDs = [];
    
    products.forEach(e => prodIDs.push(e._extID));

    const prodData = printProducts.filter(p => {
      if (prodIDs.indexOf(p.id) === -1) return true;

      return false;
    })

    //Check 0th element for null/falsey value since map will just return an array with null if there are no matches
    if(!prodData[0]) {
      return res.status(204).send('No products to add at this time!');
    }

    return res.status(200).json(prodData);

  } catch (err) {
    console.log(err);
    return res.status(500).send(`Error getting products: ${err}`)
  }
    
    

}