import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo.png'; 
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black p-8 text-center text-white">
      {/* Logo and Brand */}
      <div className="flex justify-center items-center mb-4">
        <Link to="/">
          <img src={Logo} alt="NeuraHealth Logo" className="w-16 h-16 rounded-full mr-2" />
        </Link>
        <h2 className="text-2xl font-bold uppercase">NeuraHealth</h2>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center space-x-6 mb-4">
        <Link to="/privacy-policy" className="hover:text-gray-400">
          Privacy Policy
        </Link>
        <Link to="/terms-of-use" className="hover:text-gray-400">
          Terms of Use
        </Link>
        <Link to="/contact" className="hover:text-gray-400">
          Contact Us
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About Us
        </Link>
        <Link to="/faq" className="hover:text-gray-400">
          FAQ
        </Link>
        <Link to="/support" className="hover:text-gray-400">
          Support
        </Link>
      </nav>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaFacebookF size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Copyright */}
      <p>&copy; 2025 NeuraHealth, Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
