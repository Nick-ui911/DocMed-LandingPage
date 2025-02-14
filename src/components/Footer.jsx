import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content p-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      {/* Services Section */}
      <nav className="flex flex-col items-center md:items-start">
        <h6 className="footer-title font-semibold">Services</h6>
        <Link to="/branding" className="link link-hover">Branding</Link>
        <Link to="/design" className="link link-hover">Design</Link>
        <Link to="/marketing" className="link link-hover">Marketing</Link>
        <Link to="/advertisement" className="link link-hover">Advertisement</Link>
      </nav>

      {/* Company Section */}
      <nav className="flex flex-col items-center md:items-start">
        <h6 className="footer-title font-semibold">Company</h6>
        <Link to="/about" className="link link-hover">About us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
        <Link to="/support" className="link link-hover">Support</Link>
        <Link to="/shop" className="link link-hover">Shop</Link>
      </nav>

      {/* Social Section */}
      <nav className="flex flex-col w-full">
        <div className="w-full flex flex-col space-y-2 items-end md:items-start">
          <h6 className="footer-title font-semibold">Social</h6>
          <div className="flex gap-4">
            <Link to="https://twitter.com">
              <lord-icon
                src="https://cdn.lordicon.com/wlbymhoo.json"
                trigger="loop"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </Link>
            <Link to="https://youtube.com">
              <lord-icon
                src="https://cdn.lordicon.com/gvdkosit.json"
                trigger="loop"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </Link>
            <Link to="https://facebook.com">
              <lord-icon
                src="https://cdn.lordicon.com/cxauoejw.json"
                trigger="loop"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </Link>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
