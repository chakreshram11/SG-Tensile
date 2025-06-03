import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full max-w-md my-4" />
      <p><strong>Type:</strong> {project.type}</p>
      <p><strong>Use:</strong> {project.use}</p>
      <p><strong>Location:</strong> {project.location}</p>
    </div>
  );
};

export default ProjectDetails;