import React, { ReactNode } from "react";
import { Copy } from "lucide-react";
interface ContactProps {
  children: ReactNode;
  contact: string;
  className?: string;
}

const Contact: React.FC<ContactProps> = (props) => (
  <div
    className={`${props.className} flex items-center mx-auto max-w-fit	w-auto`}
  >
    {props.children}
    <h3 className="text-base md:text-4xl text-center font-semibold text-gray-900 mx-2 md:mx-5">
      {props.contact}
    </h3>
    <Copy color="#4b5563" size={24} />
  </div>
);

export default Contact;
