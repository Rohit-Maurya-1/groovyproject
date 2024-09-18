import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    localStorage.setItem(
      "carts",
      JSON.stringify(cartItems.filter((item) => item.id !== id))
    );
  };

  const changeQuantity = (id, qty) => {
    setCartItems(cartItems.map((item) =>item.id == id? {...item, quantity: qty} :item));
    localStorage.setItem(
      "carts",
      JSON.stringify(cartItems.map((item) => item.id == id? {...item, quantity: qty} : item))
    );
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * (item.quantity||1), 0);
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="font-semibold text-4xl text-center mb-4">Carts</h1>
      <div className="gap-4 px-16">
        <section class="container mx-auto my-8">
          <h2 class="text-3xl font-bold mb-6">Product</h2>

          <div class="flex flex-wrap bg-white shadow p-4">
            <table class="sm:w-full table-auto">
              <thead>
                <tr class="text-left border-b">
                  <th class="pb-4">Product</th>
                  <th class="pb-4">Price</th>
                  <th class="pb-4">Quantity</th>
                  <th class="pb-4">Subtotal</th>
                  <th class="pb-4"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length ? (
                  <>
                    {cartItems.map((item, index) => (
                      <tr class="border-b" key={index} >
                        <td class="flex items-center space-x-4 py-4">
                          <img style={{backgroundColor:`#${item.backgroundColor}`,borderRadius:4}} src={item.image} alt="Lemon Drink" class="h-12" />
                          <span class="text-blue-500">{item.desc}</span>
                        </td>
                        <td class="py-4">₹ {item.price}</td>
                        <td class="py-4">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e)=>{
                              changeQuantity(item.id, parseInt(e.target.value))
                            }}
                            onBlur={(e)=>{
                              if(!parseInt(e.target.value))
                                 changeQuantity(item.id,1)
                            }}
                            min={1}
                            class="w-12 border text-center"
                          />
                        </td>
                        <td class="py-4">₹ {item.price * (item.quantity||1)}</td>
                        <td class="py-4" onClick={()=>removeItem(item.id)}><FaTrash color="#ff0000"/></td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    <h3>No Carts Items</h3>
                  </>
                )}
              </tbody>
            </table>

            <div class="flex justify-between items-center mt-6">
              <div>
                <h3 class="text-xl font-bold">Cart totals</h3>
                <div class="mt-2">
                  <div class="flex justify-between">
                    <span>Products</span>
                    <span>{cartItems.length}</span>
                  </div>
                  <div class="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹ {totalPrice}</span>
                  </div>
                  <Link to={'/checkout'}>
                  <button class="bg-green-500 text-white px-6 py-2 mt-4 w-full">
                    Proceed to checkout
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
