"use client";

import { motion } from "framer-motion";

export default function TimelineItem({ item }: { item: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative pl-10 mb-10"
    >
      <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg" />

      <h3 className="text-xl font-bold">{item.title}</h3>
      <p className="text-sm text-gray-400">{item.place}</p>
      <p className="text-sm mt-1 text-gray-500">{item.year}</p>

      <p className="mt-2 text-gray-300">{item.description}</p>
    </motion.div>
  );
}

