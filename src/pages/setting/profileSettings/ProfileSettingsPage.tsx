import { Flex, Heading, Avatar, Input, Textarea, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { AddAvatar, GoBack, UpdateUser } from '~/features/settings';

export function ProfileSettingsPage() {
  const [value, setValue] = useState('');

  return (
    <Flex direction="column" gap={6} mb={4} px={5} w="full" maxW="md">
      <Flex alignItems="center" mt={4} gap={2}>
        <GoBack />
        <Heading variant="h2" as="h1" mb={0}>
          Профиль
        </Heading>
      </Flex>

      <Flex direction="column" gap={1}>
        <Heading variant="h2">Фото</Heading>
        <Flex position="relative" w="fit-content">
          <Avatar variant="profileAvatar" name="T A" />
          <AddAvatar />
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
      <UpdateUser />
    </Flex>
  );
}
