import React from "react";
import Image from "next/image";

interface MyPictureProps {
  className: string;
}

const MyPicture: React.FC<MyPictureProps> = (props) => (
  <div
    className={`${props.className} flex items-center justify-center md:order-last md:flex-grow md:justify-end`}
  >
    <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
      <Image
        src="/hero.png"
        alt="Lucas Garcia Bertaina"
        width={240}
        height={280}
        className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
        style={{ objectFit: "cover" }}
      ></Image>
      <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
      <div
        className="absolute z-10 h-[280px] w-[240px] border-8 border-white max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
        style={{ objectFit: "cover" }}
      >
        {" "}
      </div>
    </div>
  </div>
);

export default MyPicture;
