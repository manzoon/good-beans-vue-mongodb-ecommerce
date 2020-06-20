const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    productID: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true
    },
    categoryID: {
        type: String,
        required: true
    },
    productBrand: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)