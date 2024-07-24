import links from "@/utils/navLinks";
import Link from "./link";
import Button from "./button";

const Nav = () => (
  <nav>
    {links.map(({ innerText, href }) => (
      <Link href={href}>{innerText}</Link>
    ))}
    <Button>Download CV</Button>
  </nav>
);

export default Nav;
