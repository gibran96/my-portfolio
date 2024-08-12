import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import db from '../database'
import { FaGithub } from "react-icons/fa";


function ProjectDetails() {
  const { id } = useParams();
  const project = db.projects.find((project) => project.id === parseInt(id));

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div id="project-details" className="bg-gray-100 dark:bg-gray-900 py-16 px-8 mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">{project.name}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="mb-4">{project.description1}</p>
            {project.description2 && <p className="mb-4">{project.description2}</p>}
            {project.description3 && <p className="mb-4">{project.description3}</p>}
            {project.description4 && <p className="mb-4">{project.description4}</p>}
            <div className="flex space-x-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaGithub className="text-2xl" />
                  <span className="hover:underline">GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProjectDetails;
