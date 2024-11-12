import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <Link to="/">
            <h2 className="text-2xl font-bold">Daily's Flash</h2>
          </Link>
          <p className="text-white mt-2">Shop at your fingertips</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-white space-y-2">
            <li>
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="text-white space-y-2">
            <li>123 Business Street</li>
            <li>City, State, Zip</li>
            <li>+1 234 567 890</li>
            <li>info@dailysflash.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-white">
        © {new Date().getFullYear()} Daily's Flash. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
