import { useEffect, useState } from 'react';

export const useWindowSizes = () => {
  const [sizes, setSizes] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function resize() {
      setSizes({ width: window.innerWidth, height: window.innerHeight });
    }
    resize();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return sizes;
};
