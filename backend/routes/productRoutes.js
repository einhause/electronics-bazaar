import express from 'express';
import asyncHandler from 'express-async-handler'; //middleware for async error handling, avoid trycatching
import Product from '../models/productModel.js';

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    return res.json(products);
  })
);

// @desc Fetch product by ID
// @route GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'Product not found' });
    return res.json(product);
  })
);

export default router;
