import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
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
