import { Box, ChakraProvider, Container, Flex, Stack } from '@chakra-ui/react';
import { useRef } from 'react';
import { Route, Routes, ScrollRestoration, useLocation } from 'react-router-dom';

import { MenuBase, MenuDesktop } from '~/widgets/menu';

import { desktopTheme, mobileTheme } from '~/shared/config';
import { LayoutContext } from '~/shared/contexts';
import { useIsMobile } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

import { normalRoutes } from '../router/config';

import styles from './Layout.module.css';

export const Layout = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const footerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isNotFoundPage = location.pathname === PATHS.notFound;
  const isDialogPage = new RegExp(`${PATHS.chats}/\\d+`).test(location.pathname);

  return (
    <>
      <LayoutContext.Provider value={{ header: headerRef, footer: footerRef }}>
        <ChakraProvider theme={isMobile ? mobileTheme : desktopTheme}>
          {isMobile ? (
            <Stack gap={0} className={styles.layout}>
              <Flex flex="1">
                <Routes>
                  {normalRoutes.map((props) => (
                    <Route key={props.path} path={props.path} element={props.view.base} />
                  ))}
                </Routes>
              </Flex>
              <Box position="sticky" bottom="0" bg="bg">
                <Box ref={footerRef}></Box>
                {!isDialogPage && <MenuBase />}
              </Box>
            </Stack>
          ) : (
            <Flex alignItems="start" h="full">
              {!isNotFoundPage && <MenuDesktop />}
              <Container
                maxW="6xl"
                pt="4"
                pb={6}
                ml={isNotFoundPage ? 'auto' : 0}
                minH="full"
                display="flex"
                flexDirection="column"
              >
                <Routes>
                  {normalRoutes.map((props) => (
                    <Route
                      key={props.path}
                      path={props.path}
                      element={props.view.desktop ?? props.view.base}
                    />
                  ))}
                </Routes>
              </Container>
            </Flex>
          )}
        </ChakraProvider>
      </LayoutContext.Provider>
      <ScrollRestoration />
    </>
  );
};
