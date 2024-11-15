import Image from "next/image";
import React, { ReactNode } from "react";

interface TestimonialProps {
  children: ReactNode;
  testimonialFullName: string;
  image: string;
  currentRole: string;
}

const Testimonial: React.FC<TestimonialProps> = (props) => (
  <div className="flex flex-col rounded-md bg-white p-6 md:p-12 items-center">
    <Image
      src={props.image}
      alt="picture-testimonial"
      className="h-16 w-16 rounded-full"
      height={64}
      width={64}
    />
    <p className="text-gray-600 text-base font-normal text-left py-6">
      {props.children}
    </p>
    <h4 className="text-lg font-semibold text-gray-900 text-center">
      {props.testimonialFullName}
    </h4>
    <p className="font-normal text-sm text-gray-600 text-center">
      {props.currentRole}
    </p>
  </div>
);

export default Testimonial;
