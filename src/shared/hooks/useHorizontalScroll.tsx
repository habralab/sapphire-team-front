import { useEffect, useRef } from 'react';

export function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();

        el.scrollBy({
          left: e.deltaY < 0 ? -30 : 30,
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => {
        el.removeEventListener('wheel', onWheel);
      };
    }
  }, []);
  return elRef;
}
