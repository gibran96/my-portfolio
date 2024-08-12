import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import React, { useEffect } from "react";
import Tech from "./Tech";
import { useLocation } from "react-router-dom";

function Home() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = (event) => {
      if (!isHome) {
        return;
      }
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = 64;

      if (!targetElement) {
        console.warn(`Element with id ${targetId} not found`);
        return;
      }

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };

    const navbar = document.getElementById("navbar");
    const anchorLinks = navbar.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, []);
  return (
    <div id="home">
      <Hero />
      <About />
      <Projects />
      <Tech />
    </div>
  );
}

export default Home;
