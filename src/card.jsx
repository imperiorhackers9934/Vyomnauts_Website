import React from "react";

const Card = ({
  icon,
  title,
  description,
  buttonText = "Learn More",
  onButtonClick = () => {},
  cardBgColor = "bg-gray-800",
  buttonBgColor = "bg-gray-700",
  buttonHoverColor = "hover:bg-gray-600",
  textColor = "text-white",
}) => {
  return (
    <div
      className={`${cardBgColor} ${textColor} min-h-1/2 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
    >
      <div className="text-center mb-4 text-4xl">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-sm text-gray-300 mb-6 text-center">{description}</p>
      <div className="text-center">
        <button
          className={`${buttonBgColor} ${buttonHoverColor} text-white font-medium px-4 py-2 rounded-lg transition-all`}
          onClick={onButtonClick}
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;