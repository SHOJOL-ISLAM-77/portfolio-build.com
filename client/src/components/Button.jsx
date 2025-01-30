import React from "react";
import cn from "../utils/cn";

const Button = ({
  className,
  shadowColor = "#213555",
  title = "add title",
  onClick = () => {},
  disable = "true",
}) => {
  return (
    <button
      style={{
        boxShadow: `0 5px 0px 0 ${shadowColor}`,
      }}
      className={cn(
        `bg-primary transition-all duration-400 cursor-pointer text-background-color text-xl font-semibold sm:px-8 sm:py-3 rounded-xl py-2 px-6 hover:scale-105 ${className}`,
        disable && "opacity-50 cursor-not-allowed"
      )}
      onClick={() => {
        if (!disable) onClick();
      }}
      disabled={disable}
    >
      {title}
    </button>
  );
};

export default Button;
