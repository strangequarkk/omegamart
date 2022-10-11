const express = require('express');
const router = express.Router();

// Load Product model
const Product = require('../../models/Product.js');

// @route GET api/products/test
// @description tests products route
// @access Public
router.get('/test', (req, res) => res.send('Product route testing!'));

// @route GET api/products
// @description Get all products
// @access Public
router.get('/', (req, res) => {
  Product.find({})
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ noproductsfound: 'No Products found' }));
});

// @route POST api/products
// @description add/save product
// @access Public
router.post('/', (req, res) => {
  Product.create(req.body)
    .then(product => res.status(201).json({product: product, message: 'Product added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this product; '+ err }));
});

// @route GET api/products/:id
// @description Get single Product by id
// @access Public
router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(404).json({ noproductfound: 'No Product found' }));
});


// @route PUT api/products/:id
// @description Update Product
// @access Public
router.put('/:id', (req, res) => {
  console.log("PUT path");
  console.log(req.body);
  Product.findByIdAndUpdate(req.params.id, req.body, {returnDocument: "after"})
    .then(product => res.json({ product: product, message: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/products/:id
// @description Delete Product by id
// @access Public
router.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id, req.body)
    .then(product => res.json({ mgs: 'Product entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such product' }));
});

module.exports = router;