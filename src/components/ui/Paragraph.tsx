import React, { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = (props) => (
  <p className={`font-normal text-base ${props.className}`}>{props.children}</p>
);

export default Paragraph;
