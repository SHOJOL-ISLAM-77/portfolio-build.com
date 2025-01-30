import React from "react";
import BottomBanner from "./components/BottomBanner";
import HeroSection from "./components/HeroSection";
import OurTemplates from "./components/OurTemplates";
import WhyPortfolio from "./components/WhyPortfolio";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurTemplates />
      <WhyPortfolio />
      <BottomBanner />
    </div>
  );
};

export default Home;
