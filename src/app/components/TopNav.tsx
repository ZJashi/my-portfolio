"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/notes", label: "Notes" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
];

export default function TopNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
            <div
                className="flex items-center gap-10
                   rounded-full px-10 py-4
                   bg-white/80 backdrop-blur-md
                   border border-black/10
                   shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            >
                {navItems.map((item) => {
                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group relative flex flex-col items-center
                         text-sm tracking-wide transition"
                        >
                            {/* Label */}
                            <span
                                className={`transition-colors duration-200
                  ${
                                    isActive
                                        ? "text-[var(--ink)] font-medium"
                                        : "text-[var(--stone)] group-hover:text-[var(--ink)]"
                                }
                `}
                            >
                {item.label}
              </span>

                            {/* Active dot */}
                            {isActive && (
                                <span className="absolute -bottom-2 h-1 w-1 rounded-full bg-[var(--ink)]" />
                            )}

                            {/* Hover underline */}
                            <span
                                className="absolute -bottom-2 h-[1.5px]
                           w-0 bg-[var(--ink)]
                           transition-all duration-300
                           group-hover:w-full"
                            />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
