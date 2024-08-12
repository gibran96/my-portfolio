import React from "react";
import db from "../database";

function About() {
  const about = db.about;
  return (
    <div id="about" className="bg-white dark:bg-[#31363f] py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">{about.p1}</p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">{about.p2}</p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">{about.p3}</p>
      </div>
    </div>
  );
}

export default About;
