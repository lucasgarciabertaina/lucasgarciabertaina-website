import Image from "next/image";
import React, { ReactNode } from "react";

interface ToolProps {
  children: ReactNode;
  image: string;
}

const Tool: React.FC<ToolProps> = (props) => (
  <div className="flex flex-col h-[100px]">
    <Image
      src={props.image}
      alt="logo-tool"
      className="flex-grow h-0 w-auto object-contain"
      height={25}
      width={25}
    />
    <p className="text-gray-600 text-base font-normal text-center pt-2">
      {props.children}
    </p>
  </div>
);

export default Tool;
