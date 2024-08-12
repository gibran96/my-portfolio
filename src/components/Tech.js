import React from "react";
import {
  FaJs,
  FaPython,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaAws,
  FaJava,
  FaHtml5,
  FaCss3,
  FaAngular,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiTypescript,
  SiRuby,
  SiSpringboot,
  SiSpring,
  SiPytorch,
  SiTensorflow,
  SiMaterialdesign,
  SiMaterialdesignicons,
  SiPandas,
  SiAzuredevops,
  SiAzurepipelines,
} from "react-icons/si";

function Tech() {
  return (
    <div id="tech" className="bg-white dark:bg-[#31363f] py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-1">
          {/* Languages */}
          <div className="font-semibold text-xl col-span-1 text-center md:text-left">
            Languages
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-y-10 col-span-3 justify-center md:justify-start">
            <div className="relative group justify-self-center md:justify-self-start">
              <FaJava size={32} className="group-hover:scale-125 transition-transform duration-300" />
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Java
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <FaJs size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                JavaScript
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <FaPython size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Python
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiTypescript size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Typescript
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiRuby size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ruby
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <FaHtml5 size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                HTML
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <FaCss3 size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                CSS
              </span>
            </div>
          </div>

          {/* Frameworks */}
          <div className="font-semibold text-xl col-span-1 text-center md:text-left">
            Frameworks
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-y-10 col-span-3 justify-center md:justify-start">
            <div className="relative group justify-self-center md:justify-self-start">
              <SiPytorch size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                PyTorch
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiTensorflow size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Tensorflow
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiPandas size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Pandas
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiSpring size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Spring
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiSpringboot size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                SpringBoot
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <FaReact size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                React
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <FaAngular size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Angular
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <FaNodeJs size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Node.js
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiTailwindcss size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Tailwind
              </span>
            </div>
          </div>

          {/* Database */}
          <div className="font-semibold text-xl col-span-1 text-center md:text-left">
            Database
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-y-10 col-span-3 justify-center md:justify-start">
            <div className="relative group justify-self-center md:justify-self-start">
              <SiMongodb size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                MongoDB
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiPostgresql size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                PostgreSQL
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <FaDatabase size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                SQL
              </span>
            </div>
          </div>

          {/* Cloud */}
          <div className="font-semibold text-xl col-span-1 text-center md:text-left">
            Cloud
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-y-10 col-span-3 justify-center md:justify-start">
            <div className="relative group justify-self-center md:justify-self-start">
              <FaAws size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                AWS
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiAzuredevops size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Azure DevOps
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiAzurepipelines size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Azure Pipelines
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiGooglecloud size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Google Cloud
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiDocker size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Docker
              </span>
            </div>
            <div className="relative group justify-self-center md:justify-self-start">
              <SiKubernetes size={32} className="group-hover:scale-125 transition-transform duration-300"/>
              <span className="absolute left-1/2 transform -translate-x-1/2  mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Kubernetes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tech;
