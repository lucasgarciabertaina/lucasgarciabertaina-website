import Image from "next/image";

const AboutMePicture = () => (
  <div className="flex flex-col justify-between gap-12 md:flex-row">
    <div className="flex justify-center md:order-first md:justify-end">
      <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
        <Image
          src="/aboutMe.JPEG"
          alt="About Lucas"
          width={280}
          height={360}
          className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
          style={{ objectFit: "cover" }}
        ></Image>
        <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
      </div>
    </div>
  </div>
);

export default AboutMePicture;
