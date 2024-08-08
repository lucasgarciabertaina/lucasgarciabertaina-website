import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => (
  <header className="h-20 pl-20 pr-8 flex items-center justify-between">
    <Logo />
    <Nav />
  </header>
);

export default Header;
