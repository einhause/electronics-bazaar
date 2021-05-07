import asyncHandler from 'express-async-handler'; //middleware for async error handling, avoid trycatching
import Product from '../models/productModel.js';

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  return res.json(products);
});

// @desc Fetch product by ID
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  } else {
    res.json(product);
  }
});

export { getProducts, getProductById };