import { FaGithub, FaLinkedin, FaWhatsapp, FaGoogle } from "react-icons/fa";
import type { IconType } from "react-icons";
import type { ComponentType, CSSProperties } from "react";

function NYUIcon({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      style={style}
    >
      <path d="M16 2c-.5 0-1 .2-1.4.6L12 5.2l-1.2-1.1c-.8-.7-2-.7-2.7.1-.7.8-.6 2 .2 2.7l1.5 1.3-1.9 2.3c-.3.4-.5.9-.5 1.4v12.2c0 1.1.9 2 2 2h1v3c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-3h1c1.1 0 2-.9 2-2V11.9c0-.5-.2-1-.5-1.4l-1.9-2.3 1.5-1.3c.8-.7.9-1.9.2-2.7-.7-.8-1.9-.8-2.7-.1L20 5.2l-2.6-2.6c-.4-.4-.9-.6-1.4-.6zm0 3.4l2 2H14l2-2zm-4.6 4h9.2l1.4 1.7v11h-12v-11l1.4-1.7zM14 14v6h4v-6h-4zm-2 10h8v2h-8v-2z" />
    </svg>
  );
}

export type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: IconType | ComponentType<{ className?: string; style?: CSSProperties }>;
  description: string;
  color?: string;
};

export const contacts: ContactItem[] = [
  {
    label: "Work Email",
    value: "zj774@nyu.edu",
    href: "mailto:zj774@nyu.edu",
    icon: NYUIcon,
    description: "For professional inquiries",
    color: "#57068c",
  },
  {
    label: "Personal Email",
    value: "zurajashi09@gmail.com",
    href: "mailto:zurajashi09@gmail.com",
    icon: FaGoogle,
    description: "For everything else",
    color: "#EA4335",
  },
  {
    label: "WhatsApp",
    value: "+995 (599) 208-527",
    href: "https://wa.me/995599208527",
    icon: FaWhatsapp,
    description: "Quick responses",
    color: "#25D366",
  },
  {
    label: "LinkedIn",
    value: "zurabjashi",
    href: "https://www.linkedin.com/in/zurab-jashi",
    icon: FaLinkedin,
    description: "Let's connect",
    color: "#0A66C2",
  },
  {
    label: "GitHub",
    value: "@ZJashi",
    href: "https://github.com/ZJashi",
    icon: FaGithub,
    description: "Check out my code",
  },
];
