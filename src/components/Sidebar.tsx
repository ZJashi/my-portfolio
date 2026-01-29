"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/ZJashi", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/zurab-jashi",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:zj774@nyu.edu", icon: HiOutlineMail, label: "Email" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden w-12 h-12 rounded-2xl
                   bg-white/80 dark:bg-[#252529]/80 backdrop-blur-xl
                   border border-black/10 dark:border-white/10
                   flex items-center justify-center
                   shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`w-5 h-0.5 bg-(--ink) transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-(--ink) transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-(--ink) transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </div>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-[280px] z-40
                    bg-white/80 dark:bg-[#1E1E23]/90 backdrop-blur-2xl
                    border-r border-black/5 dark:border-white/10
                    flex flex-col
                    transition-transform duration-500 ease-out lg:translate-x-0
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Profile section */}
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Profile image with glow */}
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/20 via-emerald-500/20 to-cyan-500/20 blur-xl" />
              <div className="relative w-24 h-24 rounded-3xl overflow-hidden ring-2 ring-white/20 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Zura Jashi"
                  fill
                  sizes="96px"
                  className="object-cover object-[35%_center]"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-center"
          >
            <h1 className="text-xl font-semibold text-[#1E1E1C] dark:text-white">
              Zura Jashi
            </h1>
            <p className="text-sm text-[#6B6A65] dark:text-[#B8B8B6] mt-1.5">
              AI Researcher @ NYU
            </p>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mt-5"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="w-10 h-10 rounded-xl flex items-center justify-center
                           bg-black/5 dark:bg-white/10
                           hover:bg-black/10 dark:hover:bg-white/15
                           hover:scale-110
                           text-[#6B6A65] dark:text-[#A8A8A6] hover:text-[#1E1E1C] dark:hover:text-white
                           transition-all duration-300"
              >
                <link.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

        {/* Navigation */}
        <nav className="flex-1 py-6 px-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl
                               text-sm font-medium transition-all duration-300
                               ${
                                 isActive
                                   ? "text-[#1E1E1C] dark:text-white"
                                   : "text-[#6B6A65] dark:text-[#A8A8A6] hover:text-[#1E1E1C] dark:hover:text-white"
                               }`}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl bg-black/5 dark:bg-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Active dot */}
                    <span
                      className={`relative z-10 w-2 h-2 rounded-full transition-all duration-300
                                    ${
                                      isActive
                                        ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                                        : "bg-[#6B6A65]/30 dark:bg-[#A8A8A6]/30 group-hover:bg-[#6B6A65] dark:group-hover:bg-[#A8A8A6]"
                                    }`}
                    />
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom section */}
        <div className="p-6 space-y-4">
          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-3 text-sm font-medium text-center rounded-xl
                       bg-[var(--ink)] text-white dark:bg-white dark:text-[#1A1A1F]
                       hover:opacity-90 hover:shadow-lg
                       transition-all duration-300"
          >
            Download Resume
          </a>

          {/* Theme toggle */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs text-[#6B6A65] dark:text-[#A8A8A6]">
              Theme
            </span>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
