// Footer.js
import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative bg-zinc-800 py-8 text-white bg-fixed bg-cover bg-center"
    >
      <div className="container mx-auto w-full flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Logo Section */}
        <div className="flex flex-col w-full md:w-1/4 items-center md:items-start mb-6 md:mb-0">
          <img
            src="../../logo.png"
            alt="Fruits for Drinks"
            className="h-16 mb-4"
          />
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-col w-full md:w-1/2 items-center mb-6 md:mb-0">
          <ul className="text-center space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row items-center justify-center">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-blue-600">
                Shop Now
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-blue-600">
                Drink Groovy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-600">
                On-Trade
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-blue-600">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col w-full md:w-1/4 items-center">
          <div className="flex space-x-4 mb-4">
            <a
              href="https://instagram.com"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaInstagram size={24} className="text-white" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaLinkedin size={24} className="text-white" />
            </a>
            <a
              href="https://facebook.com"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaFacebook size={24} className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-600 hover:text-blue-600"
            >
              <FaTwitter size={24} className="text-white" />
            </a>
          </div>
          <p className="text-sm text-center">
            &copy;2024 - All rights reserved.
            <br />
            Groovy is a trademark of Enhaz Beverages Pvt. Ltd.
            <br />
            <a href="/privacy-policy" className="hover:text-blue-600">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
