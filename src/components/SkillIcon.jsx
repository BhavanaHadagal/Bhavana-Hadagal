import React from "react";

const PlaceholderIcon = ({ children }) => (
  <div className="w-4 h-4 mr-2 text-gray-800 flex items-center justify-center">
    {children}
  </div>
);

const SkillIcon = ({ name, iconText }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 text-sm font-medium text-gray-800 bg-white hover:border-gray-100 transition duration-150 whitespace-nowrap">
      <PlaceholderIcon>{iconText}</PlaceholderIcon>
      <span>{name}</span>
    </div>
  );
};

export default SkillIcon;
