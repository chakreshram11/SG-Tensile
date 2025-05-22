import React from "react";
import { Link } from "react-router-dom";

const TensileMeshComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">

      {/* First Section with Link */}
      <Link to="/applications" className="text-center mb-8 hover:scale-105 transition-transform duration-300">
        <img
          src="/path-to-your-image.jpg" // Replace with actual image path
          alt="Tensile Mesh"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">Applications and Benefits of Tensile Mesh Systems</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Stainless steel tensile mesh systems are a lightweight form of architecture using a tensioned material formed from wire-rope cables. These systems can be used in a diverse range of
        </p>
      </Link>

      {/* Arrow to Applications */}
      <div className="flex justify-center mb-8">
        <Link to="/applications">
          <svg
            className="w-12 h-6 text-gray-600 hover:text-black transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>

      {/* Second Section with Link */}
      <Link to="/projects" className="text-center mb-8 hover:scale-105 transition-transform duration-300">
        <img
          src="/path-to-your-image.jpg" // Replace with actual image path
          alt="Architectural Projects"
          className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">5 Tensile Architectural Projects Transforming Urban Spaces</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Tensile architecture projects such as barriers on bridges and elevated walkways can provide people with an open-air experience in complete safety. But they can go even further by transforming
        </p>
      </Link>

      {/* Arrow to Projects */}
      <div className="flex justify-center mb-8">
        <Link to="/transforming-urban-sapces">
          <svg
            className="w-12 h-6 text-gray-600 hover:text-black transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>

      {/* Latest News Button */}
      <Link to="/blogs">
        <button className="border-2 border-black px-6 py-2 text-lg font-semibold hover:bg-black hover:text-white transition">
          LATEST NEWS
        </button>
      </Link>
    </div>
  );
};

export default TensileMeshComponent;
