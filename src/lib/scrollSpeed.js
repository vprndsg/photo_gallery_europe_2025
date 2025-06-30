import { writable } from 'svelte/store';

export const scrollMode = writable('slow');

export function monitorScroll(container) {
  let lastY = container.scrollTop;
  let lastT = performance.now();
  const fastThreshold = 1; // px/ms

  function onScroll() {
    const now = performance.now();
    const y = container.scrollTop;
    const dy = Math.abs(y - lastY);
    const dt = now - lastT;
    const speed = dy / dt;
    lastY = y;
    lastT = now;
    scrollMode.set(speed > fastThreshold ? 'fast' : 'slow');
  }

  container.addEventListener('scroll', onScroll, { passive: true });
  return () => container.removeEventListener('scroll', onScroll);
}
