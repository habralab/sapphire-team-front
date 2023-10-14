import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import { MenuBase, MenuDesktop } from '~/widgets/menu';

import { desktopTheme, mobileTheme, whiteMobileTheme } from '~/shared/config';
import { useIsMobile } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

interface LayoutProps {
  base: JSX.Element;
  desktop?: JSX.Element;
}

export const Layout = ({ base, desktop }: LayoutProps) => {
  const isMobile = useIsMobile();
  const location = useLocation();

  const isChatPages = location.pathname.includes(PATHS.chats);
  const isDialogPage = new RegExp(`${PATHS.chats}/\\d+`).test(location.pathname);

  const mobile = isChatPages ? whiteMobileTheme : mobileTheme;
  const desk = desktopTheme;

  return (
    <ChakraProvider theme={isMobile ? mobile : desk}>
      {isMobile ? (
        <Flex alignItems="start" mt="4" mb={6}>
          <Container maxW="md" pb={isChatPages ? '73px' : '72.8px'}>
            {base}
          </Container>
          {!isDialogPage && <MenuBase />}
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
