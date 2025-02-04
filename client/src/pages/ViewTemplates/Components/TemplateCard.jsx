import React from "react";
import Button from "../../../components/Button";

const TemplateCard = ({ template }) => {
  return (
    <div>
      <div className="rounded-lg shadow-lg overflow-hidden group relative">
        <img
          src={template.image}
          alt={template.title}
          className="w-full object-cover cursor-pointer group-hover:scale-105 transition-all aspect-video group-hover:opacity-50 duration-300"
        />
        <div className="flex justify-center items-center gap-4 absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button title="View" className={"bg-white text-black px-10"} shadowColor="gray" />
          <Button title="Edit" className={"bg-white text-black px-10"} shadowColor="gray" />
        </div>
      </div>
      <div className="flex justify-between py-3 items-center">
        <p className="text-lg md:text-xl lg:text-2xl py-3">{template.title}</p>
        <div className="flex justify-center items-center gap-4 md:hidden">
          <Button title="View" className={"bg-blue-500 text-sm py-1 px-3"} />
          <Button title="Edit" className={"bg-blue-500 text-sm py-1 px-3"} />
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
