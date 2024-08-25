import React, { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={toggleMenu}
      className="sm:block md:hidden focus:outline-none"
    >
      <div
        className={`w-6 h-0.5 bg-gray-600 mb-1 transition-transform ${
          isOpen ? "transform rotate-45 translate-y-1" : ""
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-gray-600 mb-1 transition-opacity ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-gray-600 transition-transform ${
          isOpen ? "transform -rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
};

export default BurgerMenu;
