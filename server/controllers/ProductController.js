const Product = require('../models/Product.js');
const { products } = require('../data/data.js');
const Request = require('./Request.js');

class ProductRequest extends Request {
  constructor() {
    super(Product, products);
  }
}

module.exports = ProductRequest;