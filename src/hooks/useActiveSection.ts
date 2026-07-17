"use client";

import { useState, useEffect } from "react";

const SECTION_IDS = ["hero", "about", "experience", "projects"] as const;

export function useActiveSection() {
  const [active, setActive] = useState<string>(SECTION_IDS[0]);

  useEffect(() => {
    const getActive = (): string => {
      const threshold = window.innerHeight * 0.5;

      let current: string = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);

        if (el && el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }

      return current;
    };

    const onScroll = () => setActive(getActive());

    setActive(getActive());

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return [active, setActive] as const;
}
