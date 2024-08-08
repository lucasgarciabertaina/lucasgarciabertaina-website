import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = (props) => (
  <button className="block text-sm px-6 py-1 bg-gray-200 font-medium text-gray-600 rounded-2xl mx-auto">
    {props.children}
  </button>
);

export default Title;
