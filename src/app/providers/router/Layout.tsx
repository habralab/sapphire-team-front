import { Box, Container, Flex, Stack } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { ScrollRestoration, useLocation } from 'react-router-dom';

import { BlankPage } from '~/pages/blank';

import { MenuBase, MenuDesktop } from '~/widgets/menu';

import { LayoutContext } from '~/shared/contexts';
import { useIsMobile, useWindowSizes } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

import { AuthProvider } from '../auth';

import { Routes } from './Routes';

export const Layout = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const sizes = useWindowSizes();
  const footerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isNotFoundPage = location.pathname === PATHS.notFound;
  const isOnboardingPage = location.pathname === PATHS.onboarding;
  const isDialogPage = new RegExp(`${PATHS.chats}/\\d+`).test(location.pathname);

  useEffect(() => {
    if (!isMobile) return;
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [isMobile, sizes.height]);

  return (
    <>
      <LayoutContext.Provider value={{ header: headerRef, footer: footerRef }}>
        <AuthProvider>
          {isMobile ? (
            <Stack gap={0} minH="full">
              <Flex flex="1">
                <Routes />
              </Flex>
              <Box position="sticky" bottom="0" bg="bg">
                <Box ref={footerRef}></Box>
                {!isDialogPage && !isOnboardingPage && <MenuBase />}
              </Box>
            </Stack>
          ) : (
            <Flex alignItems="start" h="full">
              {/* <BlankPage /> */}
              {/* ВОТ ТУТ ДЛЯ ДЕСКТОПА РАСКОММЕНТИРУЙ, А BlankPage ЗАКОММЕНТЬ */}
              {!isNotFoundPage && <MenuDesktop />}
              <Container
                maxW="6xl"
                minW="4xl"
                pt="4"
                pb={6}
                ml={isNotFoundPage ? 'auto' : 0}
                minH="full"
                display="flex"
                flexDirection="column"
              >
                <Routes />
              </Container>
            </Flex>
          )}
        </AuthProvider>
      </LayoutContext.Provider>
      <ScrollRestoration />
    </>
  );
};
