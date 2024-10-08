import React from 'react';
import ProductList from '../components/ProductList';
import { dummyProducts } from '../data/dummyProducts';

const ProductListPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Furniture Products</h1>
      <ProductList products={dummyProducts} />
    </div>
  );
};

export default ProductListPage;