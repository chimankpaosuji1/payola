// src/pages/Dashboard.js
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('/api/projects', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <div className="mt-4">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded shadow mb-4">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
