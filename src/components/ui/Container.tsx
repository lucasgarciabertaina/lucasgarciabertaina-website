import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = (props) => (
  <section className={`pl-28 pr-8 py-24 ${props.className}`}>
    {props.children}
  </section>
);

export default Container;
