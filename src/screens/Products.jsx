import React, { useState } from 'react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      title: 'Tensile Outdoor Pavilion',
      description: 'Elegant pavilion for outdoor spaces',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Outdoor+Pavilion'
    },
    {
      title: 'Tensile Garden Shelter',
      description: 'Protective shelter for garden areas',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Garden+Shelter'
    },
    {
      title: 'Tensile Entrance Awning',
      description: 'Stylish awning for building entrances',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Entrance+Awning'
    },
    {
      title: 'Tensile Poolside Cover',
      description: 'Durable cover for poolside areas',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Poolside+Cover'
    },
    {
      title: 'Tensile Stadium Roofing',
      description: 'Robust roofing for stadiums',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Stadium+Roofing'
    },
    {
      title: 'Tensile Courtyard Shade',
      description: 'Shade solution for courtyards',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Courtyard+Shade'
    },
    {
      title: 'Tensile Terrace Canopy',
      description: 'Modern canopy for terraces',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Terrace+Canopy'
    },
    {
      title: 'Tensile Event Tent',
      description: 'Flexible tent for events',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Event+Tent'
    },
    {
      title: 'Canopy Tensile Structures',
      description: 'Versatile canopy systems providing shade and aesthetic appeal for outdoor spaces',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Canopy+Tensile'
    },
    {
      title: 'Tensile Membrane Cones',
      description: 'Conical fabric structures offering unique architectural forms for open areas',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Membrane+Cones'
    },
    {
      title: 'Tensile Membrane Car Parking',
      description: 'Durable fabric shelters protecting vehicles from weather elements',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Car+Parking'
    },
    {
      title: 'Tensile Fabric Pavilions',
      description: 'Elegant temporary or permanent pavilions for events and gatherings',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Fabric+Pavilions'
    },
    {
      title: 'Shade Sail Structures',
      description: 'Stylish fabric sails providing flexible shade solutions for public spaces',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Shade+Sails'
    },
    {
      title: 'Tensile Roof Systems',
      description: 'Innovative roofing solutions combining strength and lightweight design',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Tensile+Roof'
    },
    {
      title: 'Fabric Canopy Walkways',
      description: 'Covered walkways enhancing pedestrian pathways with fabric elegance',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Canopy+Walkways'
    },
    {
      title: 'Tensile Membrane Domes',
      description: 'Dome-shaped fabric structures for large-scale enclosures and events',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Membrane+Domes'
    },
    {
      title: 'Outdoor Tensile Arenas',
      description: 'Spacious tensile structures for outdoor sports and entertainment venues',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Tensile+Arenas'
    },
    {
      title: 'Tensile Commercial Facade',
      description: 'Innovative facade for commercial buildings enhancing aesthetic and functionality',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Commercial+Facade'
    },
    {
      title: 'Modular Tensile Shelters',
      description: 'Customizable modular shelters for temporary or permanent applications',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Modular+Shelters'
    },
    {
      title: 'Tensile Membrane Gazebos',
      description: 'Elegant fabric gazebos for gardens and outdoor relaxation areas',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Membrane+Gazebos'
    },
    {
      title: 'Fabric Tension Arches',
      description: 'Curved fabric arches creating dynamic architectural features',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Tension+Arches'
    },
    {
      title: 'Tensile Canopy Entrances',
      description: 'Striking entrance canopies enhancing building aesthetics and shelter',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Canopy+Entrances'
    },
    {
      title: 'Lightweight Tensile Roofs',
      description: 'Lightweight fabric roofs for cost-effective and durable coverings',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Lightweight+Roofs'
    },
    {
      title: 'Tensile Membrane Atriums',
      description: 'Translucent fabric atriums allowing natural light in large interiors',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Membrane+Atriums'
    },
    {
      title: 'Fabric Shade Structures',
      description: 'Custom shade solutions for playgrounds, parks, and recreational areas',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Shade+Structures'
    },
    {
      title: 'Tensile Membrane Skylights',
      description: 'Fabric skylights providing diffused lighting for indoor spaces',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Membrane+Skylights'
    },
    {
      title: 'Portable Tensile Canopies',
      description: 'Easily deployable canopies for temporary events and exhibitions',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Portable+Canopies'
    },
    {
      title: 'Tension Fabric Stadium Covers',
      description: 'Large-scale fabric covers for stadiums ensuring weather protection',
      category: 'Tensile Structures',
      image: 'https://via.placeholder.com/300x200?text=Stadium+Covers'
    }
  ];

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="pt-4 sm:pt-8 md:pt-16">
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-4">
              Our Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Discover our latest tensile structure innovations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => handleCardClick(product)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-24 sm:h-32 md:h-36 object-cover"
                  onError={(e) => {
                    console.warn(`Failed to load image: ${product.image}`);
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                  }}
                />
                <div className="p-3 sm:p-4">
                  <span className="text-xs sm:text-sm font-semibold text-indigo-600">
                    {product.category}
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mt-1 sm:mt-2 mb-1 sm:mb-2 text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  <button className="mt-2 sm:mt-3 px-3 sm:px-4 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors text-xs sm:text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div className="bg-white rounded-xl shadow-xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full p-4 sm:p-6 relative">
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-800 transition-colors"
              onClick={handleCloseModal}
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg mb-3 sm:mb-4"
              onError={(e) => {
                console.warn(`Failed to load modal image: ${selectedProduct.image}`);
                e.target.src = 'https://via.placeholder.com/600x600?text=Image+Not+Available';
              }}
            />
            <span className="text-xs sm:text-sm font-semibold text-indigo-600">
              {selectedProduct.category}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-1 sm:mt-2 mb-2 sm:mb-3 text-gray-900">
              {selectedProduct.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{selectedProduct.description}</p>
            <button className="px-4 sm:px-6 py-1 sm:py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;