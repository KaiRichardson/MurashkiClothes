const Product = require('./productContructor');

module.exports = function Order(order) {
    this.id = order.id;
    this.status = order.status;
    this.error = order.error;
    this.shipping = order.shipping;
    this.shipping_service_name = order.shipping_service_name;
    this.recipient = order.recipient;
    this.items = order.items.map(p => new Product(p));
    this.retail_costs = order.retail_costs;
}