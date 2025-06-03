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

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div
          className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"
          role="status"
          aria-label="Loading project"
        ></div>
        <p className="mt-4 text-lg font-medium text-gray-600">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-red-50 text-red-600 text-center py-6 px-8 rounded-xl shadow-sm max-w-md w-full">
          <p className="text-lg font-medium">Project not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            {project.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">
            Explore the details of our {project.type.toLowerCase()} project in {project.location}.
          </p>
        </header>

        {/* First Image */}
        {project.images && project.images.length > 0 ? (
          <div className="mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.images[0] || fallbackImage}
                alt={`${project.title} featured view`}
                className="w-full h-[400px] sm:h-[500px] object-cover"
                onError={(e) => {
                  console.warn(`Failed to load image: ${project.images[0]}`);
                  e.target.src = fallbackImage;
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Featured Image</span>
              </div>
            </div>
          </div>
        ) : null}

        {/* Project Details */}
        <div className="mb-12 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Details</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <dt className="text-sm font-medium text-gray-500">Type</dt>
              <dd className="mt-1 text-lg text-gray-900">{project.type}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Use</dt>
              <dd className="mt-1 text-lg text-gray-900">{project.use}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="mt-1 text-lg text-gray-900">{project.location}</dd>
            </div>
          </dl>
        </div>

        {/* Image Gallery (Remaining Images) */}
        {project.images && project.images.length > 1 ? (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">More Images</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={image || fallbackImage}
                    alt={`${project.title} view ${index + 2}`}
                    className="w-full aspect-square  items-center object-cover transform group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.warn(`Failed to load image: ${image}`);
                      e.target.src = fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      View {index + 2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-12 bg-white rounded-xl shadow-sm p-6 text-center">
            <p className="text-gray-500 text-base">No additional images available.</p>
          </div>
        )}

        {/* Description Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Description</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            {project.description || 'No description available.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;