import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = (props) => (
  <section
    className={`px-9 py-12 md:px-12 md:py-24 ${props.className} box-border overflow-hidden`}
  >
    {props.children}
  </section>
);

export default Container;
