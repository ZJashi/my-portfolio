"use client";

import { motion } from "framer-motion";
import { contacts } from "@/lib/contact";

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
          <h2 className="text-2xl md:text-3xl font-semibold text-(--ink)">
            Contact
          </h2>
        </div>
        <div className="flex-1 h-px bg-linear-to-r from-black/10 to-transparent dark:from-white/10" />
      </motion.div>

      {/* Contact Links */}
      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={
              contact.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group flex items-center gap-4 p-4 rounded-xl
                       border border-black/10 dark:border-white/10
                       bg-white/40 dark:bg-white/5
                       hover:bg-white/70 dark:hover:bg-white/8
                       hover:scale-[1.02] hover:shadow-lg
                       transition-all duration-300"
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-xl
                         bg-black/5 dark:bg-white/10 transition-all duration-300
                         group-hover:scale-110"
              style={
                contact.color ? { backgroundColor: `${contact.color}20` } : {}
              }
            >
              <contact.icon
                className="w-5 h-5 transition-colors duration-300"
                style={{ color: contact.color || "var(--stone)" }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-(--ink) text-sm">
                {contact.label}
              </p>
              <p className="text-(--stone) font-mono text-xs mt-0.5 truncate group-hover:underline underline-offset-2">
                {contact.value}
              </p>
            </div>

            <svg
              className="w-4 h-4 text-(--stone) transition-transform group-hover:translate-x-1"
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
          </motion.a>
        ))}
      </div>
    </section>
  );
}
