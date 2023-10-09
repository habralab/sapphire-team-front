import { ChakraProvider, useBreakpointValue } from '@chakra-ui/react';

import { desktopTheme, mobileTheme } from '~/shared/config/theme';

interface LayoutProps {
  base: JSX.Element;
  desktop?: JSX.Element;
}

export const Layout = ({ base, desktop }: LayoutProps) => {
  const breakpoint = useBreakpointValue({ base: 'base', md: 'desktop' }, { ssr: false });

  const isBase = breakpoint === 'base' || !desktop;

  return (
    <ChakraProvider theme={isBase ? mobileTheme : desktopTheme}>
      {isBase ? base : desktop}
      {isBase ? <div>Mobile Menu</div> : <div>Desktop Menu</div>}
    </ChakraProvider>
  );
};
