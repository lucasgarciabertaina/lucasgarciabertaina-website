import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => (
  <button className="mx-8 px-4 py-2 bg-gray-900 hover:bg-gray-700 active:bg-gray-800 font-semibold text-gray-50 rounded-2xl">
    {props.children}
  </button>
);

export default Button;
