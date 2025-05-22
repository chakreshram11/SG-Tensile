// import React from 'react';
// import BannerImage from '../components/BannerImage';

// const OurJourney = () => {
//   return (
//     <div className="pt-16">
//       <BannerImage
//         src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
//         alt="Our Work Banner"
//       />
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h1 className="text-4xl font-bold mb-4">Our Journey</h1>
//             <p className="text-xl text-gray-600">
//               In the dynamic world of construction, Tensile was founded in 2010 by Peter Bottero with a clear vision: to explore the potential of tensile architecture and introduce innovative solutions to the industry.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Growth and Collaboration</h2>
//               <p className="text-gray-600 mb-4">
//                 Over the past decade, Tensile has become known for its contribution to the construction industry, offering comprehensive solutions that elevate standard practices. Our growth from humble beginnings to a robust team of architects, builders, and engineers reflects our collective drive to explore new design and construction frontiers.
//               </p>
//               <p className="text-gray-600">
//                 We pride ourselves on our unique approach, uniting a diverse range of professionals and skills to deliver exceptional results.
//               </p>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold mb-6">The Power of Teamwork</h2>
//               <p className="text-gray-600">
//                 At Tensile, collaboration is the foundation of our success. We engage closely with architects, builders, and property owners, embracing diverse perspectives to create meaningful and resonant spaces. We believe that effective communication is key to achieving great outcomes.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Tailored Solutions</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Barriers',
//                 description: 'Integrating Safety and Design: We specialize in designing protective barriers for the educational, commercial, and infrastructure sectors that ensure safety while complementing the architectural aesthetics. Projects like the Melbourne School of Design and Liverpool Hospital Carpark showcase our commitment to providing comprehensive solutions from concept to completion.'
//               },
//               {
//                 title: 'Green Facades',
//                 description: 'Embracing Sustainability: Tensile has been a key player in the green facade movement, integrating sustainability into our projects to create spaces that are both beautiful and environmentally responsible. Our work on notable projects such as One Central Park and Platinum Towers exemplifies our dedication to pushing the boundaries of green infrastructure.'
//               },
//               {
//                 title: 'Art and Catenary Lighting',
//                 description: 'Creative Illumination: Our collaboration with artists in projects like Steam Mill Lane and 121 Clarence St reflects our commitment to innovative lighting solutions that enhance both art and architecture, always starting with understanding the project’s intent to provide the most fitting solution.'
//               }
//             ].map((solution, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md p-6">
//                 <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
//                 <p className="text-gray-600">{solution.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold mb-6">Commitment to Excellence</h2>
//             <p className="text-gray-600 mb-4">
//               In each project, we apply a philosophy centered on finding the optimal balance between aesthetics and functionality. Our team’s vast experience and knowledge ensure that our structures are not only durable but also enrich the human experience.
//             </p>
//             <h2 className="text-3xl font-bold mb-6 mt-8">Looking Forward</h2>
//             <p className="text-gray-600">
//               Reflecting on our journey from a single vision to becoming a leader in tensile architecture, we’re excited about the future. We invite you to join us as we continue to explore innovative solutions in protective barriers, green facades, and artful lighting across Australia, New Zealand, and beyond. With Tensile, every project is an opportunity to discover new possibilities.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurJourney;

import React from 'react';
import BannerImage from '../components/BannerImage';

const OurJourney = () => {
  return (
    <div className="pt-16 min-h-screen">
      <BannerImage
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
        alt="Our Journey Banner"
        className="w-full h-auto"
      />
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-full sm:max-w-2xl md:max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Our Journey</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              In the dynamic world of construction, Tensile was founded in 2010 by Peter Bottero with a clear vision: to explore the potential of tensile architecture and introduce innovative solutions to the industry.
            </p>
          </div>

          <div className="px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Growth and Collaboration</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Over the past decade, Tensile has become known for its contribution to the construction industry, offering comprehensive solutions that elevate standard practices. Our growth from humble beginnings to a robust team of architects, builders, and engineers reflects our collective drive to explore new design and construction frontiers.
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  We pride ourselves on our unique approach, uniting a diverse range of professionals and skills to deliver exceptional results.
                </p>
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">The Power of Teamwork</h2>
                <p className="text-sm sm:text-base text-gray-600">
                  At Tensile, collaboration is the foundation of our success. We engage closely with architects, builders, and property owners, embracing diverse perspectives to create meaningful and resonant spaces. We believe that effective communication is key to achieving great outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12">Tailored Solutions</h2>
          <div className="px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: 'Barriers',
                  description: 'Integrating Safety and Design: We specialize in designing protective barriers for the educational, commercial, and infrastructure sectors that ensure safety while complementing the architectural aesthetics. Projects like the Melbourne School of Design and Liverpool Hospital Carpark showcase our commitment to providing comprehensive solutions from concept to completion.',
                },
                {
                  title: 'Green Facades',
                  description: 'Embracing Sustainability: Tensile has been a key player in the green facade movement, integrating sustainability into our projects to create spaces that are both beautiful and environmentally responsible. Our work on notable projects such as One Central Park and Platinum Towers exemplifies our dedication to pushing the boundaries of green infrastructure.',
                },
                {
                  title: 'Art and Catenary Lighting',
                  description: 'Creative Illumination: Our collaboration with artists in projects like Steam Mill Lane and 121 Clarence St reflects our commitment to innovative lighting solutions that enhance both art and architecture, always starting with understanding the project’s intent to provide the most fitting solution.',
                },
              ].map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{solution.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-full sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Commitment to Excellence</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              In each project, we apply a philosophy centered on finding the optimal balance between aesthetics and functionality. Our team’s vast experience and knowledge ensure that our structures are not only durable but also enrich the human experience.
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 mt-6 sm:mt-8">Looking Forward</h2>
            <p className="text-sm sm:text-base text-gray-600">
              Reflecting on our journey from a single vision to becoming a leader in tensile architecture, we’re excited about the future. We invite you to join us as we continue to explore innovative solutions in protective barriers, green facades, and artful lighting across Australia, New Zealand, and beyond. With Tensile, every project is an opportunity to discover new possibilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurJourney;