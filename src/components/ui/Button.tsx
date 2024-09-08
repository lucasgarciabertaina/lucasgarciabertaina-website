import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => (
  <button
    className={`${props.className} px-4 py-2 bg-gray-900 hover:bg-gray-700 active:bg-gray-800 font-semibold text-gray-50 rounded-2xl`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
