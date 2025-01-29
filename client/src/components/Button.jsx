import React from "react";

const Button = ({ className, shadowColor = "#213555", title = "add title", onClick }) => {
  return (
    <button
      style={{
        boxShadow: `0 5px 0px 0 ${shadowColor}`,
      }}
      className={`${className} hover:scale-110 bg-primary transition-all duration-400 cursor-pointer text-background-color text-xl font-semibold px-10 py-4 rounded-xl`}
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
