import links from "@/utils/navLinks";
import Link from "@/components/layout/Header/Link";
import Button from "@/components/ui/Button";

const Nav = () => (
  <nav>
    {links.map(({ innerText, href }) => (
      <Link href={href}>{innerText}</Link>
    ))}
    <Button>Download CV</Button>
  </nav>
);

export default Nav;
