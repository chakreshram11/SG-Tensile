import React from 'react';

const BannerImage = ({ src, alt }) => {
  return (
    <div className="w-full h-[33vh] overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default BannerImage;