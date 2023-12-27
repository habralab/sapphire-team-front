import { Box, Container, Link, Stack } from '@chakra-ui/react';
import { Link as ReactLink, generatePath } from 'react-router-dom';

import { search } from '~/features/chat';

import { ChatCard } from '~/entities/chat';

import { PATHS } from '~/shared/lib/router';

interface SearchProps {
  value: string;
  view?: string;
}

export function ChatsList(props: SearchProps) {
  const { value, view } = props;

  return (
    <Stack spacing={0} overflowY={view === 'desktop' ? 'auto' : 'initial'} bg="white">
      {search(value).map((chat) => {
        {
          return view === 'desktop' ? (
            <Box
              key={chat.id}
              borderBottom="1px"
              borderColor="gray.200"
              _hover={{ textDecoration: 'none', bg: 'gray.200' }}
              _last={{ border: 'none' }}
              px={5}
            >
              <ChatCard {...chat} />
            </Box>
          ) : (
            <Link
              to={generatePath(PATHS.dialog, { id: chat.id })}
              as={ReactLink}
              key={chat.id}
              borderBottom="1px"
              borderColor="gray.200"
              _hover={{
                textDecoration: 'none',
                bg: 'gray.200',
              }}
              _last={{
                border: 'none',
              }}
            >
              <Container maxW="md">
                <ChatCard {...chat} />
              </Container>
            </Link>
          );
        }
      })}
    </Stack>
  );
}
