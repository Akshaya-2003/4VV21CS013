import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; 
import FilterForm from './FilterForm'; 

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/companies/AMZ/categories/all/products');
        console.log('API Response:', response.data); 
        if (Array.isArray(response.data)) {
          setProducts(response.data); 
          setLoading(false);
        } else {
          setError('Invalid data received from server');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching products:', error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const applyFilters = (filters) => {
    
    let filteredProducts = products.filter(product => {
      
      return (
        (!filters.category || product.category === filters.category) &&
        (!filters.company || product.company === filters.company) &&
        (!filters.rating || product.rating >= filters.rating) &&
        (!filters.minPrice || product.price >= filters.minPrice) &&
        (!filters.maxPrice || product.price <= filters.maxPrice) &&
        (!filters.availability || product.availability === filters.availability)
      );
    });

    setProducts(filteredProducts);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-4">Top Products</h1>
      
      
      <FilterForm products={products} setProducts={setProducts} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
