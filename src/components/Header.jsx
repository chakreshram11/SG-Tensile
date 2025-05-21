import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/products', text: 'Products' },
    { to: '/services', text: 'Services' },
    { to: '/ourwork', text: 'OurWork' },
    { to: '/blogs', text: 'Blogs' },
    { to: '/consultancy', text: 'Consultancy' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-semibold text-indigo-700 tracking-tight hover:text-indigo-800 transition-colors duration-200"
          >
            CompanyName
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.to}
                className="px-4 py-2 text-gray-700 text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-all duration-200 ease-in-out"
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-indigo-700 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-3 pt-6 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.to}
                className="px-4 py-2 text-gray-700 text-base font-medium hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;