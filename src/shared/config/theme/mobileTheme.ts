import { extendTheme, defineStyleConfig } from '@chakra-ui/react';

import { basicTheme } from './theme';

import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

/**
 * Можно посмотреть исходники и понять, что можно переопределить
 * https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src
 */

export const mobileTheme = extendTheme(basicTheme);
