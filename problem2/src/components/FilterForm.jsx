import React, { useState } from 'react';

const FilterForm = ({ products, setProducts }) => {
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    minPrice: '',
    maxPrice: '',
    availability: '',
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  
  const applyFilters = () => {
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

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">Filter Products</h2>
      <div className="flex flex-wrap">
        <input type="text" name="category" placeholder="Category" className="px-4 py-2 mr-2 mb-2 rounded border" onChange={handleFilterChange} />
        <input type="text" name="company" placeholder="Company" className="px-4 py-2 mr-2 mb-2 rounded border" onChange={handleFilterChange} />
        <input type="number" name="rating" placeholder="Rating" className="px-4 py-2 mr-2 mb-2 rounded border" onChange={handleFilterChange} />
        <input type="number" name="minPrice" placeholder="Min Price" className="px-4 py-2 mr-2 mb-2 rounded border" onChange={handleFilterChange} />
        <input type="number" name="maxPrice" placeholder="Max Price" className="px-4 py-2 mr-2 mb-2 rounded border" onChange={handleFilterChange} />
        <input type="text" name="availability" placeholder="Availability" className="px-4 py-2 mr-2 mb-2 rounded border" onChange={handleFilterChange} />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 mt-2" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default FilterForm;
