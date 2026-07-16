import Image from "next/image";
import { motion } from "framer-motion";
import { socialLinks } from "@/lib/profile";

export function SidebarProfile() {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-teal-500/20 via-emerald-500/20 to-cyan-500/20 blur-xl" />
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
              link.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="w-10 h-10 rounded-xl flex items-center justify-center
                       bg-black/5 dark:bg-white/10
                       hover:bg-black/10 dark:hover:bg-white/15 hover:scale-110
                       text-[#6B6A65] dark:text-[#A8A8A6]
                       hover:text-[#1E1E1C] dark:hover:text-white
                       transition-all duration-300"
          >
            <link.icon size={18} />
          </a>
        ))}
      </motion.div>
    </div>
  );
}
