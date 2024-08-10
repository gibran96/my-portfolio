import React from 'react';
import db from '../database'
import { Link } from 'react-router-dom';

function Projects() {
  const projects = db.projects;
  console.log(projects);
  return (
    <div id="projects" className="bg-gray-100 dark:bg-[#31363f] py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300" to={`/projects/${project.id}`}>
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{project.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;