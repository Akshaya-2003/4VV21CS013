const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productId: { type: String, unique: true },
  productName: String,
  price: Number,
  rating: Number,
  discount: Number,
  availability: String,
});

module.exports = mongoose.model('Product', ProductSchema);
