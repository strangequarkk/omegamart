const express = require('express');
const router = express.Router();

// Load Product model
const Product = require('../../models/Product');

// @route GET api/products/test
// @description tests products route
// @access Public
router.get('/test', (req, res) => res.send('Product route testing!'));

// @route GET api/products
// @description Get all products
// @access Public
router.get('/', (req, res) => {
  Product.find()
    .then(Products => res.json(products))
    .catch(err => res.status(404).json({ noproductsfound: 'No Products found' }));
});

// @route GET api/products/:id
// @description Get single Product by id
// @access Public
router.get('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(Product => res.json(product))
    .catch(err => res.status(404).json({ noproductfound: 'No Product found' }));
});

// @route GET api/products
// @description add/save product
// @access Public
router.post('/', (req, res) => {
  Product.create(req.body)
    .then(Product => res.json({ msg: 'Product added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this product' }));
});

// @route GET api/products/:id
// @description Update Product
// @access Public
router.put('/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then(Product => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/products/:id
// @description Delete Product by id
// @access Public
router.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id, req.body)
    .then(Product => res.json({ mgs: 'Product entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such product' }));
});

module.exports = router;