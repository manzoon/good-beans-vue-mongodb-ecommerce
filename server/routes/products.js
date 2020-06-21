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
router.get('/:id', findProduct, (req, res) => {
    res.send(res.product)
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
router.delete('/:id', findProduct, async (req, res) => {
    try {
        await res.product.remove()
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// middleware function that searches for a specific product in db
async function findProduct(req, res, next){
    let product
    try {
        product = await Product.findById(req.params.id)
        if (product == null) {
            return res.status(404).json({ message: "Product doesn't exist" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.product = product
    next()
}

module.exports = router