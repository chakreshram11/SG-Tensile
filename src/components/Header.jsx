// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { to: '/', text: 'Home' },
//     { to: '/about', text: 'About' },
//     { to: '/products', text: 'Products' },
//     { to: '/services', text: 'Services' },
//     { to: '/ourwork', text: 'OurWork' },
//     { to: '/blogs', text: 'Blogs' },
//     { to: '/consultancy', text: 'Consultancy' },
//     { to: '/contact', text: 'Contact' },
//   ];

//   return (
//     <eader className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           <Link 
//             to="/" 
//             className="text-2xl font-semibold text-indigo-700 tracking-tight hover:text-indigo-800 transition-colors duration-200"
//           >
//             CompanyName
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.text}
//                 to={link.to}
//                 className="px-4 py-2 text-gray-700 text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-all duration-200 ease-in-out"
//               >
//                 {link.text}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-700 hover:text-indigo-700 transition-colors duration-200"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div 
//           className={`md:hidden transition-all duration-300 ease-in-out ${
//             isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
//           }`}
//         >
//           <div className="flex flex-col space-y-3 pt-6 pb-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.text}
//                 to={link.to}
//                 className="px-4 py-2 text-gray-700 text-base font-medium hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-all duration-200"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.text}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </eader>
//   );
// };

// export default Header;

// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, ChevronDown } from 'lucide-react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const navLinks = [
//     { to: '/', text: 'Home' },
//     {
//       to: '/about',
//       text: 'About',
//       subLinks: [
//         { to: '/about', text: 'About Tensile' },
//         { to: '/about/ourteam', text: 'Our Team' },
//         { to: '/about/ourjourney', text: 'Our Journey' },
//       ],
//     },
//     { to: '/products', text: 'Products' },
//     { to: '/services', text: 'Services' },
//     { to: '/ourwork', text: 'OurWork' },
//     { to: '/blogs', text: 'Blogs' },
//     { to: '/consultancy', text: 'Consultancy' },
//     { to: '/contact', text: 'Contact' },
//   ];

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsAboutDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
//       <nav className="container mx-auto px-6 py-4">
//         <div className="flex justify-between items-center">
//           <Link
//             to="/"
//             className="text-2xl font-semibold text-indigo-700 tracking-tight hover:text-indigo-800 transition-colors duration-200"
//           >
//             CompanyName
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <div key={link.text} className="relative" ref={link.text === 'About' ? dropdownRef : null}>
//                 {link.subLinks ? (
//                   <>
//                     <button
//                       className="px-4 py-2 text-gray-700 text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-all duration-200 flex items-center"
//                       onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
//                     >
//                       {link.text}
//                       <ChevronDown size={16} className="ml-1" />
//                     </button>
//                     {isAboutDropdownOpen && (
//                       <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
//                         {link.subLinks.map((subLink) => (
//                           <Link
//                             key={subLink.text}
//                             to={subLink.to}
//                             className="block px-4 py-2 text-gray-700 text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-all duration-200"
//                             onClick={() => setIsAboutDropdownOpen(false)}
//                           >
//                             {subLink.text}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={link.to}
//                     className="px-4 py-2 text-gray-700 text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-all duration-200"
//                   >
//                     {link.text}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-700 hover:text-indigo-700 transition-colors duration-200"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`md:hidden transition-all duration-300 ease-in-out ${
//             isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
//           }`}
//         >
//           <div className="flex flex-col space-y-3 pt-6 pb-4">
//             {navLinks.map((link) => (
//               <div key={link.text}>
//                 {link.subLinks ? (
//                   <>
//                     <button
//                       className="w-full px-4 py-2 text-gray-700 text-base font-medium hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-all duration-200 flex items-center justify-between"
//                       onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
//                     >
//                       {link.text}
//                       <ChevronDown size={16} className={`${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
//                     </button>
//                     {isAboutDropdownOpen && (
//                       <div className="pl-4 flex flex-col space-y-2 mt-2">
//                         {link.subLinks.map((subLink) => (
//                           <Link
//                             key={subLink.text}
//                             to={subLink.to}
//                             className="px-4 py-2 text-gray-700 text-base font-medium hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-all duration-200"
//                             onClick={() => {
//                               setIsOpen(false);
//                               setIsAboutDropdownOpen(false);
//                             }}
//                           >
//                             {subLink.text}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     to={link.to}
//                     className="px-4 py-2 text-gray-700 text

// -base font-medium hover:bg-indigo-50 hover:text-indigo-700 rounded-lg transition-all duration-200"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {link.text}
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false); // For mobile submenu

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
    { to: '/ourwork', text: 'OurWork' },
    { to: '/blogs', text: 'Blogs' },
    { to: '/consultancy', text: 'Consultancy' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-700 hover:text-indigo-800"
          >
            CompanyName
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.text} className="relative group">
                  <button className="flex items-center text-gray-700 text-sm font-medium px-3 py-2 hover:text-indigo-700">
                    {link.text}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className="absolute left-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.text}
                        to={subLink.to}
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-700 hover:bg-gray-50"
                      >
                        {subLink.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.text}
                  to={link.to}
                  className="text-sm font-medium text-gray-700 px-3 py-2 hover:text-indigo-700"
                >
                  {link.text}
                </Link>
              )
            )}
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
          <div className="flex flex-col space-y-2 mt-4">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.text}>
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="flex justify-between items-center w-full px-4 py-2 text-gray-700 text-base font-medium hover:text-indigo-700"
                  >
                    {link.text}
                    <ChevronDown
                      className={`transition-transform ${
                        isAboutOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isAboutOpen && (
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
