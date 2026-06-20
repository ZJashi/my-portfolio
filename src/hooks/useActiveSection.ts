"use client";

import { useState, useEffect, useRef } from "react";

const SECTION_IDS = ["hero", "about", "experience", "projects", "contact"] as const;

/**
 * Returns the ID of whichever home-page section is currently visible.
 * Only active when `enabled` is true (i.e. pathname === "/").
 *
 * `pendingTarget` is an optional section ID to jump to immediately when the
 * hook activates (used when navigating back from another page).
 */
export function useActiveSection(enabled: boolean, pendingTarget: string | null) {
  const [active, setActive] = useState<string>(SECTION_IDS[0]);
  const pendingRef = useRef(pendingTarget);
  pendingRef.current = pendingTarget;

  useEffect(() => {
    if (!enabled) return;

    // getBoundingClientRect().top is always correct regardless of offsetParent.
    // A section is "active" when its top edge has passed the 50% viewport mark.
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

    // Wait for the page transition to finish before reading DOM positions.
    const timer = setTimeout(() => {
      if (pendingRef.current) {
        document.getElementById(pendingRef.current)
          ?.scrollIntoView({ behavior: "instant" });
      }
      // Read position AFTER the instant scroll so the first value is correct.
      setActive(getActive());
      window.addEventListener("scroll", onScroll, { passive: true });
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [enabled]);

  return [active, setActive] as const;
}
