const MyPicture = () => (
  <div className="w-1/3 flex items-center justify-center md:order-last md:flex-grow md:justify-end">
    <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
      <div
        className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
        style={{ objectFit: "cover" }}
      ></div>
      <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
    </div>
  </div>
);

export default MyPicture;
