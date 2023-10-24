import {
  Button,
  IconButton,
  Modal,
  Text,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Icon,
  CloseButton,
  Heading,
  Flex,
  Box,
  Container,
  Stack,
  Input,
} from '@chakra-ui/react';
import { IoOptions } from 'react-icons/io5';

import { useIsMobile } from '~/shared/hooks';
import { Counter } from '~/shared/ui/Counter';
import { TreeSelect } from '~/shared/ui/TreeSelect';

export const Filter = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useIsMobile();

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="filter"
        flexShrink="0"
        gap={2}
        padding={['0', '0', '4']}
        fontWeight="normal"
        icon={
          <>
            <Text hidden={isMobile}>Все фильтры</Text>
            <Icon as={IoOptions} fontSize="2xl" />
            <Counter count={4} float borderBg="bg" />
          </>
        }
      ></IconButton>

      <Modal onClose={onClose} size="full" isOpen={isOpen} blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent bg="bg" display="flex" alignItems="center">
          <Container maxW="md">
            <Flex alignItems="center" justifyContent="space-between" my={4}>
              <Flex alignItems="baseline">
                <CloseButton onClick={onClose} mr={2} />
                <Heading variant="h2" mb={0}>
                  Фильтры
                </Heading>
              </Flex>
              <Button variant="flat" fontSize="sm" fontWeight="500" colorScheme="purple">
                Сбросить
              </Button>
            </Flex>

            <Stack spacing={6}>
              <Box>
                <Heading variant="h2" mb={3}>
                  Специализация
                </Heading>
                <TreeSelect />
              </Box>
              <Box>
                <Heading variant="h2" mb={3}>
                  Профессиональные навыки
                </Heading>
                <TreeSelect />
              </Box>
              <Box>
                <Heading variant="h2">Дата начала проекта</Heading>
                <Input
                  variant="filled"
                  bg="white"
                  borderRadius="full"
                  fontSize="sm"
                  color="gray.500"
                  placeholder="Выберите дату"
                  type="date"
                />
              </Box>
            </Stack>
          </Container>
          <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0">
            <Button fontSize="sm" fontWeight="600" w="full">
              Показать 43 проекта
            </Button>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
};
