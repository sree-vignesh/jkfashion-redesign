// pages/products.js
import React from "react";

const products = [
  {
    id: 1,
    name: "Living Linen",
    imageUrl: "/assets/hero.jpg",
  },
  {
    id: 2,
    name: "Kitchen Linen",
    imageUrl: "/assets/hero.jpg",
  },
  {
    id: 3,
    name: "Devour Linen",
    imageUrl: "/assets/hero.jpg",
  },
  // Add more products as needed
];

const Products = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Products Page</h1>
=======
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Products
      </h1>
      <p className="text-black">
        100% Cotton Handloom / Power loom made-ups & Fabrics of Dyed, Printed,
        Woven & Jacquard.
      </p>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="info-section bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-48 w-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold text-gray-700">
              {product.name}
            </h2>
          </div>
        ))}
      </div>
>>>>>>> 40d2d968aa347e21006ad383999a493d00ad7d2c
    </div>
  );
};

export default Products;
