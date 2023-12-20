import {
  Container,
  Flex,
  Heading,
  Center,
  Box,
  Button,
  Icon,
  Text,
  ChakraProvider,
  createLocalStorageManager,
  type ColorMode,
} from '@chakra-ui/react';

import { Logo } from '~/shared/ui/Logo';

import Bottom from './bottom.svg';
import Decorate from './decorate.svg';
import { ReactComponent as TelegramIcon } from './telegram.svg';
import { theme } from './theme';

const colorModeManager = {
  ...createLocalStorageManager('chakra-ui-color-mode'),
  get: () => 'dark' as ColorMode,
};

export function BlankPage() {
  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <Container maxW="container.sm">
        <Flex
          height={'100vh'}
          alignContent={'center'}
          gap={2}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box pt={8} pl={4}>
            <Logo />
          </Box>
          <Center flexDirection="column" pb={4} flexGrow="1">
            <Heading
              as="h1"
              fontSize={{
                base: '2xl',
                sm: '4xl',
                md: '7xl',
              }}
              position="relative"
              _after={{
                base: {
                  content: `url(${Decorate})`,
                  position: 'absolute',
                  width: '78px',
                  top: '-40px',
                  right: '-20px',
                },
                md: {
                  width: '100px !important',
                  top: '-40px !important',
                  right: '0 !important',
                },
              }}
              textAlign="center"
              mb="8"
            >
              Наш сайт <br />в разработке
            </Heading>
            <Box textAlign="center" mb={[10, null, 12]} fontSize={['sm', 'xl']}>
              <Text>
                Создаём продукт для Хабра, где специалисты смогут объединяться в команды и
                делать проекты.
              </Text>
              <Text
                position="relative"
                display="inline-block"
                _before={{
                  md: {
                    content: `url(${Bottom})`,
                    position: 'absolute',
                    width: '45px',
                    top: '10px',
                    left: '-60px',
                  },
                }}
              >
                Ещё немного, и вы сможете его увидеть!
              </Text>
            </Box>
            <Box>
              <Button
                as="a"
                target="_blank"
                href="https://t.me/+EqCvrAXmK_IyOTky"
                rightIcon={<Icon as={TelegramIcon} />}
                fontSize={['sm', 'lg']}
                py={['4', '7']}
                px={['4', '8']}
              >
                Следить за созданием продукта
              </Button>
            </Box>
          </Center>
        </Flex>
      </Container>
    </ChakraProvider>
  );
}
