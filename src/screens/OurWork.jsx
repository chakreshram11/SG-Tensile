import React from 'react';
import BannerImage from '../components/BannerImage';

const OurWork = () => {
  return (
    <div className="mt-9 pt-8">
        <BannerImage
        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
        alt="Our Work Banner"
      />
      <h1 className="text-3xl font-bold text-gray-800">Our Work</h1>
      <p className="mt-4 text-gray-600">This is the Our Work page.</p>
    </div>
  );
};

export default OurWork;