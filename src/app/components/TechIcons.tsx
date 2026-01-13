"use client";

import { motion } from "framer-motion";
import { TECH } from "@/content/tech";

type Props = {
    tech: (keyof typeof TECH)[];
    size?: number;
};

export function TechIcons({ tech, size = 20 }: Props) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.05,
                    },
                },
            }}
            className="flex flex-wrap gap-3"
        >
            {tech.map((key) => {
                const entry = TECH[key];
                if (!entry) return null;

                const { Icon, name } = entry;

                return (
                    <motion.div
                        key={key}
                        variants={{
                            hidden: { opacity: 0, y: 4 },
                            show: { opacity: 1, y: 0 },
                        }}
                        className="group relative"
                    >
                        <Icon
                            size={size}
                            className="
                text-(--stone)
                transition
                duration-200
                group-hover:text-(--ink)
                group-hover:-translate-y-0.5
                group-hover:scale-110
              "
                        />

                        {/* Tooltip */}
                        <span
                            className="
                pointer-events-none
                absolute -top-8 left-1/2 -translate-x-1/2
                rounded-md bg-black px-2 py-1
                text-xs text-white whitespace-nowrap
                opacity-0 group-hover:opacity-100
                transition
              "
                        >
              {name}
            </span>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
