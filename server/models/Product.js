// models/Product.js

const mongoose = require('mongoose');

const imgSetSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true
  },
  small: {
    type: String
  },
  med: {
    type: String
  },
  large: {
    type: String
  }
})

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String, 
    required: true,
    validate: /^(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{1,2})?$/,
    get: v => parseFloat(v),
    set: v => String(v),
  },
  description: {
    type: String
  },
  images: [{
    type: imgSetSchema
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
  },
  category: {
    type: String
  }
});

/*ProductSchema.pre('validate', function(doc) {
  console.log('about to validate product');
  console.log(this);
})*/

module.exports = mongoose.model('Product', ProductSchema);