import { ChakraProvider, Container, Box, Flex, Stack } from '@chakra-ui/react';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { MenuBase, MenuDesktop } from '~/widgets/menu';

import { desktopTheme, mobileTheme, whiteMobileTheme } from '~/shared/config';
import { LayoutContext } from '~/shared/contexts';
import { useIsMobile } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

import styles from './Layout.module.css';

interface LayoutProps {
  base: JSX.Element;
  desktop?: JSX.Element;
}

export const Layout = ({ base, desktop }: LayoutProps) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const footerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isNotFoundPage = location.pathname === PATHS.notFound;
  const isChatPages = location.pathname.includes(PATHS.chats);
  const isDialogPage = new RegExp(`${PATHS.chats}/\\d+`).test(location.pathname);

  const mobile = isChatPages ? whiteMobileTheme : mobileTheme;
  const desk = desktopTheme;

  useEffect(() => {
    requestAnimationFrame(function () {
      if (isChatPages) {
        document
          .querySelector('meta[name=theme-color]')
          ?.setAttribute('content', '#FFFFFF');
      } else {
        document
          .querySelector('meta[name=theme-color]')
          ?.setAttribute('content', '#F5F5F5');
      }
    });
  }, [isChatPages]);

  return (
    <LayoutContext.Provider value={{ header: headerRef, footer: footerRef }}>
      <ChakraProvider theme={isMobile ? mobile : desk}>
        {isMobile ? (
          <Stack className={styles.layout} gap={0}>
            <Stack gap={0}>
              <Box ref={headerRef} />
            </Stack>
            <Box overflow="auto" flex="1">
              <Container maxW="md" pt={4} pb={4} minH="full" display="flex">
                {base}
              </Container>
            </Box>
            <Stack gap={0}>
              <Box ref={footerRef} />
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
    </LayoutContext.Provider>
  );
};
