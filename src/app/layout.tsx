"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import {
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import Particles from "./components/Particles";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${inter.className} relative min-h-screen overflow-x-hidden`}
      >
        {/* 🌌 Background Particles */}
        <Particles
          particleCount={500}
          particleSpread={15}
          alphaParticles={false}
          particleBaseSize={100}
          speed={0.15}
          particleColors={["#11545a99", "#143097ff", "#112b92ff"]}
          cameraDistance={10}
          sizeRandomness={10}
          className="fixed top-0 left-0 w-full h-full -z-10"
        />

        {/* Layout Wrapper */}
        <div className="flex relative z-10">
          {/* Sidebar */}
          <nav
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            className={`fixed top-0 left-0 h-full
              ${expanded ? "w-52" : "w-16"}
              bg-[var(--bg-sidebar)] border-r border-[var(--accent-blue)]
              flex flex-col items-center py-10 space-y-8
              transition-all duration-300 overflow-hidden`}
          >
            {/* Profile Image */}
            <div
              className={`rounded-full overflow-hidden border-2 border-[var(--accent-blue)] shadow-lg transition-all duration-300 ${
                expanded ? "w-28 h-28" : "w-10 h-10"
              }`}
            >
              <Image
                src="/profile.jpg"
                alt="Profile photo"
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Name */}
            <h1
              className={`font-bold text-[var(--accent-blue)] transition-all duration-300 ${
                expanded ? "text-xl opacity-100" : "text-sm opacity-0"
              }`}
            >
              Zura
            </h1>

            {/* Nav Links */}
            <ul className="flex flex-col space-y-6 text-gray-300">
              {[
                { href: "#about", icon: <FaUser />, label: "About" },
                { href: "#experience", icon: <FaBriefcase />, label: "Experience" },
                { href: "#projects", icon: <FaProjectDiagram />, label: "Projects" },
                { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-2 hover:text-[var(--accent-blue)] transition"
                  >
                    {item.icon}
                    <span
                      className={`transition-all duration-300 ${
                        expanded ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content */}
          <main
            className={`flex-1 relative z-10 transition-all duration-300 ${
              expanded ? "ml-52" : "ml-16"
            }`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}




