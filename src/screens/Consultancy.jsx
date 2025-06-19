import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust path to your Firebase config


const Consultancy = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, 'consultancy'));
        const servicesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title || 'Untitled Service',
          description: doc.data().description || 'No description available.',
          image: doc.data().image_urls?.[0] || 'https://via.placeholder.com/300x200?text=Image+Not+Available',
          category: doc.data().category || 'Consultancy', // Fallback category
        }));
        setServices(servicesData);
        setError(null);
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Failed to load services. Please try again later.');
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = (e) => {
    if (e.target.id === 'modal-overlay') {
      setSelectedService(null);
    }
  };

  return (
    <div className="pt-4 sm:pt-8 md:pt-16">
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

          {loading && (
            <div className="text-center text-gray-600">Loading services...</div>
          )}
          {error && (
            <div className="text-center text-red-600">{error}</div>
          )}
          {!loading && !error && services.length === 0 && (
            <div className="text-center text-gray-600">No services available.</div>
          )}
          {!loading && !error && services.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow hover:shadow-2xl transition-transform transform hover:-translate-y-1 cursor-pointer border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => handleCardClick(service)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick(service)}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-t-xl"
                    onError={(e) => {
                      console.warn(`Failed to load image: ${service.image}`);
                      e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
                    }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mt-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedService && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-3xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedService(null)}
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-64 sm:h-80 object-cover rounded-t-xl"
              onError={(e) => {
                console.warn(`Failed to load modal image: ${selectedService.image}`);
                e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Available';
              }}
            />
            <div className="p-6">
              <span className="text-sm text-indigo-600 font-medium uppercase">
                {selectedService.category}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                {selectedService.title}
              </h2>
              <p className="mt-2 text-gray-700 text-sm sm:text-base">
                {selectedService.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Consultancy;