import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
    type: 'Residential',
    use: 'Living Space',
    location: 'Urban',
  },
  {
    id: 2,
    title: 'Project 2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    type: 'Commercial',
    use: 'Office',
    location: 'Downtown',
  },
  {
    id: 3,
    title: 'Project 3',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80',
    type: 'Residential',
    use: 'Kitchen',
    location: 'Suburban',
  },
];

const OurWork = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState({ type: 'All', use: 'All', location: 'All' });

  const filterOptions = {
    types: ['All', 'Residential', 'Commercial'],
    uses: ['All', 'Living Space', 'Office', 'Kitchen'],
    locations: ['All', 'Urban', 'Downtown', 'Suburban'],
  };

  const filteredProjects = projects.filter(project => {
    const matchesType = filter.type === 'All' || project.type === filter.type;
    const matchesUse = filter.use === 'All' || project.use === filter.use;
    const matchesLocation = filter.location === 'All' || project.location === filter.location;
    return matchesType && matchesUse && matchesLocation;
  });

  const handleSelectChange = (category, value) => {
    setFilter(prev => ({ ...prev, [category]: value }));
  };

  const handleImageClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="mt-10">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 tracking-wide mb-2">Our Work</h1>
        <p className="text-gray-500 text-lg">Explore our curated projects across different domains</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-6 mb-10 px-6">
        {['type', 'use', 'location'].map((category) => (
          <div key={category}>
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{category}</label>
            <select
              value={filter[category]}
              onChange={(e) => handleSelectChange(category, e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            >
              {filterOptions[`${category}s`].map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Project Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-6 pb-16">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            onClick={() => handleImageClick(project.id)}
            className="group relative cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 sm:bg-opacity-0 group-hover:sm:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-lg font-semibold tracking-wide opacity-100 sm:opacity-0 group-hover:sm:opacity-100">
                {project.title}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
