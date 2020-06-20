const express = require('express')
const router = express.Router()
const Product = require('../models/product')

// get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// get single product
router.get('/:id', function (req, res) {
    res.send(req.params.id)
})

// add new product
router.post('/', async (req, res) => {
    const product = new Product({
        productID: req.body.productID,
        sku: req.body.sku,
        categoryID: req.body.categoryID,
        productBrand: req.body.productBrand,
        productName: req.body.productName,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        availability: req.body.availability
    })

    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err){
        res.status(400).json({ message: err.message })
    }
})

// update specific product
router.patch('/:id', function (req, res) {

})

// delete product
router.delete('/:id', function (req, res) {

})

module.exports = router