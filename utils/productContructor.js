module.exports = function ProductData(product) {
    this.variant_id = product.variant_id;
    this.retail_price = product.retail_price;
    this.name = product.name;
    this.color = this.name.split('-')[1].split('/')[0]
    this.size = this.name.split('-')[1].split('/')[1]
}