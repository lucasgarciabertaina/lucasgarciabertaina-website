import Image from "next/image";

const Logo = () => (
  <a href="/">
    <Image src="logo.svg" alt="logo" width={51} height={52} />
  </a>
);

export default Logo;
