import React, { ReactNode } from "react";

interface BulletedProps {
  children: ReactNode;
}

const Bulleted: React.FC<BulletedProps> = (props) => (
  <div className="flex pt-1">
    <div className="flex  mt-3 mx-2">
      <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
    </div>
    <p className="text-gray-600 font-normal text-base">{props.children}</p>
  </div>
);

export default Bulleted;
