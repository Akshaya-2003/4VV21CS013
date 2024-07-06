import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/api/companies/AMZ/categories/all/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-4">{product.productName}</h1>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto">
        <div className="px-6 py-4">
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
    </div>
  );
};

export default ProductDetails;
