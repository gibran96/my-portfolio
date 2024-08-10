import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import { useEffect } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
