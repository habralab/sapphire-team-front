import { ChakraProvider } from '@chakra-ui/react';

import { basicTheme } from '~/shared/config/theme';
import { useScreenSize } from '~/shared/lib';

interface LayoutProps {
  Mobile?: JSX.Element;
  Desktop?: JSX.Element;
}

export const Layout = ({ Mobile, Desktop }: LayoutProps) => {
  const breakpoint = 600;
  const widthSize = useScreenSize();
  return (
    <>
      {widthSize > breakpoint ? (
        /* Здесь применяем тему для десктопа + место для меню */
        <ChakraProvider theme={basicTheme}>
          {Desktop}
          <div>Desktop Menu</div>
        </ChakraProvider>
      ) : (
        /* Здесь применяем тему для мобилки + место для меню */
        <ChakraProvider theme={basicTheme}>
          {Mobile}
          <div>Mobile Menu</div>
        </ChakraProvider>
      )}
    </>
  );
};
