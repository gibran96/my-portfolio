import React from "react";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    const offset = 64;
    const elementPosition = aboutSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    // if (aboutSection) {
    //   aboutSection.scrollIntoView({ behavior: "smooth" });
    // }
  };
  return (
    <div className="bg-gray-100 dark:bg-[#31363f] h-screen flex items-center justify-center shadow-md px-5">
      <div className="text-center">
        <img
          src={"./images/profile.jpeg"}
          alt="Gibran Myageri"
          className="w-48 h-50 mx-auto rounded-full shadow-lg object-cover"
        />
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100">
          Hello, I'm Gibran Myageri
        </h1>
        <p className="text-2xl mt-4 text-gray-600 dark:text-gray-100">
          Software Engineer | Web Developer | Machine Learning Engineer
        </p>
        <button
          onClick={scrollToAbout}
          className="mt-8 px-6 py-3 text-white dark:text-black rounded-full bg-black dark:bg-gray-100 motion-safe:animate-bounce hover:bg-gray-800 dark:hover:bg-white"
        >
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
}

export default Hero;
