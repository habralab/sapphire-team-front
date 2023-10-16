import { ReactNode, useEffect } from 'react';

import { useIsMobile } from '~/shared/hooks';
import { useWindowSizes } from '~/shared/hooks/useWindowSizes';

export const LayoutProvider = ({ children }: { children?: ReactNode }) => {
  const isMobile = useIsMobile();
  const sizes = useWindowSizes();

  useEffect(() => {
    if (!isMobile) return;
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [isMobile, sizes.height]);

  return children;
};
