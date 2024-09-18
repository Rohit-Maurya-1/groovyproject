import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate= useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "India",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    pin: "",
    phone: "",
    email: "",
  });

  // State for selected payment method
  const [paymentMethod, setPaymentMethod] = useState("bank");

  // Handler for form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for payment method change
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Handler for form submission (you can replace with actual submission logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process order
    console.log("Order submitted", formData, paymentMethod);
    navigate('/');
    setCartItems([]);
    localStorage.setItem('carts', JSON.stringify([]));
  };
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <h1 className="font-semibold text-4xl text-center mb-4">Checkout</h1>
      <div className="gap-4 px-16">
      <div className="container mx-auto my-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Billing Details */}
          <div className="bg-white p-6 shadow rounded-md">
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700">Company name (optional)</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700">
                  Country / Region <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="India">India</option>
                  {/* Add other country options */}
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Street address <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="streetAddress"
                  placeholder="House number and street name"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded mb-2"
                  required
                />
                <input
                  type="text"
                  name="apartment"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700">Town / City <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">State <span className="text-red-500">*</span></label>
                  <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                  required
                />
                </div>
                <div>
                  <label className="block text-gray-700">PIN <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="pin"
                    value={formData.pin}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700">Phone <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Email address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 shadow rounded-md">
            <h2 className="text-2xl font-bold mb-6">Your order</h2>
            
            <table className="w-full mb-4">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-4">Product</th>
                  <th className="pb-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cartItem, index) =>
                <tr className="border-b" key={index}>
                  <td className="py-2">{cartItem?.desc} × {cartItem.quantity}</td>
                  <td className="py-2">₹ {cartItem.price* cartItem.quantity}</td>
                </tr>
                )}
                <tr className="border-b font-bold">
                  <td className="py-2">Subtotal</td>
                  <td className="py-2">₹ {totalPrice}</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2">Total</td>
                  <td className="py-2">₹ {totalPrice}</td>
                </tr>
              </tbody>
            </table>

            {/* Payment Methods */}
            <div className="space-y-4">
              <div>
                <input
                  type="radio"
                  id="bank"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                <label htmlFor="bank" className="text-gray-700">Direct bank transfer</label>
                <p className="text-sm text-gray-500 mt-1">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                </p>
              </div>
              <div>
                <input
                  type="radio"
                  id="cod"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                <label htmlFor="cod" className="text-gray-700">Cash on delivery</label>
              </div>
            </div>

            <button type="submit" className="bg-green-500 text-white w-full mt-6 py-2">
              Place order
            </button>

            <p className="text-sm text-gray-600 mt-4">
              Your personal data will be used to process your order, support your experience, and for other purposes described in our privacy policy.
            </p>
          </div>
        </div>
      </form>
    </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
