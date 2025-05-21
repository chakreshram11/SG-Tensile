import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office Locations */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Sydney Office</h3>
            <p className="text-blue-600 hover:text-blue-800">
              <a href="tel:0299993668">02 9999 3668</a>
            </p>
            <p>PO Box 967,</p>
            <p>Mona Vale 2103 NSW</p>

            <div className="mt-8">
              <h3 className="font-semibold text-lg">Melbourne Office</h3>
              <p className="text-blue-600 hover:text-blue-800">
                <a href="tel:0433707703">0433 707 703</a>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/ourwork" className="hover:text-blue-600">Our Work</Link></li>
              <li><Link to="/consultancy" className="hover:text-blue-600">Consultancy</Link></li>
              <li><Link to="/awards" className="hover:text-blue-600">Awards</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
              <li><Link to="/faq" className="hover:text-blue-600">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter and Social */}
          <div className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
              <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full">
                SUBSCRIBE
              </button>
            </div>
            
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-600 hover:text-blue-600">
                <Facebook size={24} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={24} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-blue-600">
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-sm text-gray-600 text-center">
          <p>© Copyright 2025 Tensile Design & Construct | Site by Intervision Design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;