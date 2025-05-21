import React from 'react';


const Consultancy = () => {
  const images = [
    'https://images.unsplash.com/photo-1563832605-2d1054962d84', // Example image 1
    'https://images.unsplash.com/photo-1578282293123-6f1f67f890c6', // Example image 2
    'https://images.unsplash.com/photo-1582281713807-68a6fcdc91c4'  // Example image 3
  ];

  return (
    <div className="pt-20">
     
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Consultancy Service</h1>
            <p className="text-xl text-gray-600">
              We bring your design to life with expert consultancy in tensile architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={images[0]}
                alt="Design Consultancy"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mt-2 mb-3">Design Consultancy</h3>
                <p className="text-gray-600">
                  We blend creativity with technology to produce your tensile structure, working with you
                  to bring your perfect design to life.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={images[1]}
                alt="Structural Analysis"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mt-2 mb-3">Structural Analysis</h3>
                <p className="text-gray-600">
                  Our engineers will collaborate with your consultants to perform technical analysis for your project.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={images[2]}
                alt="Site Supervision"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mt-2 mb-3">Site Supervision & Installation</h3>
                <p className="text-gray-600">
                  We will supervise and manage your project’s installation from start to finish, ensuring seamless coordination.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-600">
              For more information, please call 02 9999 3668, or send a message via our contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultancy;
