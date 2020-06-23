const express = require('express')
const router = express.Router()
const Category = require('../models/category')

// get all products
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// get single product
router.get('/:id', findCategory, (req, res) => {
    res.send(res.category)
})

// add new product
router.post('/', async (req, res) => {
    const category = new Category({
        categoryName: req.body.categoryName,
        categoryID: req.body.categoryID,
        subCategories: req.body.subCategories,
    })

    try {
        const newCategory = await category.save()
        res.status(201).json(newCategory)
    } catch (err){
        res.status(400).json({ message: err.message })
    }
})

// update specific product
router.patch('/:id', function (req, res) {

})

// delete product
router.delete('/:id', findCategory, async (req, res) => {
    try {
        await res.category.remove()
        res.json({ message: 'Category deleted' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// middleware function that searches for a specific category in db
async function findCategory(req, res, next){
    let category
    try {
        category = await Category.findById(req.params.id)
        if (category == null) {
            return res.status(404).json({ message: "Category doesn't exist" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.category = category
    next()
}

module.exports = router