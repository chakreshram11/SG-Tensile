import React from 'react';


function About() {
  return (
    <div className="pt-10 min-h-screen bg-gray-50">
      <div className='px-4 py-10 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto mt-10'>
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 text-center leading-tight">
        Welcome to SG Tensile
      </h1>

      <div className="space-y-6 text-gray-800 text-base md:text-lg leading-relaxed">
        <p>
          <span className="font-semibold">SG Tensile</span> is a leading manufacturer specializing in all types of tensile and fabric structures. Our offerings include rooftops, awnings, German hangars, car parking shades, pyramid tents, Arabian tents, and a wide variety of shade structures that enhance the aesthetics and ambiance of any space.
        </p>
        <p>
          We provide <span className="font-medium text-blue-700">customized solutions</span> tailored to the construction area's specifications and the individual preferences of our customers.
        </p>
        <p>
          At SG Tensile, we prioritize <span className="font-medium text-blue-700">quality</span> and <span className="font-medium text-blue-700">customer satisfaction</span>—these are the cornerstones of our service and success.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Why Choose Fabric Structures?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg leading-relaxed">
          <li><strong>Aesthetic Appeal</strong> – Sleek, modern look that enhances visual surroundings</li>
          <li><strong>Long Spans</strong> – Maximize usable space with high ceilings and minimal supports</li>
          <li><strong>Portability</strong> – Easily relocated and reusable with nut-and-bolt assembly</li>
          <li><strong>Quick Installation</strong> – Lightweight and quick to install</li>
          <li><strong>Low Maintenance</strong> – Dust-resistant and washable with soap and water</li>
          <li><strong>High Durability</strong> – Weather-resistant and flame-retardant fabrics</li>
          <li><strong>UV Resistance</strong> – Excellent protection from UV rays</li>
          <li><strong>Eco-Friendly</strong> – Fully recyclable structures</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Our Expertise</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-base md:text-lg">
          {[
            'Tensile Structures',
            'Membrane Tents',
            'Marquee Tents',
            'Arabian & Pyramid Tents',
            'Car Parking Shades',
            'Nylon Tarpaulin Canvas',
            'PE Plastic Canvas',
            'Lorry Canvas with Iron Metal Frames',
            'Outdoor Umbrellas',
            'Aluminum Structure Frames',
            'Iron & Stainless Steel Fabrication',
            'Tensile Awnings & Canopy Frames',
            'Retractable Awnings',
            'Underlayers',
            'Banquet Chair & Table Covers',
            'Decorative Scallops'
          ].map((item, index) => (
            <li key={index} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 text-gray-800 text-base md:text-lg font-medium text-center">
        Contact <span className="text-blue-700 font-semibold">SG Tensile</span> for innovative, durable, and stylish solutions that bring both function and flair to your space.
      </div>
      </div>
    </div>
  );
}

export default About;
