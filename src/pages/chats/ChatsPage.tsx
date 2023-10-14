import { Link, VStack, Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { Link as ReactLink, generatePath } from 'react-router-dom';

import { search, SearchInput } from '~/features/chat';

import { ChatCard } from '~/entities/chat';

import { PATHS } from '~/shared/lib/router';

export function ChatsPage() {
  const [value, setValue] = useState('');

  return (
    <VStack gap={4} align="start">
      <Heading variant="h1" as="h1">
        Чаты
      </Heading>
      <SearchInput value={value} setValue={setValue} />
      <Stack spacing={0}>
        {search(value).map((chat) => {
          return (
            <Link
              to={generatePath(PATHS.dialog, { id: chat.id })}
              as={ReactLink}
              key={chat.id}
              borderBottom="1px"
              borderColor="gray.200"
              _hover={{ textDecoration: 'none', bg: 'gray.100' }}
              _last={{ border: 'none' }}
            >
              <ChatCard {...chat} />
            </Link>
          );
        })}
      </Stack>
    </VStack>
  );
}
