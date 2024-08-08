import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = (props) => (
  <section className={`px-12 py-24 ${props.className}`}>
    {props.children}
  </section>
);

export default Container;
