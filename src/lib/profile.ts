import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import type { IconType } from "react-icons";

export type SocialLink = {
  href: string;
  icon: IconType;
  label: string;
};

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/ZJashi",               icon: FaGithub,      label: "GitHub"   },
  { href: "https://www.linkedin.com/in/zurab-jashi", icon: FaLinkedin,    label: "LinkedIn" },
  { href: "mailto:zj774@nyu.edu",                    icon: HiOutlineMail, label: "Email"    },
];
