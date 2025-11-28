"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-black/40 backdrop-blur-lg border-b border-gray-800 fixed top-0 left-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Zurab.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/timeline" className="hover:text-white transition">Timeline</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-3 px-6 pb-4 flex flex-col gap-4 text-gray-300"
        >
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-white">Home</Link>
          <Link href="/timeline" onClick={() => setOpen(false)} className="hover:text-white">Timeline</Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="hover:text-white">Projects</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-white">Contact</Link>
        </motion.div>
      )}
    </nav>
  );
}
