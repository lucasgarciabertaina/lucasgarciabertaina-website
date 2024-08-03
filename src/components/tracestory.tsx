import Bulleted from "./bulleted";
const Tracestory = () => (
  <div className="mt-12 p-8 w-3/4 bg-white mx-auto grid grid-cols-3 grid-rows-1">
    <img src="./logo-upwork.png" alt="logo" className="w-12 h-12" />
    <div>
      <h4 className="text-gray-900 text-xl font-semibold pb-4">
        Fullstack Developer
      </h4>
      <Bulleted>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Bulleted>
      <Bulleted>
        Ut pretium arcu et massa semper, id fringilla leo semper.
      </Bulleted>
      <Bulleted>Sed quis justo ac magna.</Bulleted>
      <Bulleted>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Bulleted>
    </div>
    <p className="text-gray-700 text-base font-normal text-right">
      Sept 2021 - Aug 2023
    </p>
  </div>
);

export default Tracestory;
