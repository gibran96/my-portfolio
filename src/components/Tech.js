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
  SiPandas,
  SiAzuredevops,
  SiAzurepipelines,
} from "react-icons/si";

// Reusable component for tech icons
function TechIcon({ IconComponent, label }) {
  return (
    <div className="relative group justify-self-center md:justify-self-start">
      <IconComponent size={32} className="group-hover:scale-125 transition-transform duration-300" />
      <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {label}
      </span>
    </div>
  );
}

function Tech() {
  const techCategories = [
    {
      title: "Languages",
      icons: [
        { component: FaJava, label: "Java" },
        { component: FaJs, label: "JavaScript" },
        { component: FaPython, label: "Python" },
        { component: SiTypescript, label: "Typescript" },
        { component: SiRuby, label: "Ruby" },
        { component: FaHtml5, label: "HTML" },
        { component: FaCss3, label: "CSS" },
      ],
    },
    {
      title: "Frameworks",
      icons: [
        { component: SiPytorch, label: "PyTorch" },
        { component: SiTensorflow, label: "Tensorflow" },
        { component: SiPandas, label: "Pandas" },
        { component: SiSpring, label: "Spring" },
        { component: SiSpringboot, label: "SpringBoot" },
        { component: FaReact, label: "React" },
        { component: FaAngular, label: "Angular" },
        { component: FaNodeJs, label: "Node.js" },
        { component: SiTailwindcss, label: "Tailwind" },
      ],
    },
    {
      title: "Database",
      icons: [
        { component: SiMongodb, label: "MongoDB" },
        { component: SiPostgresql, label: "PostgreSQL" },
        { component: FaDatabase, label: "SQL" },
      ],
    },
    {
      title: "Cloud",
      icons: [
        { component: FaAws, label: "AWS" },
        { component: SiAzuredevops, label: "Azure DevOps" },
        { component: SiAzurepipelines, label: "Azure Pipelines" },
        { component: SiGooglecloud, label: "Google Cloud" },
        { component: SiDocker, label: "Docker" },
        { component: SiKubernetes, label: "Kubernetes" },
      ],
    },
  ];

  return (
    <div id="tech" className="bg-white dark:bg-[#31363f] py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-8">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-1">
          {techCategories.map((category) => (
            <React.Fragment key={category.title}>
              <div className="font-semibold text-xl col-span-1 text-center md:text-left">
                {category.title}
              </div>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-y-8 col-span-3 justify-center md:justify-start">
                {category.icons.map((icon, index) => (
                  <TechIcon key={index} IconComponent={icon.component} label={icon.label} />
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tech;