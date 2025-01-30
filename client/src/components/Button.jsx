import React from "react";
import cn from "../utils/cn";

const Button = ({ className, shadowColor = "#213555", title = "add title", onClick }) => {
  return (
    <button
      style={{
        boxShadow: `0 5px 0px 0 ${shadowColor}`,
      }}
      className={cn(
        `hover:scale-110 bg-primary transition-all duration-400 cursor-pointer text-background-color text-xl font-semibold sm:px-10 sm:py-4 rounded-xl py-2 px-6 ${className}`
      )}
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
