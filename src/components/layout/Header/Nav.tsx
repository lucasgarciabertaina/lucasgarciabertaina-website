"use client";

import links from "@/utils/navLinks";
import Link from "@/components/layout/Header/Link";
import Button from "@/components/ui/Button";
import BurgerMenu from "./BurgerMenu";

const downloadResume = () => {
  const pdfUrl = "./lucasGarcia_CV.pdf";
  const pdfName = "lucasGarciaBertaina.pdf";

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = pdfName;
  link.click();
};

const Nav = () => (
  <nav>
    {links.map(({ innerText, href }) => (
      <Link href={href} key={innerText}>
        {innerText}
      </Link>
    ))}
    <Button className="hidden lg:inline-block" onClick={downloadResume}>
      Download CV
    </Button>
    <BurgerMenu />
  </nav>
);

export default Nav;
