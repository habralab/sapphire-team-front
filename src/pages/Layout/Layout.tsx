import { ChakraProvider, useBreakpointValue } from '@chakra-ui/react';

import { desktopTheme, mobileTheme } from '~/shared/config/theme';

interface LayoutProps {
  mobile?: JSX.Element;
  desktop?: JSX.Element;
  all?: JSX.Element;
}

export const Layout = ({ mobile, desktop, all }: LayoutProps) => {
  const breakpoint = useBreakpointValue(
    { base: 'mobile', md: 'desktop' },
    { ssr: false },
  );
  return (
    <>
      {(breakpoint === 'mobile' || !desktop) && mobile && (
        <ChakraProvider theme={mobileTheme}>
          {mobile}
          <div>Mobile Menu</div>
        </ChakraProvider>
      )}
      {breakpoint === 'desktop' && desktop && (
        <ChakraProvider theme={desktopTheme}>
          {desktop}
          <div>Desktop Menu</div>
        </ChakraProvider>
      )}
      {!!all && all}
    </>
  );
};
