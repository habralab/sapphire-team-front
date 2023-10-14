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
        <Flex alignItems="start" mt="4" mb={6}>
          <Container maxW="md" pb={'72.8px'}>
            {base}
          </Container>
          <MenuBase />
        </Flex>
      ) : (
        <Flex alignItems="start" mt="4" mb={6}>
          <MenuDesktop />
          <Container maxW="4xl" ml={0}>
            {desktop ?? base}
          </Container>
        </Flex>
      )}
    </ChakraProvider>
  );
};
