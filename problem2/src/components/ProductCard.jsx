import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.productName}</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Company:</span> {product.company}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Category:</span> {product.category}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Price:</span> ${product.price}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Rating:</span> {product.rating}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Discount:</span> {product.discount}%
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Availability:</span> {product.availability}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
