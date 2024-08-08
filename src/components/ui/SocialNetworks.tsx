import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

const SocialNetworks = () => (
  <div className="flex">
    <SocialMedia href="https://github.com/lucasgarciabertaina">
      <Github size={24} />
    </SocialMedia>
    <SocialMedia href="https://www.linkedin.com/in/lucasgarciabertaina/">
      <Linkedin size={24} />
    </SocialMedia>
  </div>
);

import React, { ReactNode } from "react";

interface SocialMediaProps {
  children: ReactNode;
  href: string;
}

const SocialMedia: React.FC<SocialMediaProps> = (props) => (
  <a
    href={props.href}
    target="_blank"
    className="m-2 hover:text-gray-400 text-gray-600"
  >
    {props.children}
  </a>
);

export default SocialNetworks;
