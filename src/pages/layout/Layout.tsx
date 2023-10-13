import { ChakraProvider, Container, Flex } from '@chakra-ui/react';

import { MenuBase, MenuDesktop } from '~/widgets/menu';

import { desktopTheme, mobileTheme } from '~/shared/config';
import { useIsMobile } from '~/shared/hooks';

interface LayoutProps {
  base: JSX.Element;
  desktop?: JSX.Element;
}

export const Layout = ({ base, desktop }: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <ChakraProvider theme={isMobile ? mobileTheme : desktopTheme}>
      {isMobile ? (
        <Flex alignItems="baseline">
          <Container maxW="md" pt={2} pb={16} mb={6}>
            {base}
          </Container>
          <MenuBase />
        </Flex>
      ) : (
        <Flex alignItems="baseline">
          <MenuDesktop />
          <Container maxW="4xl" pt={4} ml={0} mb={6}>
            {desktop ?? base}
          </Container>
        </Flex>
      )}
    </ChakraProvider>
  );
};
