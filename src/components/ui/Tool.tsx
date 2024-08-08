import React, { ReactNode } from "react";

interface ToolProps {
  children: ReactNode;
  image: string;
}

const Tool: React.FC<ToolProps> = (props) => (
  <div className="flex flex-col h-[100px]">
    <img
      src={props.image}
      alt="logo-tool"
      className="flex-grow h-0 w-auto object-contain"
    />
    <p className="text-gray-600 text-base font-normal text-center pt-2">
      {props.children}
    </p>
  </div>
);

export default Tool;
