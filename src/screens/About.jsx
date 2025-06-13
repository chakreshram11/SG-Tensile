import React from 'react';
import BannerImage from '../components/BannerImage';

const About = () => {
  return (
    <div className="pt-10 md:pt-16 bg-gray-100">
      <BannerImage
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
        alt="Our Work Banner"
        className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] md:min-h-screen w-full object-cover"
      />
      
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              About SG Tensiles
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              SG Tensiles offers a complete service from concept to installation, tailored to meet the individual needs of every client.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-12">
            <div className="space-y-10 md:space-y-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase mb-4 md:mb-6 tracking-wide">
                  Our Services
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  SG Tensiles provides full-service project support from initial design concepts through to final installation. Whether you're an architect, engineer, builder, or owner, we offer a customized scope to ensure successful project execution.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 uppercase mb-3 md:mb-4">
                  Design
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  We provide assistance from the beginning of your project and can provide tensile concepts and advice on system selection. Custom fitting design can be undertaken to ensure a perfect fit and structural analysis provided when necessary. We can work alongside your consultants or take on the whole scope of the project through to delivery.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 uppercase mb-3 md:mb-4">
                  Supply
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Tensile has a wide network of suppliers from across the globe to source the best products for our projects. Our products include: stainless steel wire, tension cable and rods, and tensile mesh. You will find catalogs on the product page of this website. Tensile is able to provide the necessary fabrication for any custom component you require for specialized projects.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 uppercase mb-3 md:mb-4">
                  Construction
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  With our team of qualified installers, we are able to provide method statements, project management, and coordination through to installation and certification. Using elevated work platforms to twin rope access, we have all installation requirements covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center uppercase mb-8 md:mb-12 tracking-wide">
            Our Philosophy
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 space-y-5 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              We believe that good buildings are created by strong communication and collaboration. A successful building project is one that:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4 sm:pl-6">
              <li>Has the design concepts and goals influencing every stage of decision-making.</li>
              <li>Integrates systems effectively to achieve maximum efficiency.</li>
              <li>Creates measurable positive outcomes for the client and building users.</li>
            </ul>
            <p className="border-t border-gray-200 pt-4 sm:pt-6">
              SG Tensiles is genuinely passionate about tensile architecture. The motivation to design and build creative solutions keeps us inspired. We always strive to understand the unique influencing factors of each project so that we can meet our clients' exact needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;