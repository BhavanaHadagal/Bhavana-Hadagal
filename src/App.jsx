import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
        <section id="home">
          <Home />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
