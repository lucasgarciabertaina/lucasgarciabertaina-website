import Bulleted from "@/components/ui/BulletedItem";
import Image from "next/image";

const Tracestory = () => (
  <div className="mt-12 rounded-md p-4 md:p-8 md:w-3/4 bg-white mx-auto grid md:grid-cols-3 grid-rows-1">
    <Image src="/tracestory.svg" alt="logo" height={24} width={128} />
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
    <p className="text-gray-700 pt-4 text-base font-normal text-right">
      Sept 2021 - Aug 2023
    </p>
  </div>
);

export default Tracestory;
