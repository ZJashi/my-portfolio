"use client";

import { motion } from "framer-motion";
import { TECH } from "@/lib/tech";
import { skills } from "@/lib/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp } from "@/lib/animations";

const cardClass =
  "group flex items-center gap-3 px-5 py-3 rounded-xl shrink-0 \
border border-black/10 dark:border-white/10 \
bg-white/50 dark:bg-white/5 \
hover:bg-white/80 dark:hover:bg-white/10 \
hover:shadow-lg hover:scale-105 \
transition-all duration-300";

function SkillCard({ techKey, index }: { techKey: keyof typeof TECH; index: number }) {
  const tech = TECH[techKey];
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
      className={cardClass}
    >
      <tech.Icon size={24} style={{ color: tech.color }} />
      <span className="text-sm font-medium text-(--ink)">{tech.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const reversed = [...skills].reverse();

  return (
    <section id="skills" className="space-y-8">
      <SectionHeader title="Skills" />

      <div className="relative overflow-hidden py-8">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-(--bg-main) to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-(--bg-main) to-transparent z-10" />

        {/* Row 1 — scrolling left */}
        <div className="flex gap-6 mb-6 animate-scroll-left">
          {[...skills, ...skills].map((key, i) => (
            <SkillCard key={`${key}-a-${i}`} techKey={key} index={i} />
          ))}
        </div>

        {/* Row 2 — scrolling right */}
        <div className="flex gap-6 animate-scroll-right">
          {[...reversed, ...reversed].map((key, i) => (
            <SkillCard key={`${key}-b-${i}`} techKey={key} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
