// One scroll/resize listener for the whole page, batched into a single rAF.
// Components subscribe a callback instead of each adding their own listener.
const subs = new Set();
let queued = false;

function run() {
  queued = false;
  subs.forEach((fn) => fn());
}

function queue() {
  if (!queued) {
    queued = true;
    requestAnimationFrame(run);
  }
}

if (typeof window !== 'undefined') {
  addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', queue, { passive: true });
}

export function onFrame(fn) {
  subs.add(fn);
  queue();
  return () => subs.delete(fn);
}

export const reducedMotion =
  typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

export const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
