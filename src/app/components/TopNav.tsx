"use client";

import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export default function TopNav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-center gap-14">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-base font-semibold tracking-wide hover:text-blue-600 transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}


