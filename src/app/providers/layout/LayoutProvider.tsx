import { ReactNode, useEffect } from 'react';

import { useIsMobile } from '~/shared/hooks';

export const LayoutProvider = ({ children }: { children?: ReactNode }) => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return children;
};
