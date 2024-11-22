import React, { useEffect } from "react";

interface BurgerMenuProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = (props) => {
  useEffect(() => {
    if (!props.isOpen) {
      console.log("Menu closed");
    }
  }, [props.isOpen]);
  const onHandleClick = () => {
    return props.onToggle(!props.isOpen);
  };

  return (
    <button
      onClick={onHandleClick}
      className="sm:block md:hidden focus:outline-none"
    >
      <div
        className={`w-6 h-0.5 bg-gray-600 mb-1 transition-transform ${
          props.isOpen ? "transform rotate-45 translate-y-1" : ""
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-gray-600 mb-1 transition-opacity ${
          props.isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`w-6 h-0.5 bg-gray-600 transition-transform ${
          props.isOpen ? "transform -rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  );
};

export default BurgerMenu;
