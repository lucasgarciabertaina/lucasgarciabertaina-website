import React, { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = (props) => (
  <h3 className="text-xl mt-4 text-center font-normal text-gray-600 text-gray-600">
    {props.children}
  </h3>
);

export default SubTitle;
