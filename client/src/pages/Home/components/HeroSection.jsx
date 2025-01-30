import React from "react";
import Button from "../../../components/Button";
import image from "../../../assets/bannerImage.png";

const HeroSection = () => {
  return (
    <div className="bg-primary text-text-color selection:bg-text-color selection:text-primary py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row justify-between items-center gap-8 sm:gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="flex-2 space-y-4 sm:space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-center md:text-left">
            Let’s create a suitable portfolio with us! that makes you stand out.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-center md:text-left">
            Setting up your own portfolio website is a fantastic way to express who you are as a creative, and to share
            your talents with the world. Let’s take a look at how to create a free portfolio and everything that you
            should include in it.
            {/* We provide you some template and a domain <br className="hidden sm:block" /> for create your portfolio. */}
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              className="bg-white text-primary text-sm sm:text-base md:text-lg"
              shadowColor="#d8c4b6"
              title="View Templates"
            />
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            className="max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
            src={image}
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
