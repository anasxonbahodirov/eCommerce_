import React, { useState } from "react";
import { NavLink } from "react-router";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import {
  FaToolbox,
  FaRegUserCircle,
  FaShopify,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <header
      className={`p-5 shadow-md transition-all fixed top-0 left-0 w-full z-50 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-blue-500 to-blue-900 text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-semibold tracking-wide hover:scale-105 transition-transform"
        >
          <FaShopify className="text-white" />
          <span className="text-gray-200">Shopify</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-6 text-lg">
          <NavLink
            to="/"
            className="flex items-center gap-2 hover:text-gray-300 transition-transform hover:scale-105"
          >
            <FaToolbox />
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className="flex items-center gap-2 hover:text-gray-300 transition-transform hover:scale-105"
          >
            <MdOutlineShoppingCartCheckout />
            Cart
          </NavLink>
          <NavLink
            to="/user"
            className="flex items-center gap-2 hover:text-gray-300 transition-transform hover:scale-105"
          >
            <FaRegUserCircle />
            User
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 hover:scale-110 transition-all"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-600" />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 hover:scale-110 transition-all"
            >
              <FaRegUserCircle
                className="text-gray-600 dark:text-white"
                size={28}
              />
            </button>

            <div
              className={`absolute right-0 mt-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-48 z-50 transition-all ${
                showProfile
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              }`}
            >
              <NavLink
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
              >
                Settings
              </NavLink>
              <button
                onClick={logout}
                className="w-full text-left px-4 py-2 mt-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
