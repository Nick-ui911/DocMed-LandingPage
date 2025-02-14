import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import image from "../assets/image.png";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
      }}
    >
      <nav className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-10 py-3 flex justify-between items-center">
        {/* Left Section - Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-semibold text-teal-600">DocMeds</span>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex gap-12 text-lg text-gray-700">
          <Link to="/appointment" className="hover:text-teal-600">
            Appointment
          </Link>
          <Link to="/medicine" className="hover:text-teal-600">
            Medicine
          </Link>
          <Link to="/surgical-kit" className="hover:text-teal-600">
            Surgical Kit
          </Link>
          <Link to="/shop" className="hover:text-teal-600">
            Shop
          </Link>
        </div>

        {/* Right Section - Login Button */}
        <div className="hidden md:flex">
          <button className="btn btn-outline border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
            Log In
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            ☰
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
          >
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            <li>
              <Link to="/medicine">Medicine</Link>
            </li>
            <li>
              <Link to="/surgical-kit">Surgical Kit</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="text-white text-2xl md:text-1xl flex flex-col justify-center items-center h-full space-y-4 px-4">
        <span className="font-bold text-center">Buy Medicines and Essentials</span>
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-1 pl-6 rounded-full border border-gray-800 text-black focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-lg bg-white"
          />
          <lord-icon
            src="https://cdn.lordicon.com/wjyqkiew.json"
            trigger="loop"
            colors="primary:#000000,secondary:#848484"
            style={{ width: "40px", height: "40px" }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          ></lord-icon>
        </div>
      </div>
    </div>
  );
};

export default Navbar;