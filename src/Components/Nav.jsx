import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "../../public/logo.png";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAboutActive, setIsAboutActive] = useState(false);
  let hideTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      const currentPath = window.location.pathname;
      setIsAboutActive(currentPath.startsWith("/about"));
    };

    handleLocationChange(); // Check on initial load
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setDropdownVisible(false); // Close dropdown when closing mobile menu
    }
  };

  const handleDropdownItemClick = () => {
    setDropdownVisible(false); // Close dropdown on item click
    if (mobileMenuOpen) {
      setMobileMenuOpen(false); // Close mobile menu on item click
    }
  };

  const handleAboutClick = () => {
    setDropdownVisible(!dropdownVisible);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false); // Close mobile menu on "About Us" click
    }
  };

  return (
    <div
      className={`w-full z-50 fixed flex items-center justify-between lg:px-16 px-8 lg:py-8 py-4 h-24 text-black nav-transition ${
        isScrolled ? "bg-zinc-800 text-white transition-all ease-in-out" : ""
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <NavLink to="/">
          <div className="px-4 py-2 rounded-2xl">
            <img src={logo} alt="Logo" className="w-[8vw] navimg" />
          </div>
        </NavLink>

        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-[4vw] uppercase">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/media"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Media
          </NavLink>
          <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              aria-disabled
              className={`cursor-pointer font-semibold text-sm ${
                isAboutActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`}
              onClick={handleAboutClick}
            >
              About Us
            </NavLink>
            {dropdownVisible && (
              <div className="absolute bg-zinc-800 text-white rounded-lg py-2 mt-2 w-40">
                <NavLink
                  to="/our-story"
                  className="block px-4 py-2 hover:bg-zinc-700"
                  onClick={handleDropdownItemClick}
                >
                  Our Story
                </NavLink>
                <NavLink
                  to="/award"
                  className="block px-4 py-2 hover:bg-zinc-700"
                  onClick={handleDropdownItemClick}
                >
                  Awards
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer font-semibold text-sm ${
                isActive
                  ? "bg-zinc-800 transition-all ease-in-out text-white px-2 py-1"
                  : "hover:text-gray-400"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        <div className="hidden lg:flex gap-8 items-center">
          <FiSearch className="text-xl font-bold" />
          <LuShoppingCart className="text-xl" />
          <GrFavorite className="text-xl" />
          <div className="bg-zinc-800 p-2 text-white rounded-full">
            <FaRegUser className="text-base" />
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-zinc-800 text-white py-4">
          <NavLink
            to="/"
            className="block px-4 py-2 hover:bg-zinc-700"
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="block px-4 py-2 hover:bg-zinc-700"
            onClick={toggleMobileMenu}
          >
            Products
          </NavLink>
          <NavLink
            to="/gallery"
            className="block px-4 py-2 hover:bg-zinc-700"
            onClick={toggleMobileMenu}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/media"
            className="block px-4 py-2 hover:bg-zinc-700"
            onClick={toggleMobileMenu}
          >
            Media
          </NavLink>
          <div className="relative">
            <button
              className="block px-4 py-2 hover:bg-zinc-700"
              onClick={handleAboutClick}
            >
              About Us
            </button>
            {dropdownVisible && (
              <div className="ml-4 bg-zinc-800 text-white py-2 rounded-lg">
                <NavLink
                  to="/our-story"
                  className="block px-4 py-2 hover:bg-zinc-600"
                  onClick={handleDropdownItemClick}
                >
                  Our Story
                </NavLink>
                <NavLink
                  to="/award"
                  className="block px-4 py-2 hover:bg-zinc-600"
                  onClick={handleDropdownItemClick}
                >
                  Awards
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/contact"
            className="block px-4 py-2 hover:bg-zinc-700"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
