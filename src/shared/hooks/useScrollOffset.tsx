import { useState, useLayoutEffect } from 'react';

export function useScrollOffset() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScroll({ x: window.scrollX, y: window.scrollY });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scroll;
}

export default useScrollOffset;
