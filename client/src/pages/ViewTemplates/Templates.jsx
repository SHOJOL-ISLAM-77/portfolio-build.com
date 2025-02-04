import React from "react";
import TemplateCard from "./Components/TemplateCard";

const Templates = () => {
  return (
    <div className="min-h-screen container text-white ">
      <div className="flex justify-between items-center py-3 sm:py-5 lg:py-7">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white text-center ">Portfolio Templates</h1>
        <div>
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-white text-center py-3 sm:py-5 flex justify-center items-center gap-3">
            Sort by:
            <select className="focus:outline-none">
              <option value="recommended">Recommended</option>
              <option value="resent">Resent</option>
              <option value="top">Top Templates</option>
            </select>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
        {templatesData.map((template) => (
          <TemplateCard template={template} key={template.id} />
        ))}
      </div>
    </div>
  );
};

export default Templates;

const templatesData = [
  {
    id: 1,
    image: "https://res.cloudinary.com/portfolioenvironment/image/upload/v1738647796/uukwsldzgtamvy4yfszl.png",
    title: "Photographer",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/portfolioenvironment/image/upload/v1738664798/aoukdh2gb47ym54pbcuu.png",
    title: "Construction Company",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/portfolioenvironment/image/upload/v1738665419/klqzmzpk59pmbn0eapvj.png",
    title: "Fashion Designer",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/portfolioenvironment/image/upload/v1738665523/mqqbnjk5l77jd4cigeh3.png",
    title: "Copywriter",
  },
];
