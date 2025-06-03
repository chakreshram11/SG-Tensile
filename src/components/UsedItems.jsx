import React from 'react';
import logoone from "../assets/logoone.png";
import logotwo from "../assets/logotwo.png";
import logothree from "../assets/logothree.jpg";
import logofour from "../assets/logofour.png";
import logofive from "../assets/logofive.png";
import logosix from "../assets/logosix.jpg"

function UsedItems() {
  const logos = [
    { src: logoone, alt: "Brookfield Multiplex" },
    { src: logotwo, alt: "Lendlease" },
    { src: logothree, alt: "Junglefy" },
    { src: logofour, alt: "Fytogreen" },
    { src: logofive, alt: "Fytogreen" },
    { src: logosix, alt: "Fytogreen" },
  ];

  // Duplicate the logos multiple times for a more "unlimited" feel
  const repeatedLogos = Array(5).fill(logos).flat(); // Repeat the logo set 5 times

  return (
    <div className="bg-gray-100 py-8 overflow-hidden">
      <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">Utilized Product Brands</h2>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex items-center space-x-8 mx-4 min-w-max">
            {repeatedLogos.map((logo, index) => (
              <div key={`logo-${index}`} className="flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          {/* Duplicate the entire set for seamless scrolling */}
          <div className="flex items-center space-x-8 mx-4 min-w-max">
            {repeatedLogos.map((logo, index) => (
              <div key={`logo-duplicate-${index}`} className="flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsedItems;