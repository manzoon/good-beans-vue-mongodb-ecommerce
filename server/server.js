const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// create express app and use configuration from dotenv
const app = express()
require('dotenv').config()
app.use(bodyParser.json())
app.use(cors())

// connect to database via mongoose
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log("Connected to DB!"))

// routes
const productsRouter = require('./routes/products')
const categoriesRouter = require('./routes/categories')

app.use('/products', productsRouter)
app.use('/categories', categoriesRouter)

app.listen(3000, () => console.log('Server started')) 