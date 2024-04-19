"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Skill from "./Skills/Skill";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutMe />
      <Skill />
    </div>
  );
};

export default Home;
