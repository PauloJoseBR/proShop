import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc Fetch all products 
// @route GET /api/products
// @access Public 
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products)
})



// @desc Fetch single products
// @route GET /api/products/:id
// @access Public 

const getProductsById = asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products)
})

export { 
    getProducts, 
    getProductsById
}