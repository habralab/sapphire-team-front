import { createContext } from 'react';

export const FooterContext = createContext<React.RefObject<HTMLDivElement> | null>(null);
