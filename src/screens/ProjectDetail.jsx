// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../firebase';

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const docRef = doc(db, 'projects', id);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//           setProject({ id: docSnap.id, ...docSnap.data() });
//         } else {
//           console.error('No such project!');
//         }
//       } catch (error) {
//         console.error('Error fetching project:', error);
//       }
//       setLoading(false);
//     };
//     fetchProject();
//   }, [id]);

//   if (loading) return <div>Loading...</div>;
//   if (!project) return <div>Project not found</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">{project.title}</h1>
//       <img src={project.image} alt={project.title} className="w-full max-w-md my-4" />
//       <p><strong>Type:</strong> {project.type}</p>
//       <p><strong>Use:</strong> {project.use}</p>
//       <p><strong>Location:</strong> {project.location}</p>
//     </div>
//   );
// };

// export default ProjectDetails;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const fallbackImage = 'https://via.placeholder.com/600x600.png?text=Image+Not+Available';

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, 'projects', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProject({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error('No such project!');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
      setLoading(false);
    };
    fetchProject();
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const handleImageClick = (image) => {
    setSelectedImage(image || fallbackImage);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div
          className="h-10 w-10 sm:h-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"
          role="status"
          aria-label="Loading project"
        ></div>
        <p className="mt-4 text-base sm:text-lg font-medium text-gray-700">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="bg-red-50 text-red-600 text-center py-4 sm:py-6 px-6 sm:px-8 rounded-xl shadow-md max-w-xs sm:max-w-md w-full">
          <p className="text-base sm:text-lg font-medium">Project not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 sm:mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Explore our {project.type.toLowerCase()} project in {project.location}.
          </p>
        </header>

        {/* First Image */}
        {project.images && project.images.length > 0 ? (
          <div className="mb-8 sm:mb-12">
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              onClick={() => handleImageClick(project.images[0])}
            >
              <img
                src={project.images[0] || fallbackImage}
                alt={`${project.title} featured view`}
                className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  console.warn(`Failed to load image: ${project.images[0]}`);
                  e.target.src = fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 sm:p-6">
                <span className="text-white text-sm sm:text-base font-semibold bg-indigo-600/50 px-3 py-1 rounded-full">
                  Featured Image
                </span>
              </div>
            </div>
          </div>
        ) : null}

        {/* Project Details */}
        <div className="mb-8 sm:mb-12 bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 transform hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Project Details</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div>
              <dt className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">Type</dt>
              <dd className="mt-1 text-base sm:text-lg text-gray-900 font-medium">{project.type}</dd>
            </div>
            <div>
              <dt className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">Use</dt>
              <dd className="mt-1 text-base sm:text-lg text-gray-900 font-medium">{project.use}</dd>
            </div>
            <div>
              <dt className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">Location</dt>
              <dd className="mt-1 text-base sm:text-lg text-gray-900 font-medium">{project.location}</dd>
            </div>
          </dl>
        </div>

        {/* Image Gallery (Remaining Images) */}
        {project.images && project.images.length > 1 ? (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image || fallbackImage}
                    alt={`${project.title} view ${index + 2}`}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      console.warn(`Failed to load image: ${image}`);
                      e.target.src = fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-3 sm:p-4">
                    <span className="text-white text-xs sm:text-sm font-semibold bg-indigo-600/50 px-2 sm:px-3 py-1 rounded-full">
                      View {index + 2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-8 sm:mb-12 bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center">
            <p className="text-gray-500 text-sm sm:text-base">No additional images available.</p>
          </div>
        )}

        {/* Description Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 transform hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">Project Description</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            {project.description || 'No description available.'}
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl w-full h-[80vh] sm:h-[85vh] flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
              onError={(e) => {
                console.warn(`Failed to load modal image: ${selectedImage}`);
                e.target.src = fallbackImage;
              }}
            />
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors"
              onClick={handleCloseModal}
              aria-label="Close image modal"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;