import React from "react";
import Button from "../../../components/Button";

const BottomBanner = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-500 rounded-2xl text-white p-6 sm:p-8 lg:p-12">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Unleash your creativity <br className="hidden sm:block" /> on the web
          </h2>

          <h4 className="text-center text-lg sm:text-xl md:text-2xl py-6 sm:py-8 lg:py-12">
            Build completely custom, production-ready websites — or ultra-high-fidelity prototypes{" "}
            <br className="hidden sm:block" /> — without writing a line of code.
          </h4>

          <div className="flex justify-center gap-6 sm:gap-8 lg:gap-12">
            <Button
              title="Get started--it's free"
              shadowColor="#fefefe"
              className="bg-white text-primary text-sm sm:text-base md:text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
