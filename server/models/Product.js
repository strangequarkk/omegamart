// models/Product.js

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number, //TODO: add validator for decimal type
    required: true
  },
  description: {
    type: String
  },
  image_urls: [{
    type: String
  }],
  stock_qty: {
    type: Number,
    default: 25,
    validate : {
     validator : Number.isInteger,
     message   : '{VALUE} is not an integer value'
   }
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Product', ProductSchema);