import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Skills from "./pages/skills/Skills";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <div className="app">
      <div className="app_main">
        <Navbar />

        <div style={{ paddingTop: "10vh", display: "grid", gap: "2rem" }}>
          <div id="home" >
            <Home />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="about">
          <h2 className="heading">About Me</h2>
            <About />
          </div>
          <div id="contact">
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
