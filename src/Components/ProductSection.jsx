import React from 'react';
import productImage from '../assets/product.png'; // Adjust the path to your product image

const products = [
  { name: 'Product 1', image: productImage, description: 'Description 1' },
  { name: 'Product 2', image: productImage, description: 'Description 2' },
  { name: 'Product 3', image: productImage, description: 'Description 3' },
  { name: 'Product 4', image: productImage, description: 'Description 4' },
];

const ProductSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md max-w-sm">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-2xl font-bold mt-4">{product.name}</h3>
            <p className="mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
