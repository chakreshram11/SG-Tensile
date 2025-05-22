import React from 'react';

const BoxLinksSectionTwo = ({ boxes = [] }) => {
  // Filter description boxes for small screens
  const descriptionBoxes = boxes.filter((box) => box.type === 'link');

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Small Screen: Show only description boxes */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1">
            {descriptionBoxes.length > 0 ? (
              descriptionBoxes.map((box, index) => (
                <div key={index} className="relative group overflow-hidden rounded-none">
                  <div className="relative aspect-[3/2] bg-gray-200 flex flex-col justify-center items-start p-4 sm:p-5">
                    <h2 className="text-lg sm:text-xl font-semibold text-black mb-2 tracking-wide">
                      {box.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-black/90 max-w-xs line-clamp-4">
                      {box.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-black/90">No description boxes available.</p>
            )}
          </div>
        </div>

        {/* Medium and Larger Screens: Custom layout */}
        <div className="hidden md:block">
          {/* Top Row: Square (image) left, Rectangle (description) right */}
          <div className="grid grid-cols-3">
            {boxes.slice(0, 2).map((box, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-none ${
                  index === 0 ? 'col-span-1 aspect-[1/1]' : 'col-span-2 aspect-[2/1]'
                }`}
              >
                {index === 0 && box.type === 'image' ? (
                  <div className="relative w-full h-full">
                    <img
                      src={box.image}
                      alt="Decorative"
                      className="w-full h-full object-cover rounded-none"
                      loading="lazy"
                    />
                  </div>
                ) : index === 1 && box.type === 'link' ? (
                  <div className="relative w-full h-full bg-gray-200 flex flex-col justify-center items-start p-4 sm:p-5 md:p-5">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black mb-2 tracking-wide">
                      {box.title}
                    </h2>
                    <p className="text-[10px] sm:text-xs md:text-sm text-black/90 max-w-md line-clamp-5">
                      {box.description}
                    </p>
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-black/90">Invalid box type</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Row: Square (description) left, Rectangle (image, big) right */}
          <div className="grid grid-cols-3">
            {boxes.slice(2, 4).map((box, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-none ${
                  index === 0 ? 'col-span-1 aspect-[1/1]' : 'col-span-2 aspect-[2/1]'
                }`}
              >
                {index === 0 && box.type === 'link' ? (
                  <div className="relative w-full h-full bg-gray-200 flex flex-col justify-center items-start p-4 sm:p-5 md:p-5">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black mb-2 tracking-wide">
                      {box.title}
                    </h2>
                    <p className="text-[10px] sm:text-xs md:text-sm text-black/90 max-w-xs line-clamp-3">
                      {box.description}
                    </p>
                  </div>
                ) : index === 1 && box.type === 'image' ? (
                  <div className="relative w-full h-full">
                    <img
                      src={box.image}
                      alt="Decorative"
                      className="w-full h-full object-cover rounded-none"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
                    <p className="text-black/90">Invalid box type</p>
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

export default BoxLinksSectionTwo;