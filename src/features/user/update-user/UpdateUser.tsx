import {
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Icon,
  Box,
  IconButton,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { BsPlus } from 'react-icons/bs';

export function UpdateUser() {
  const [value, setValue] = useState('');
  const infoRef = useRef<HTMLDivElement>(null);

  return (
    <Flex direction="column" gap={6}>
      <Flex direction="column" gap={4}>
        <Heading variant="h3">Фото</Heading>
        <IconButton
          aria-label="add-avatar"
          variant="flat"
          w="full"
          icon={
            <Flex
              w="full"
              fontWeight="normal"
              fontSize="sm"
              py={2}
              px={5}
              bg="white"
              borderRadius="full"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text>Добавить фотографию</Text>
              <Icon as={BsPlus} fontSize="2xl" />
            </Flex>
          }
        />
      </Flex>
      <Flex direction="column" gap={4}>
        <Heading variant="h3">Имя</Heading>
        <Input
          placeholder="Как вас зовут?"
          py={4}
          px={5}
          bg="white"
          borderRadius="full"
        />
      </Flex>
      <Flex direction="column" gap={4}>
        <Heading variant="h3">О себе</Heading>
        <Flex direction="column" p={5} gap={2} bg="white" borderRadius="2xl">
          <Box
            ref={infoRef}
            contentEditable
            width="full"
            bg="white"
            minH="50px"
            onInput={(e) => {
              setValue(e.currentTarget.innerText);
            }}
            _focus={{ outline: 'none' }}
            _empty={{
              _before: {
                color: 'gray.500',
                content:
                  '"Напишите о себе поподробнее. Хороший рассказ убедит обратиться именно к вам"',
              },
            }}
          />
          <Text textAlign="end" color="gray.500">
            {value.length}/300
          </Text>
        </Flex>
      </Flex>
      <Button fontWeight="semibold" w="full">
        Сохранить
      </Button>
      ;
    </Flex>
  );
}
