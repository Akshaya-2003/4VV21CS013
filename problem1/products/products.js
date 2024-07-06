const Product = require('./products.js');
const axios = require('axios');

const API_BASE_URL = 'http://20.244.56.144/test';

const getTopProducts = async (req, res) => {
  const { categoryname } = req.params;
  const { n = 10, page = 1, sort = 'price', order = 'asc', minPrice = 0, maxPrice = Infinity } = req.query;

  const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
  let products = [];

  for (const company of companies) {
    try {
      const response = await axios.get(`${API_BASE_URL}/companies/${company}/categories/${categoryname}/products`, {
        params: {
          top: n,
          minPrice,
          maxPrice
        }
      });
      products.push(...response.data);
    } catch (err) {
      console.error(`Failed to fetch products from ${company}:`, err.message);
    }
  }


  products = products.sort((a, b) => (order === 'asc' ? a[sort] - b[sort] : b[sort] - a[sort]))
                     .slice((page - 1) * n, page * n);

  products = products.map(product => ({
    ...product,
    productId: `${product.company}-${product.id}-${Date.now()}` 
  }));

  res.json(products);
};

const getProductDetails = async (req, res) => {
  const { categoryname, productid } = req.params;

  const product = await Product.findOne({ productId: productid, category: categoryname });
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = { getTopProducts, getProductDetails };
