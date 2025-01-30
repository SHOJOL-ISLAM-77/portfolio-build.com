import React from "react";
import Button from "../../../components/Button";

const BottomBanner = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-2xl text-white p-6 sm:p-8 lg:p-10 xl:p-12">
          {/* Main Heading */}
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Unleash your creativity <br className="hidden sm:block" /> on the web
          </h2>

          {/* Subheading */}
          <h4 className="text-center text-base sm:text-md md:text-xl py-4 sm:py-6 lg:py-8 xl:py-10 font-medium">
            Build completely custom, production-ready websites — or ultra-high-fidelity prototypes{" "}
            <br className="hidden sm:block" /> — without writing a line of code.
          </h4>

          {/* Button */}
          <div className="flex justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            <Button
              title="Get started—it's free"
              shadowColor="#0e0e0e"
              className="bg-primary text-white text-sm sm:text-base md:text-lg font-semibold rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;