import LocationAndAvailability from "./locationAndAvailability";
import SocialNetworks from "./socialNetworks";

const Hero = () => (
  <div className="w-2/3">
    <h1 className="text-gray-900 font-bold text-6xl	leading-[72px] -tracking-2">
      Hi, I’m Lucas <span className="align-text-top">👋</span>
    </h1>
    <p className="pt-2 text-base font-normal text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet
      finibus sem, at eleifend metus malesuada volutpat. Vestibulum pretium sem
      arcu, eu sagittis dolor ornare vel. Quisque vitae mauris leo. Aenean
      mollis tristique arcu id accumsan. Nunc luctus hendrerit consectetur.
      Maecenas lobortis nibh et nibh eleifend congue. Sed iaculis felis ipsum, a
      accumsan mi molestie quis. Proin a ultrices neque.
    </p>
    <LocationAndAvailability />
    <SocialNetworks />
  </div>
);

export default Hero;
