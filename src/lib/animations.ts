// Spread onto motion elements for scroll-triggered fade-in-up
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
} as const;

// Spread onto motion elements for mount-triggered fade-in-up (hero, sidebar)
export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
} as const;

// Variants for staggered lists
export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
} as const;

export const staggerItem = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0 },
} as const;
