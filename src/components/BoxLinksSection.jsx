import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BoxLinksSection = ({ boxes }) => {
  // Filter link boxes for small screens
  const linkBoxes = boxes.filter((box) => box.type === 'link');

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Small Screen: Show only link boxes */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-4">
            {linkBoxes.map((box, index) => (
              <div key={index} className="relative group overflow-hidden rounded-none">
                <Link to={box.link}>
                  <div className="relative aspect-[3/2] bg-gray-200 flex flex-col justify-center items-start p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-semibold text-black mb-2 tracking-wide">
                      {box.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-black/90 max-w-xs">
                      {box.description}
                    </p>
                    <div className="flex items-center mt-3">
                      <ArrowRight
                        className="text-black transform transition-transform duration-300 group-hover:translate-x-2"
                        size={20}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Medium and Larger Screens: Show all boxes */}
        <div className="hidden md:block">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {boxes.slice(0, 3).map((box, index) => (
              <div key={index} className="relative group overflow-hidden rounded-none">
                {box.type === 'link' ? (
                  <Link to={box.link}>
                    <div className="relative aspect-[1/1] bg-gray-200 flex flex-col justify-center items-start p-4 sm:p-6 md:p-6">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2 tracking-wide">
                        {box.title}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base text-black/90 max-w-xs">
                        {box.description}
                      </p>
                      <div className="flex items-center mt-3">
                        <ArrowRight
                          className="text-black transform transition-transform duration-300 group-hover:translate-x-2"
                          size={20}
                        />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative aspect-[1/1]">
                    <img
                      src={box.image}
                      alt="Decorative"
                      className="w-full h-full object-cover rounded-none"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {boxes.slice(3, 6).map((box, index) => (
              <div key={index} className="relative group overflow-hidden rounded-none">
                {box.type === 'link' ? (
                  <Link to={box.link}>
                    <div className="relative aspect-[1/1] bg-gray-200 flex flex-col justify-center items-start p-4 sm:p-6 md:p-6">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2 tracking-wide">
                        {box.title}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base text-black/90 max-w-xs">
                        {box.description}
                      </p>
                      <div className="flex items-center mt-3">
                        <ArrowRight
                          className="text-black transform transition-transform duration-300 group-hover:translate-x-2"
                          size={20}
                        />
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative aspect-[1/1]">
                    <img
                      src={box.image}
                      alt="Decorative"
                      className="w-full h-full object-cover rounded-none"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoxLinksSection;