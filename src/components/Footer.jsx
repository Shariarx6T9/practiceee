import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-12">
      <div className="max-w-7xl mx-auto py-10 px-6 text-center space-y-6">
        {/* Quick Links */}
        <div className="flex justify-center gap-6 flex-wrap text-sm font-medium">
          <Link to="/" className="hover:text-green-300 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-300 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-green-300 transition">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-green-300 transition">
            Privacy Policy
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-lg">
          <a
            href="#"
            className="hover:text-pink-300 transition transform hover:scale-110"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-blue-300 transition transform hover:scale-110"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-red-300 transition transform hover:scale-110"
            target="_blank"
          >
            <FaPinterestP />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-green-100">
          © 2025 GreenNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
