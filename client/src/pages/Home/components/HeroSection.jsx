import React from "react";
import Button from "../../../components/Button";
import image from "../../../assets/bannerImage.png";
const HeroSection = () => {
  return (
    <div className="bg-primary text-text-color selection:bg-text-color selection:text-primary">
      <div className="container flex justify-between items-center section">
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl">
            Let’s create a suitable portfolio for you <br /> with us!
          </h1>
          <p className="text-2xl">
            We provide you some template and a domain <br /> for create your portfolio.{" "}
          </p>
          <Button className={"bg-white text-primary"} shadowColor="#d8c4b6" title="View Templates" />
        </div>
        <div className="flex-1 flex justify-end">
          <img className="max-w-[400px]" src={image} alt="Placeholder" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
