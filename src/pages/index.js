import React from "react";
import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Navbar/Sidebar/Sidebar";
import Hero from "../components/HeroSection/Hero";
import About from "../components/AboutSection/About";
import Resume from "../components/ResumeSection/Resume";
import Skills from "../components/SkillsSection/Skills";
import ContactMe from "../components/ContactSection/ContactMe";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <ContactMe />
    </>
  );
};

export default Home;
