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
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
    localStorage.setItem(
      "carts",
      JSON.stringify(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: qty } : item
        )
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-center mb-4">
        Carts
      </h1>
      <div className="px-2 sm:px-4 md:px-8 gap-4">
        <section className="my-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
            Product
          </h2>

          <div className="bg-white shadow p-4">
            <div className="block sm:hidden">
              {cartItems.length ? (
                cartItems.map((item, index) => (
                  <div key={index} className="mb-4 p-4 border-b">
                    <div className="flex items-center space-x-4 mb-2">
                      <img
                        style={{
                          backgroundColor: `#${item.backgroundColor}`,
                          borderRadius: 4,
                        }}
                        src={item.image}
                        alt="Product"
                        className="h-12 w-12"
                      />
                      <span className="text-blue-500">{item.desc}</span>
                    </div>
                    <div className="text-sm">
                      <p>Price: ₹ {item.price}</p>
                      <p>Quantity:</p>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          changeQuantity(item.id, parseInt(e.target.value))
                        }
                        onBlur={(e) => {
                          if (!parseInt(e.target.value)) changeQuantity(item.id, 1);
                        }}
                        min={1}
                        className="w-12 border text-center"
                      />
                      <p>Subtotal: ₹ {item.price * (item.quantity || 1)}</p>
                      <div
                        className="cursor-pointer flex justify-end mt-2"
                        onClick={() => removeItem(item.id)}
                      >
                        <FaTrash color="#ff0000" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4">No Cart Items</div>
              )}
            </div>

            {/* For larger screens */}
            <div className="hidden sm:block">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-4">Product</th>
                    <th className="pb-4">Price</th>
                    <th className="pb-4">Quantity</th>
                    <th className="pb-4">Subtotal</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length ? (
                    cartItems.map((item, index) => (
                      <tr className="border-b" key={index}>
                        <td className="flex items-center space-x-4 py-4">
                          <img
                            style={{
                              backgroundColor: `#${item.backgroundColor}`,
                              borderRadius: 4,
                            }}
                            src={item.image}
                            alt="Product"
                            className="h-12 w-12"
                          />
                          <span className="text-blue-500">{item.desc}</span>
                        </td>
                        <td className="py-4">₹ {item.price}</td>
                        <td className="py-4">
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              changeQuantity(item.id, parseInt(e.target.value))
                            }
                            onBlur={(e) => {
                              if (!parseInt(e.target.value))
                                changeQuantity(item.id, 1);
                            }}
                            min={1}
                            className="w-12 border text-center"
                          />
                        </td>
                        <td className="py-4">
                          ₹ {item.price * (item.quantity || 1)}
                        </td>
                        <td
                          className="py-4 cursor-pointer"
                          onClick={() => removeItem(item.id)}
                        >
                          <FaTrash color="#ff0000" />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        No Cart Items
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-6">
              <div className="w-full mb-4 md:mb-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Cart totals
                </h3>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <span>Products</span>
                    <span>{cartItems.length}</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹ {totalPrice}</span>
                  </div>
                  <Link to="/checkout">
                    <button className="bg-green-500 text-white px-6 py-2 mt-4 w-full">
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
