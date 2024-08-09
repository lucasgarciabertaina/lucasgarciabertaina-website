import React, { ReactNode } from "react";

interface TitleProps {
  id?: string;
  children: ReactNode;
}

const Title: React.FC<TitleProps> = (props) => (
  <h2
    id={props.id}
    className="w-fit mx-auto text-sm px-6 py-1 bg-gray-200 font-medium text-gray-600 rounded-2xl"
  >
    {props.children}
  </h2>
);

export default Title;
