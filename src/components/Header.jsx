import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside (for desktop dropdown)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    {
      text: 'About',
      subLinks: [
        { to: '/about', text: 'About' },
        { to: '/about/ourjourney', text: 'Our Journey' },
        { to: '/about/ourteam', text: 'Our Team' },
      ],
    },
    { to: '/products', text: 'Products' },
    { to: '/services', text: 'Services' },
    { to: '/ourwork', text: 'Our Work' },
    { to: '/blogs', text: 'Blogs' },
    { to: '/consultancy', text: 'Consultancy' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <nav className="max-w-screen-xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-semibold text-indigo-700 tracking-tight hover:text-indigo-800"
          >
            CompanyName
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <div key={link.text} className="relative" ref={link.text === 'About' ? dropdownRef : null}>
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                      className="flex items-center px-4 py-2 text-gray-700 text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-all duration-200"
                    >
                      {link.text}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {isAboutDropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg z-10 w-48">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.text}
                            to={subLink.to}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                            onClick={() => setIsAboutDropdownOpen(false)}
                          >
                            {subLink.text}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition"
                  >
                    {link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-indigo-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col mt-4 space-y-2">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.text}>
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className="flex justify-between items-center w-full px-4 py-2 text-gray-700 text-base font-medium hover:text-indigo-700"
                  >
                    {link.text}
                    <ChevronDown
                      className={`transition-transform ${
                        isMobileAboutOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isMobileAboutOpen && (
                    <div className="ml-4 mt-1 flex flex-col space-y-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.text}
                          to={subLink.to}
                          onClick={() => setIsOpen(false)}
                          className="px-4 py-1 text-gray-600 text-sm hover:text-indigo-700"
                        >
                          {subLink.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.text}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-700 text-base font-medium hover:text-indigo-700"
                >
                  {link.text}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;