import React, { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
  onClick: () => void;
}

const Link: React.FC<LinkProps> = (props) => (
  <a
    className="md:inline-block md:ml-8 m-4 font-medium text-gray-600 px-3 hover:text-gray-900"
    href={props.href}
    onClick={() => props.onClick()}
  >
    {props.children}
  </a>
);

export default Link;
