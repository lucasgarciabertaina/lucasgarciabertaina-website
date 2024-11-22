"use client";

import { useEffect, useState } from "react";
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

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = (isBurgerOpen: boolean) => {
    setIsMobileMenuOpen(isBurgerOpen);
  };

  const MOBILE_BREAKPOINT: number = 768;
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(isMobileScreen);

      if (!isMobileScreen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const showItem: boolean = isMobileMenuOpen || !isMobile;

  return (
    <nav className="flex">
      <div
        className={
          isMobileMenuOpen
            ? `absolute top-[4.85rem] right-0 container max-w-full h-screen bg-white flex flex-col items-center md:w-auto md:bg-red-500`
            : ""
        }
      >
        {showItem && (
          <>
            {links.map(({ innerText, href }) => (
              <Link
                href={href}
                key={innerText}
                onClick={() =>
                  isMobileMenuOpen && handleMobileMenuToggle(false)
                }
              >
                {innerText}
              </Link>
            ))}
            <Button
              className="md:inline-block md:ml-8"
              onClick={downloadResume}
            >
              Download CV
            </Button>
          </>
        )}
      </div>
      <BurgerMenu isOpen={isMobileMenuOpen} onToggle={handleMobileMenuToggle} />
    </nav>
  );
};

export default Nav;
