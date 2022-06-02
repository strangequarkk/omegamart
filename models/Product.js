// models/Product.js

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: NumberDecimal,
    required: true
  },
  description: {
    type: String
  },
  image_urls: [{
    type: String
  }],
  stock_qty: {
    type: Integer
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Product = mongoose.model('product', ProductSchema);