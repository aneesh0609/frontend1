import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 pt-12 pb-6 border-t border-amber-200">
      
      {/* Glow background */}
      <div className="absolute -top-10 right-10 w-40 h-40 bg-amber-200 opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-10 left-10 w-40 h-40 bg-rose-200 opacity-20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Upper Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 text-center sm:text-left">

          {/* Logo */}
          <div>
            <img src="/catdog.png" alt="logo" className="w-28 mx-auto sm:mx-0" />
            <p className="text-gray-600 mt-3 text-sm">
              Caring for Pets, Healing with Love ❤️
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-gray-600 text-sm font-medium">
              <Link className="hover:text-amber-600 transition" to="/">Home</Link>
              <Link className="hover:text-amber-600 transition" to="/appointment">Appointment</Link>
              <Link className="hover:text-amber-600 transition" to="/about">About</Link>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              Contact
            </h4>

            <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-700 text-sm mb-2">
              <FaPhone className="text-amber-600" />
              <span>3656-3673-8675</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-700 text-sm mb-2">
              <MdEmail className="text-amber-600" />
              <span>Pawsworld23@gmail.com</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-700 text-sm">
              <FaLocationArrow className="text-amber-600" />
              <span>123 Block-D, Moti-Nagar, Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-amber-200 pt-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Paws-World 🐾 | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
