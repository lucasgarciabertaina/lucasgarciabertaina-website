import LocationAndAvailability from "@/components/sections/IntroductionSection/LocationAndAvailability";
import SocialNetworks from "@/components/ui/SocialNetworks";
import Paragraph from "@/components/ui/Paragraph";
import React from "react";

interface HeroProps {
  className: string;
}

const Hero: React.FC<HeroProps> = (props) => (
  <div className={`${props.className}`}>
    <h1 className="text-gray-900 font-bold text-4xl md:text-6xl	leading-10 md:leading-[72px] -tracking-2">
      Hi, I&apos;m Lucas <span className="align-text-top">👋</span>
    </h1>
    <Paragraph className="pt-3 text-gray-600">
      I&apos;m a backend developer with frontend experience, specializing in Vue
      and primarily Node.js. Every day, I enjoy learning something new in the
      exciting world of IT, even after over four years in the industry.
    </Paragraph>
    <Paragraph className="pt-2 text-gray-600">
      My commitment to enhancing my professional skills and improving code
      quality drives me daily.
    </Paragraph>
    <LocationAndAvailability />
    <SocialNetworks />
  </div>
);

export default Hero;
