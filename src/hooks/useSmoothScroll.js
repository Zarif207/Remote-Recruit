import { useEffect } from "react";
import Lenis from "lenis";

/**
 * useSmoothScroll
 * Initialises Lenis smooth scrolling once for the whole page.
 * Lenis hijacks the native scroll and replays it with an
 * ease-out interpolation — the "slow, buttery" feel of modern
 * sites like Vercel, Linear, and Framer.
 */
export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,          // how long the ease-out takes (seconds)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,   // slightly slower than native — feels premium
      touchMultiplier: 1.5,   // mobile touch feels natural
    });

    /* Lenis needs to be ticked on every animation frame */
    let raf;
    function tick(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}
