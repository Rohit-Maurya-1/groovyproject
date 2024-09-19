import React, { useContext } from "react";
import ProductCard from "../Components/ProductCard";
import { PLUS_PRODUCTS, PRODUCTS, WATER_PRODUCTS } from "../constants";
import { CartContext } from "../context/CartContext";

const Products = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addProduct = (item) => {
    const existingItem = cartItems.find((x) => x.id === item.id);
    if (!existingItem) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      localStorage.setItem("carts", JSON.stringify([...cartItems, { ...item, quantity: 1 }]));
    }
  };

  return (
    <div className="relative w-full overflow-hidden pt-24">
      {/* Heading for PLUS_PRODUCTS */}
      <h1 className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl">
        Our Fruitful
        <span className="font-semibold text-red-500">+</span> Products
      </h1>

      <div className="relative flex flex-wrap justify-start">
        {PLUS_PRODUCTS.map((product, index) => (
          <div key={index} className="p-2 w-full sm:w-1/2 lg:w-1/4">
            <ProductCard
              image={product.image}
              backgroundColor={product.backgroundColor}
              price={product.price}
              desc={product.desc}
              add={() => addProduct(product)}
            />
          </div>
        ))}
      </div>

      {/* Heading for PRODUCTS */}
      <h1 className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl mt-8">
        Our Fruitful Products
      </h1>
      <div className="relative flex flex-wrap justify-start">
        {PRODUCTS.map((product, index) => (
          <div key={index} className="p-2 w-full sm:w-1/2 lg:w-1/4">
            <ProductCard
              image={product.image}
              backgroundColor={product.backgroundColor}
              price={product.price}
              desc={product.desc}
              add={() => addProduct(product)}
            />
          </div>
        ))}
      </div>

      {/* Heading for WATER_PRODUCTS */}
      <h1 className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl mt-8">
        Water
      </h1>
      <div className="relative flex flex-wrap justify-start">
        {WATER_PRODUCTS.map((water, index) => (
          <div key={index} className="p-2 w-full sm:w-1/2 lg:w-1/4">
            <ProductCard
              image={water.image}
              backgroundColor={water.backgroundColor}
              price={water.price}
              desc={water.desc}
              add={() => addProduct(water)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
