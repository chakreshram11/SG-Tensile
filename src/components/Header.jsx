import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/newlogo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside (for desktop)
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
    { to: '/ourwork', text: 'Our Work' },
    { to: '/products', text: 'Products' },
    { to: '/services', text: 'Services' },
    { to: '/blogs', text: 'Blogs' },
    { to: '/consultancy', text: 'Consultancy' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <nav className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex justify-between items-center h-10 xs:h-12 sm:h-14 md:h-16 lg:h-18 xl:h-22">
          <Link
            to="/"
            className="flex items-center"
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Company Logo"
              className="h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 w-auto object-contain mr-1 xs:mr-2 sm:mr-3"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 md:space-x-2 lg:space-x-3 xl:space-x-4">
            {navLinks.map((link) => (
              <div key={link.text} className="relative" ref={link.text === 'About' ? dropdownRef : null}>
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                      className="flex items-center px-2 md:px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 rounded-lg transition-all duration-200"
                      aria-haspopup="true"
                      aria-expanded={isAboutDropdownOpen}
                    >
                      {link.text}
                      <ChevronDown size={14} className="ml-1" />
                    </button>
                    {isAboutDropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-lg z-10 w-40 sm:w-48 border border-gray-100">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.text}
                            to={subLink.to}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700"
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
                    className="px-2 md:px-3 lg:px-4 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 focus:bg-indigo-50 focus:text-indigo-700 rounded-lg transition-all duration-200"
                  >
                    {link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-indigo-700 focus:text-indigo-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size='20' />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-1 px-2 sm:px-4 pb-4">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.text}>
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className="flex justify-between items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-700 focus:text-indigo-700"
                    aria-haspopup="true"
                    aria-expanded={isMobileAboutOpen}
                  >
                    {link.text}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isMobileAboutOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isMobileAboutOpen && (
                    <div className="ml-4 flex flex-col space-y-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.text}
                          to={subLink.to}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileAboutOpen(false);
                          }}
                          className="px-3 py-2 text-sm text-gray-600 hover:text-indigo-700 focus:text-indigo-700"
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
                  className="px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-700 focus:text-indigo-700"
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