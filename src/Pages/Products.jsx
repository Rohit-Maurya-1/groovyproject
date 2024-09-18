import React, { useContext } from "react";
import ProductCard from "../Components/ProductCard";
import { PLUS_PRODUCTS, PRODUCTS, WATER_PRODUCTS } from "../constants";
import { CartContext } from "../context/CartContext";
const Products = () => { 
  const {cartItems, setCartItems}= useContext(CartContext);
  
  const addProduct=(item)=>{
    const existingItem = cartItems.find((x) => x.id === item.id);
    if (!existingItem) {
      setCartItems([...cartItems, {...item, quantity: 1 }]);
      localStorage.setItem('carts', JSON.stringify([...cartItems, {...item, quantity: 1 }]));
    }
  }
  return (
    <div className="relative w-full overflow-hidden pt-24">
      <h1 className="text-center font-semibold text-4xl ">
        Our Fruitful
        <span  className="font-semibold text-red-500">+</span> Products
      </h1>
      <div className="relative flex flex-wrap px-16">
        {PLUS_PRODUCTS.map((product, index) => (
          <div key={index} className="p-2">
            <ProductCard
              image={product.image}
              backgroundColor={product.backgroundColor}
              price={product.price}
              desc={product.desc}
              add={()=>addProduct(product)}
            />
          </div>
        ))}
      </div>
      <h1 className="text-center font-semibold text-4xl mt-8">
        Our Fruitful Products
      </h1>
      <div className="relative flex flex-wrap px-16">
        {PRODUCTS.map((product, index) => (
          <div key={index} className="p-2">
            <ProductCard
              image={product.image}
              backgroundColor={product.backgroundColor}
              price={product.price}
              desc={product.desc}
              add={()=>addProduct(product)}
            />
          </div>
        ))}
      </div>

      <h1 className="text-center font-semibold text-4xl mt-8">
        Water
      </h1>
      <div className="relative flex flex-wrap px-16">
        {WATER_PRODUCTS.map((water, index) => (
          <div key={index} className="p-2">
            <ProductCard
              image={water.image}
              backgroundColor={water.backgroundColor}
              price={water.price}
              desc={water.desc}
              add={()=>addProduct(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
