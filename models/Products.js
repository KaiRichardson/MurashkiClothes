const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    _extID: Number,
    category: String,
    name: String,
    imgUrls: {
        base: [String],
        side: [String],
    }
})

const Products = mongoose.model('Product', productSchema);

module.exports = Products;