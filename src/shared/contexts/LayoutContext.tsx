import { createContext } from 'react';

export const LayoutContext = createContext<{
  header: React.RefObject<HTMLDivElement>;
  footer: React.RefObject<HTMLDivElement>;
} | null>(null);
