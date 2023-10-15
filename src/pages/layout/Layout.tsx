import { ChakraProvider, Container, Box, Flex, Stack } from '@chakra-ui/react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { MenuBase, MenuDesktop } from '~/widgets/menu';

import { desktopTheme, mobileTheme, whiteMobileTheme } from '~/shared/config';
import { FooterContext } from '~/shared/contexts';
import { useIsMobile } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

interface LayoutProps {
  base: JSX.Element;
  desktop?: JSX.Element;
}

export const Layout = ({ base, desktop }: LayoutProps) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const footerRef = useRef<HTMLDivElement>(null);

  const isNotFoundPage = location.pathname === PATHS.notFound;
  const isChatPages = location.pathname.includes(PATHS.chats);
  const isDialogPage = new RegExp(`${PATHS.chats}/\\d+`).test(location.pathname);

  const mobile = isChatPages ? whiteMobileTheme : mobileTheme;
  const desk = desktopTheme;

  return (
    <FooterContext.Provider value={footerRef}>
      <ChakraProvider theme={isMobile ? mobile : desk}>
        {isMobile ? (
          <Stack height="100vh" gap={0}>
            <Box overflow="auto" flex="1">
              <Container maxW="md" pt={4} pb={4} minH="full" display="flex">
                {base}
              </Container>
            </Box>
            <Stack gap={0}>
              <Container maxW="md">
                <Box ref={footerRef} />
              </Container>
              {!isDialogPage && <MenuBase />}
            </Stack>
          </Stack>
        ) : (
          <Flex alignItems="start" height="100vh">
            {!isNotFoundPage && <MenuDesktop />}
            <Container
              maxW="4xl"
              pt="4"
              pb={6}
              ml={isNotFoundPage ? 'auto' : 0}
              minH="full"
              display="flex"
            >
              {desktop ?? base}
            </Container>
          </Flex>
        )}
      </ChakraProvider>
    </FooterContext.Provider>
  );
};
