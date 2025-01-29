import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OurTemplates from "./components/OurTemplates";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurTemplates />
    </div>
  );
};

export default Home;
