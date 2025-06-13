import React, { useState } from 'react';
import BannerImage from '../components/BannerImage';

const Consultancy = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Design Innovation',
      description: 'To get the best for architectural Structure. We offer client the design and Innovation',
      image: 'https://images.unsplash.com/photo-1563832605-2d1054962d84',
    },
    {
      title: 'Design & Engineering',
      description: 'To get the best connection detail & cutting system. We treat every job deatil Engineering. ',
      image: 'https://images.unsplash.com/photo-1578282293123-6f1f67f890c6',
    },
    {
      title: 'Fabrication',
      description: 'With manual plotter & Cutting we can assure you that the job has been completed accuately.',
      image: 'https://images.unsplash.com/photo-1582281713807-68a6fcdc91c4',
    },
    {
      title: 'Design Consultancy',
      description: 'We blend creativity and engineering to craft innovative tensile structures, collaborating closely to realize your vision.',
      image: 'https://images.unsplash.com/photo-1563832605-2d1054962d84',
    },
    {
      title: 'Structural Analysis',
      description: 'Our expert engineers perform detailed technical analysis to ensure the safety and stability of your tensile projects.',
      image: 'https://images.unsplash.com/photo-1578282293123-6f1f67f890c6',
    },
    {
      title: 'Installation',
      description: 'Our skilled installation team delivers precise and efficient setup of tensile structures, ensuring quality and safety.',
      image: 'https://images.unsplash.com/photo-1582281713807-68a6fcdc91c4',
    },
    {
      title: 'Regular Maintenance',
      description: 'We provide ongoing maintenance services to keep your tensile structures in optimal condition, extending their lifespan.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
    },
    {
      title: 'Periodic Maintenance',
      description: 'Scheduled inspections and upkeep ensure your tensile structures remain safe, functional, and visually appealing.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f',
    },
    {
      title: 'Tensile Fabric Restoration',
      description: 'Our specialists repair tears, UV damage, or wear in tensile fabrics, restoring durability and aesthetics.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },
    {
      title: 'Integrity Bolt, Nuts, Studs & Sling Services',
      description: 'We inspect and repair bolts and fittings to maintain the structural integrity of your tensile installations.',
      image: 'https://images.unsplash.com/photo-1612277795550-977ba8f6f702',
    },
    {
      title: 'Inspection',
      description: 'Comprehensive inspections identify potential issues in tensile structures, ensuring safety and compliance.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    },
    {
      title: 'Structural Surface Specialists Services',
      description: 'We apply high-quality coatings to protect and enhance the appearance of tensile structure frameworks.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356847',
    },
  ];

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="pt-4 sm:pt-8 md:pt-16">
      <BannerImage
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
        alt="Our Work Banner"
      />
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-4">
              Consultancy Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              We bring your design to life with expert consultancy in tensile architecture
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => handleCardClick(service)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-24 sm:h-32 md:h-36 object-cover"
                  onError={(e) => {
                    console.warn(`Failed to load image: ${service.image}`);
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                  }}
                />
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mt-1 sm:mt-2 mb-1 sm:mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{service.description}</p>
                  <button className="mt-2 sm:mt-3 px-3 sm:px-4 py-1 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors text-xs sm:text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
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
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg mb-3 sm:mb-4"
              onError={(e) => {
                console.warn(`Failed to load modal image: ${selectedService.image}`);
                e.target.src = 'https://via.placeholder.com/600x600?text=Image+Not+Available';
              }}
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-1 sm:mt-2 mb-2 sm:mb-3 text-gray-900">
              {selectedService.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{selectedService.description}</p>
            <button className="px-4 sm:px-6 py-1 sm:py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors text-sm sm:text-base">
              Learn More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consultancy;