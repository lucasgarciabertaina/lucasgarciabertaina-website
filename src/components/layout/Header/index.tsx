import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => (
  <header className="z-50 bg-white bg-opacity-90 fixed top-0 left-0 container max-w-full h-20 px-12 flex items-center justify-between border-b-2 border-white">
    <Logo />
    <Nav />
  </header>
);

export default Header;
