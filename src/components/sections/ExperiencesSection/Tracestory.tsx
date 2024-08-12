import Bulleted from "@/components/ui/BulletedItem";

const Tracestory = () => (
  <div className="mt-12 p-8 w-3/4 bg-white mx-auto grid grid-cols-3 grid-rows-1">
    <img src="./tracestory.svg" alt="logo" />
    <div>
      <h4 className="text-gray-900 text-xl font-semibold pb-4">
        Fullstack Developer
      </h4>
      <Bulleted>
        Responsible for refactoring the web application from scratch.
      </Bulleted>
      <Bulleted>Co-creator of the BI platform.</Bulleted>
      <Bulleted>
        Designed and implemented the QR, one of the core utility of the platform
      </Bulleted>
      <Bulleted>Created used AWS SES email sending process.</Bulleted>
      <Bulleted>
        One of the responsible for server maintenance and bug fixes
      </Bulleted>
    </div>
    <p className="text-gray-700 text-base font-normal text-right">
      Sept 2021 - Aug 2023
    </p>
  </div>
);

export default Tracestory;
