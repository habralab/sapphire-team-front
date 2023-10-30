import { Button, Flex, Heading, Input, Text, Icon, IconButton } from '@chakra-ui/react';
import { BsPlus } from 'react-icons/bs';

import { STextarea } from '~/shared/ui/STextarea';

export function UpdateUser() {
  const maxLength = 50;

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
        <STextarea maxLength={maxLength} />
      </Flex>
      <Button fontWeight="semibold" w="full">
        Сохранить
      </Button>
    </Flex>
  );
}
