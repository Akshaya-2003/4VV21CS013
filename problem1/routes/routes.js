const express = require('express');
const { getTopProducts, getProductDetails } = require('../products/products');

const router = express.Router();

router.get('/companies/:companyname/categories/:categoryname/products', getTopProducts);
router.get('/companies/:companyname/categories/:categoryname/products/:productid', getProductDetails);

module.exports = router;
