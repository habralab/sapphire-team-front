import { ChakraProvider } from '@chakra-ui/react';

import { MenuBase } from '~/features/menu';

import { desktopTheme, mobileTheme } from '~/shared/config/theme';
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
      {isBase ? base : desktop}
      {isBase ? <MenuBase /> : <div>Desktop Menu</div>}
    </ChakraProvider>
  );
};
