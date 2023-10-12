import { ChakraProvider, Container } from '@chakra-ui/react';

import { MenuBase, MenuDesktop } from '~/widgets/menu';

import { desktopTheme, mobileTheme } from '~/shared/config';
import { useIsMobile } from '~/shared/hooks';

interface LayoutProps {
  base: JSX.Element;
  desktop?: JSX.Element;
}

export const Layout = ({ base, desktop }: LayoutProps) => {
  const isMobile = useIsMobile();
  const isBase = isMobile || !desktop;

  return (
    <ChakraProvider theme={isBase ? mobileTheme : desktopTheme}>
      {isBase ? (
        <Container maxW="md" px={5} pt={2} pb={16}>
          {base}
        </Container>
      ) : (
        <Container pl={64} pt={8} pr={6} pb={80}>
          {desktop}
        </Container>
      )}
      {isBase ? <MenuBase /> : <MenuDesktop />}
    </ChakraProvider>
  );
};
