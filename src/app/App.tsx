import { ChakraProvider, createLocalStorageManager, ColorMode } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import locale from 'antd/locale/ru_RU';

import { basicTheme } from '~/shared/config';

import { LayoutProvider } from './providers/layout';
import { Routing } from './providers/router';

const queryClient = new QueryClient();

const colorModeManager = {
  ...createLocalStorageManager('chakra-ui-color-mode'),
  get: () => 'light' as ColorMode,
};

function App() {
  return (
    <ChakraProvider theme={basicTheme} colorModeManager={colorModeManager}>
      <ConfigProvider
        locale={locale}
        theme={{
          token: {
            fontSizeLG: 14,
            fontFamily: `'Inter', sans-serif`,
            zIndexPopupBase: 2000,
          },
          components: {
            Select: {
              borderRadiusLG: 20,
              borderRadius: 20,
              colorPrimaryHover: 'var(--chakra-colors-blue-500)',
              controlOutline: 'var(--chakra-colors-blue-500)',
              controlOutlineWidth: 1,
              colorBorder: 'var(--chakra-colors-chakra-border-color)',
            },
            DatePicker: {
              borderRadiusLG: 20,
              borderRadius: 20,
              controlOutline: 'var(--chakra-colors-blue-500)',
              controlOutlineWidth: 1,
            },
          },
        }}
      >
        <LayoutProvider>
          <QueryClientProvider client={queryClient}>
            <Routing />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </LayoutProvider>
      </ConfigProvider>
    </ChakraProvider>
  );
}

export default App;
