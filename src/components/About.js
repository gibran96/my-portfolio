import React from "react";

function About() {
  return (
    <div id="about" className="bg-white dark:bg-[#31363f] py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
          I'm a Graduate Computer Science student at Northeastern University. Having worked as a Full Stack Engineer for five years, I decided to take the leap and pursue a formal education in Computer Science. 
        </p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
            I am passionate about writing clean, efficient and scalable code. Recently, I have ventured into the world of Machine Learning. With my experience in Software Development, I am exicted to apply my Machine Learning skills to real-world problems.
        </p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
            I am looking for Software Engineering Internship opportunities, and I'm available for full time roles starting in Summer 2025.
        </p>
      </div>
    </div>
  );
}

export default About;
