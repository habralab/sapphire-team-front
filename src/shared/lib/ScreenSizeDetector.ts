import { useState, useEffect } from 'react';

export const useScreenSize = () => {
  const [widthScreenSize, setWidthScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return widthScreenSize;
};
