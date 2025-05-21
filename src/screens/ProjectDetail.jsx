import React from 'react';
import { useParams } from 'react-router-dom';
import BannerImage from '../components/BannerImage';

// Sample project data (same as in OurWork.jsx)
const projects = [
  {
    id: 1,
    title: 'Project 1',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    type: 'Residential',
    use: 'Living Space',
    location: 'Urban',
    description: 'This is a beautiful residential project featuring modern interior design with a focus on open living spaces.',
    additionalImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 2,
    title: 'Project 2',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    type: 'Commercial',
    use: 'Office',
    location: 'Downtown',
    description: 'A state-of-the-art office space designed for productivity and collaboration.',
    additionalImages: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 3,
    title: 'Project 3',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
    type: 'Residential',
    use: 'Kitchen',
    location: 'Suburban',
    description: 'A modern kitchen renovation with high-end appliances and custom cabinetry.',
    additionalImages: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    ],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="text-center mt-9 pt-8">Project not found</div>;
  }

  return (
    <div className="mt-9 pt-8">
      <BannerImage src={project.image} alt={project.title} />
      <div className="px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h1>
        <div className="text-gray-600 mb-6">
          <p><strong>Type:</strong> {project.type}</p>
          <p><strong>Use:</strong> {project.use}</p>
          <p><strong>Location:</strong> {project.location}</p>
        </div>
        <p className="text-gray-600 mb-8">{project.description}</p>
        
        {/* Additional Images */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.additionalImages.map((img, index) => (
            <img
                key={index}
                src={img}
                alt={`${project.title} view ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;