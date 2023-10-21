import { ChevronDownIcon } from '@chakra-ui/icons';
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
  InputRightElement,
  InputGroup,
  Tag,
  TagLabel,
  TagCloseButton,
  HStack,
} from '@chakra-ui/react';
import { IoOptions } from 'react-icons/io5';

import { useIsMobile } from '~/shared/hooks';
import { Counter } from '~/shared/ui/Counter';

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

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bg="bg" display="flex" alignItems="center">
          <Container maxW="md" flex="1">
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
                <InputGroup>
                  <Input
                    bg="white"
                    borderRadius="full"
                    readOnly
                    placeholder="Например, Фронтенд разработчик"
                  />
                  <InputRightElement pointerEvents="none">
                    <ChevronDownIcon mr={4} fontSize="2xl" />
                  </InputRightElement>
                </InputGroup>

                <HStack wrap={'wrap'} mt={2}>
                  <Tag
                    size="sm"
                    borderRadius="lg"
                    colorScheme="pin"
                    px={3}
                    py={1}
                    fontWeight="medium"
                  >
                    <TagLabel>UX-дизайнер</TagLabel>
                    <TagCloseButton />
                  </Tag>
                  <Tag
                    size="sm"
                    borderRadius="lg"
                    colorScheme="pin"
                    px={3}
                    py={1}
                    fontWeight="medium"
                  >
                    <TagLabel>UX-дизайнер</TagLabel>
                    <TagCloseButton />
                  </Tag>
                  <Tag
                    size="sm"
                    borderRadius="lg"
                    colorScheme="pin"
                    px={3}
                    py={1}
                    fontWeight="medium"
                  >
                    <TagLabel>UX-дизайнер</TagLabel>
                    <TagCloseButton />
                  </Tag>
                  <Tag
                    size="sm"
                    borderRadius="lg"
                    colorScheme="pin"
                    px={3}
                    py={1}
                    fontWeight="medium"
                  >
                    <TagLabel>UX-дизайнер</TagLabel>
                    <TagCloseButton />
                  </Tag>
                </HStack>
              </Box>
              <Box>
                <Heading variant="h2" mb={3}>
                  Профессиональные навыки
                </Heading>
                <InputGroup>
                  <Input
                    bg="white"
                    borderRadius="full"
                    readOnly
                    placeholder="Например, Python"
                  />
                  <InputRightElement pointerEvents="none">
                    <ChevronDownIcon mr={4} fontSize="2xl" />
                  </InputRightElement>
                </InputGroup>
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
                {/* вынести в colorSchema или в variant */}
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
