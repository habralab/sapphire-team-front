import { Box, VStack, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { Link, generatePath } from 'react-router-dom';

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
      <VStack spacing={0}>
        {search(value).map((chat) => {
          return (
            <Box
              key={chat.id}
              borderBottom="1px"
              borderColor="gray.200"
              _last={{ border: 'none' }}
            >
              <Link to={generatePath(PATHS.dialog, { id: chat.id })}>
                <ChatCard {...chat} />
              </Link>
            </Box>
          );
        })}
      </VStack>
    </VStack>
  );
}