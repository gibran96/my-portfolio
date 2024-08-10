import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="bottom-0 bg-black text-white dark:dark:bg-[#222831] shadow-md dark:border-t-[#76abae] dark:border-t-2 py-8 text-center">
      <div className="mt-4 flex justify-center space-x-6">
        <a
          href="https://linkedin.com/in/gibran-myageri"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#76abae] transition-colors duration-300"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/gibran96"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#76abae] transition-colors duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="mailto:myageri.g@northeastern.edu"
          className="text-white hover:text-[#76abae] transition-colors duration-300"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        &copy; 2024 Gibran Myageri. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
