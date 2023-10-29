import {
  Button,
  Flex,
  Heading,
  Avatar,
  Input,
  Textarea,
  Text,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

export function UpdateUser() {
  const [value, setValue] = useState('');

  return (
    <>
      <Flex direction="column" gap={1}>
        <Heading variant="h2">Фото</Heading>
        <Flex position="relative" w="fit-content">
          <Avatar variant="profileAvatar" name="T A" />
          <IconButton
            position="absolute"
            bottom="-1"
            right="-1"
            aria-label="update-avatar"
            h={6}
            minW={6}
            border="2px"
            boxSizing="content-box"
            borderColor="gray.100"
            icon={<Icon as={BsPlus} fontSize="2xl" />}
          />
        </Flex>
      </Flex>
      <Flex direction="column" gap={1}>
        <Heading variant="h2">Имя</Heading>
        <Input
          placeholder="Как вас зовут?"
          py={4}
          px={5}
          bg="white"
          borderRadius="full"
        />
      </Flex>
      <Flex direction="column" gap={1}>
        <Heading variant="h2">О себе</Heading>
        <Flex direction="column" p={5} gap={2} bg="white" borderRadius="2xl">
          <Textarea
            size="sm"
            variant="noline"
            maxLength={300}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Напишите о себе поподробнее. Хороший рассказ убедит обратиться именно к вам.
"
          />
          <Text textAlign="end" color="gray.500">
            {value.length}/300
          </Text>
        </Flex>
      </Flex>
      <Button fontWeight="semibold">Сохранить</Button>;
    </>
  );
}
