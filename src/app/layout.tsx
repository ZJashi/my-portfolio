"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
  FaHistory,
} from "react-icons/fa";
import Particles from "./components/Particles";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // ─────────────────────────────────────────────
  // Active Section Scroll Highlight
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["about", "experience", "projects", "contact"];
    const sectionElements = sections.map((id) => ({
      id,
      element: document.getElementById(id),
    }));

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const sec of sectionElements) {
        if (!sec.element) continue;

        const rect = sec.element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`${inter.className} relative min-h-screen overflow-x-hidden`}
      >
        {/* 🌌 Background Particles */}
        {/* <Particles
          particleCount={500}
          particleSpread={15}
          alphaParticles={false}
          particleBaseSize={100}
          speed={0.15}
          particleColors={["#11545a99", "#143097ff", "#112b92ff"]}
          cameraDistance={10}
          sizeRandomness={10}
          className="fixed top-0 left-0 w-full h-full -z-10"
        /> */}

        {/* Wrapper */}
        <div className="flex relative z-10">

          {/* ───────────────────────────── */}
          {/*            SIDEBAR           */}
          {/* ───────────────────────────── */}
          <nav
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            className={`
              fixed top-0 left-0 h-full 
              ${expanded ? "w-56" : "w-16"}
              backdrop-blur-xl bg-black/30 border-r border-blue-500/40
              flex flex-col items-center py-10 space-y-10
              transition-all duration-300 overflow-hidden
            `}
          >
            {/* Cyberpunk Profile Halo */}
            <div
              className={`
                relative transition-all duration-300
                ${expanded ? "w-32 h-32" : "w-12 h-12"}
              `}
            >
              {/* Outer rotating halo */}
              <div
                className={`
                  absolute inset-0 rounded-full opacity-60
                  bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400
                  animate-spin-slow
                  ${expanded ? "opacity-70" : "opacity-30"}
                `}
              />

              {/* Inner circle with image */}
              <div
                className="absolute inset-1 rounded-full overflow-hidden border-2 border-blue-500/60 
                bg-black/70 backdrop-blur-xl"
              >
                <Image
                  src="/profile.jpg"
                  alt="Profile photo"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Name */}
            <h1
              className={`
                font-bold text-blue-400 tracking-wide transition-all duration-300
                ${expanded ? "text-xl opacity-100" : "text-sm opacity-0"}
              `}
            >
              Zura
            </h1>

            {/* Navigation */}
            <ul className="flex flex-col space-y-6 text-gray-300 w-full px-3">
              {[
                { href: "/#about", icon: <FaUser />, label: "About" },
                { href: "/#experience", icon: <FaBriefcase />, label: "Experience" },
                { href: "/#projects", icon: <FaProjectDiagram />, label: "Projects" },
                { href: "/timeline", icon: <FaHistory />, label: "Timeline" },
                { href: "/#contact", icon: <FaEnvelope />, label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative flex items-center space-x-3 
                      p-2 rounded-lg hover:bg-blue-500/10 transition duration-200"
                  >
                    {/* Neon Active Bar */}
                    <span
                      className={`
                        absolute left-0 top-0 bottom-0 w-1 bg-blue-400 
                        rounded-r-lg transition-all duration-300
                        ${
                          activeSection === item.href.replace("#", "")
                            ? "scale-y-100"
                            : "scale-y-0 group-hover:scale-y-100"
                        }
                      `}
                    />

                    {/* Icon */}
                    <span className="text-blue-300 group-hover:text-blue-400">
                      {item.icon}
                    </span>

                    {/* Label */}
                    <span
                      className={`
                        text-gray-200 group-hover:text-white transition-all duration-300
                        ${expanded ? "opacity-100" : "opacity-0"}
                      `}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className={`
                mt-auto mb-10 px-4 py-2 rounded-lg text-center 
                bg-blue-600/60 text-white shadow-lg shadow-blue-500/40 
                hover:bg-blue-500 transition-all duration-300
                ${expanded ? "opacity-100" : "opacity-0 pointer-events-none"}
              `}
            >
              Download Resume
            </a>
          </nav>

          {/* Main content */}
          <main
            className={`
              flex-1 relative z-10 transition-all duration-300
              ${expanded ? "ml-56" : "ml-16"}
            `}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}







