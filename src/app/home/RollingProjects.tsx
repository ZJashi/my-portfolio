"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/content/projects";

export default function RollingProjects() {
    return (
        <div className="relative mt-16 w-full overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white via-white/80 to-transparent" />

            <motion.div
                className="flex w-max gap-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 45, ease: "linear", repeat: Infinity }}
            >
                {[...projects, ...projects].map((project, i) => (
                    <motion.a
                        key={`${project.slug}-${i}`}
                        href={`/projects/${project.slug}`}
                        className="group relative whitespace-nowrap rounded-full
                       border border-black/10 bg-white/60
                       px-6 py-3 text-sm text-(--ink)
                       backdrop-blur-md hover:bg-white/80 transition"
                        whileHover={{ scale: 1.05 }}
                    >
                        {project.title}

                        {/* Hover preview */}
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            whileHover={{ opacity: 1, y: -12, scale: 1 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="pointer-events-none absolute left-1/2 bottom-full
                         z-20 mb-4 w-56 -translate-x-1/2
                         rounded-xl border border-black/10
                         bg-white/90 p-2 shadow-xl"
                        >
                            <Image
                                src={project.preview}
                                alt={project.title}
                                width={400}
                                height={250}
                                className="rounded-lg object-cover"
                                unoptimized
                            />
                        </motion.div>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
}

