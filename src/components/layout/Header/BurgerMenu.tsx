import React, { useState } from "react";
import useBurgerMenu from "@/app/hooks/useBurgerMenu";

interface BurgerMenuProps {
  onClick?: (message: string) => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = (props) => {
  const { isOpen, open, close } = useBurgerMenu();

  return (
    <button
      onClick={isOpen ? close : open}
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
