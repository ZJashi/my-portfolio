"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaGoogle } from "react-icons/fa";

// NYU Torch Logo
function NYUIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} style={style}>
      <path d="M16 2c-.5 0-1 .2-1.4.6L12 5.2l-1.2-1.1c-.8-.7-2-.7-2.7.1-.7.8-.6 2 .2 2.7l1.5 1.3-1.9 2.3c-.3.4-.5.9-.5 1.4v12.2c0 1.1.9 2 2 2h1v3c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-3h1c1.1 0 2-.9 2-2V11.9c0-.5-.2-1-.5-1.4l-1.9-2.3 1.5-1.3c.8-.7.9-1.9.2-2.7-.7-.8-1.9-.8-2.7-.1L20 5.2l-2.6-2.6c-.4-.4-.9-.6-1.4-.6zm0 3.4l2 2H14l2-2zm-4.6 4h9.2l1.4 1.7v11h-12v-11l1.4-1.7zM14 14v6h4v-6h-4zm-2 10h8v2h-8v-2z"/>
    </svg>
  );
}

const contacts = [
  {
    label: "Work Email",
    value: "zj2148@nyu.edu",
    href: "mailto:zj2148@nyu.edu",
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
    value: "+1 (234) 567-8900",
    href: "https://wa.me/12345678900",
    icon: FaWhatsapp,
    description: "Quick responses",
    color: "#25D366",
  },
  {
    label: "LinkedIn",
    value: "zurajashi",
    href: "https://linkedin.com/in/zurajashi",
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

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                     bg-[var(--gold)]/10 text-[var(--gold)] text-sm mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--gold)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--gold)]"></span>
          </span>
          Available for opportunities
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-semibold text-[var(--ink)] mb-4">
          Let&apos;s <span className="text-[var(--ultramarine)]">Connect</span>
        </h1>
        <p className="text-lg text-[var(--stone)] max-w-md mx-auto">
          Have an idea, question, or just want to say hi? I&apos;m always up for a good conversation.
        </p>
      </motion.div>

      {/* Contact Links */}
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            className="group flex items-center gap-5 p-5 rounded-2xl
                       border border-black/10 dark:border-white/10
                       bg-white/40 dark:bg-white/5
                       hover:bg-white/70 dark:hover:bg-white/10
                       hover:scale-[1.02] hover:shadow-lg
                       transition-all duration-300"
          >
            <div
              className="flex items-center justify-center w-14 h-14 rounded-xl
                         bg-black/5 dark:bg-white/10 transition-all duration-300
                         group-hover:scale-110"
              style={contact.color ? { backgroundColor: `${contact.color}20` } : {}}
            >
              <contact.icon
                className="w-6 h-6 transition-colors duration-300"
                style={{ color: contact.color || "var(--stone)" }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-[var(--ink)]">{contact.label}</p>
                <span className="text-xs text-[var(--stone)] hidden sm:inline">
                  — {contact.description}
                </span>
              </div>
              <p className="text-[var(--ultramarine)] font-mono text-sm mt-0.5 truncate
                           group-hover:underline underline-offset-2">
                {contact.value}
              </p>
            </div>

            <motion.div
              className="text-[var(--stone)]"
              initial={{ x: 0, opacity: 0.5 }}
              whileHover={{ x: 5, opacity: 1 }}
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>
          </motion.a>
        ))}
      </div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-sm text-[var(--stone)] mt-12"
      >
        Based in New York City · Usually respond within 24 hours
      </motion.p>
    </main>
  );
}
