"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaGoogle } from "react-icons/fa";

function NYUIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
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

const contacts = [
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

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-10"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500/50 animate-ping" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--ink)]">
            Contact
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-black/10 to-transparent dark:from-white/10" />
      </motion.div>

      {/* Contact Links */}
      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group flex items-center gap-4 p-4 rounded-xl
                       border border-black/10 dark:border-white/10
                       bg-white/40 dark:bg-white/5
                       hover:bg-white/70 dark:hover:bg-white/[0.08]
                       hover:scale-[1.02] hover:shadow-lg
                       transition-all duration-300"
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-xl
                         bg-black/5 dark:bg-white/10 transition-all duration-300
                         group-hover:scale-110"
              style={contact.color ? { backgroundColor: `${contact.color}20` } : {}}
            >
              <contact.icon
                className="w-5 h-5 transition-colors duration-300"
                style={{ color: contact.color || "var(--stone)" }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[var(--ink)] text-sm">
                {contact.label}
              </p>
              <p className="text-[var(--stone)] font-mono text-xs mt-0.5 truncate group-hover:underline underline-offset-2">
                {contact.value}
              </p>
            </div>

            <svg
              className="w-4 h-4 text-[var(--stone)] transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
