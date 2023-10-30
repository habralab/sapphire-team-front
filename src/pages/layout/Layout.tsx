import { Box, ChakraProvider, Container, Flex, Stack } from '@chakra-ui/react';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { MenuBase, MenuDesktop } from '~/widgets/menu';

import { desktopTheme, mobileTheme } from '~/shared/config';
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
  const isDialogPage = new RegExp(`${PATHS.chats}/\\d+`).test(location.pathname);

  return (
    <LayoutContext.Provider value={{ header: headerRef, footer: footerRef }}>
      <ChakraProvider theme={isMobile ? mobileTheme : desktopTheme}>
        {isMobile ? (
          <Stack gap={0} className={styles.layout}>
            <Flex flex="1">{base}</Flex>
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
              {desktop ?? base}
            </Container>
          </Flex>
        )}
      </ChakraProvider>
    </LayoutContext.Provider>
  );
};
