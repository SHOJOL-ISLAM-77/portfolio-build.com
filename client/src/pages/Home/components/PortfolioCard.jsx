import React from "react";

const PortfolioCard = ({ portfolio }) => {
  const imageUrl = portfolio.imageUrl || "https://placehold.co/600x400";
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={portfolio.name} />

      <div className="px-6 py-4">
        <h2 className="font-bold text-2xl mb-2 text-text-color">{portfolio.name}</h2>

        <p className="text-gray-300 text-base">{portfolio.description}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        {portfolio.skills.map((skill, index) => (
          <span
            key={index}
            className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
            {skill}
          </span>
        ))}
      </div>

      <div className="px-6 py-4">
        <button className="inline-block bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
          View Portfolio
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
