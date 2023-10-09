import { useBreakpointValue } from '@chakra-ui/react';

export const useIsMobile = () =>
  useBreakpointValue({ base: 'base', md: 'desktop' }, { ssr: false }) === 'base';
