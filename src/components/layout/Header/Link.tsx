import React, { ReactNode } from "react";

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = (props) => (
  <a
    className="font-medium text-gray-600 px-3 hover:text-gray-900"
    href={props.href}
  >
    {props.children}
  </a>
);

export default Link;
