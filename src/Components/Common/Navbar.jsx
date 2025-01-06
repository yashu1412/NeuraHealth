import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Logo.png';
import { useUser } from '../../reducer/UserContext'; 
function Navbar() {
  const { user, setUser } = useUser(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); 
    navigate('/login'); 
  };

  return (
    <header className="bg-violet-900 text-white fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="NeuraHealth Logo" className="w-16 h-16 rounded-full" />
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 uppercase">
            NeuraHealth
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-400 transition duration-300 font-semibold text-xl">
            Home
          </Link>
          <Link to="/about" className="hover:text-indigo-400 transition duration-300 font-semibold text-xl">
            About
          </Link>
          <Link to="/AI" className="hover:text-indigo-400 transition duration-300 font-semibold text-xl">
            NeuraCare
          </Link>
          <Link to="/doctors" className="hover:text-indigo-400 transition duration-300 font-semibold text-xl">
            Contact-Doctor
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex space-x-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105"
              >
                Logout
              </button>
              <Link
                to="/AI"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 rounded transition-transform duration-300 hover:scale-105"
              >
                Try Now
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
