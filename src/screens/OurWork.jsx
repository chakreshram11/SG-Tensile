import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';

const OurWork = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState({ type: 'All', use: 'All', location: 'All' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filterOptions = {
    types: ['All', 'Residential', 'Commercial', 'Industrial'],
    uses: ['All', 'Living Space', 'Office', 'Kitchen', 'Other'],
    locations: ['All', 'Urban', 'Downtown', 'Suburban', 'Rural'],
  };

  const fallbackImage = 'https://via.placeholder.com/600x600.png?text=Image+Not+Available';

  useEffect(() => {
    let unsubscribeFirestore = null;

    // Monitor authentication state
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User authenticated:', user.uid);
        // Fetch projects after authentication
        unsubscribeFirestore = onSnapshot(
          collection(db, 'projects'),
          (snapshot) => {
            const fetchedProjects = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            console.log('Fetched projects:', fetchedProjects); // Debug log
            setProjects(fetchedProjects);
            setLoading(false);
            setError(null);
          },
          (error) => {
            console.error('Firestore error:', error.message, error.code, error);
            setError(`Failed to load projects: ${error.message}`);
            setLoading(false);
          }
        );
      } else {
        // Attempt anonymous sign-in
        signInAnonymously(auth)
          .then((userCredential) => {
            console.log('Signed in anonymously:', userCredential.user.uid);
          })
          .catch((error) => {
            console.error('Anonymous sign-in error:', error.message, error.code, error);
            setError(`Authentication failed: ${error.message}`);
            setLoading(false);
          });
      }
    }, (error) => {
      console.error('Auth state error:', error.message, error.code, error);
      setError(`Authentication error: ${error.message}`);
      setLoading(false);
    });

    // Cleanup listeners
    return () => {
      if (unsubscribeFirestore) unsubscribeFirestore();
      unsubscribeAuth();
    };
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesType = filter.type === 'All' || project?.type === filter.type;
    const matchesUse = filter.use === 'All' || project?.use === filter.use;
    const matchesLocation = filter.location === 'All' || project?.location === filter.location;
    return matchesType && matchesUse && matchesLocation;
  });

  const handleSelectChange = (category, value) => {
    setFilter((prev) => ({ ...prev, [category]: value }));
  };

  const handleImageClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          Our Work
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          Explore our curated projects across different domains
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
        {['type', 'use', 'location'].map((category) => (
          <div key={category} className="min-w-[160px]">
            <label className="block text-sm font-medium text-gray-700 capitalize mb-2">
              {category}
            </label>
            <select
              value={filter[category]}
              onChange={(e) => handleSelectChange(category, e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-colors duration-200"
            >
              {filterOptions[`${category}s`].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div
            className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"
            role="status"
          ></div>
          <p className="mt-4 text-gray-600 text-lg">Loading projects...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="mx-4 sm:mx-6 bg-red-50 text-red-600 text-center py-4 px-6 rounded-lg">
          {error}
        </div>
      )}

      {/* Projects Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleImageClick(project.id)}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <img
                  src={project?.image || fallbackImage}
                  alt={project?.title || 'Project Image'}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    console.warn(`Failed to load image: ${project?.image}`);
                    e.target.src = fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg sm:text-xl font-semibold tracking-wide px-4 text-center">
                    {project?.title || 'Untitled'}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 text-lg py-8">
              No projects match the selected filters.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default OurWork;