import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import { FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import Particles from "./components/Particles"; // ✅ your particle component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zurab Jashi | Portfolio",
  description: "Physicist, Mathematician, Data Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen overflow-x-hidden`}>

        {/* 🌌 Global Particles Background */}
        <Particles
          particleCount={500}
          particleSpread={15}
          alphaParticles = {false}
          particleBaseSize = {100}
          speed={0.15}
          particleColors={["#00bfff", "#e7d918ff", "#d83030ff"]}
          cameraDistance={10}
          sizeRandomness = {10}
          className="fixed top-0 left-0 w-full h-full -z-10"
        />

        {/* Layout Wrapper */}
        <div className="flex relative z-10">
          {/* Sidebar */}
          <nav className="fixed top-0 left-0 h-full w-52 bg-[var(--bg-sidebar)] border-r border-[var(--accent-blue)] flex flex-col items-center py-10 space-y-8">
            {/* Profile Image */}
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[var(--accent-blue)] shadow-lg hover:scale-105 transition">
              <Image
                src="/profile.jpg"
                alt="Profile photo"
                width={112}
                height={112}
                className="object-cover"
              />
            </div>

            {/* Name */}
            <h1 className="text-xl font-bold text-[var(--accent-blue)]">Zura</h1>

            {/* Nav Links */}
            <ul className="flex flex-col space-y-6 text-gray-300">
              <li>
                <a
                  href="#about"
                  className="flex items-center space-x-2 hover:text-[var(--accent-blue)] transition"
                >
                  <FaUser /> <span>About</span>
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="flex items-center space-x-2 hover:text-[var(--accent-blue)] transition"
                >
                  <FaBriefcase /> <span>Experience</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="flex items-center space-x-2 hover:text-[var(--accent-blue)] transition"
                >
                  <FaProjectDiagram /> <span>Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center space-x-2 hover:text-[var(--accent-blue)] transition"
                >
                  <FaEnvelope /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Main Content */}
          <main className="ml-52 flex-1 relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}

