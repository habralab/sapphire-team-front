import { ChakraProvider, Container } from '@chakra-ui/react';

import { MenuBase } from '~/widgets/menu';

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
        desktop
      )}
      {isBase ? <MenuBase /> : <div>Desktop Menu</div>}
    </ChakraProvider>
  );
};
