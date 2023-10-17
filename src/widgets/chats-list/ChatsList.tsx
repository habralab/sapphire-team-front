import { Link, Stack } from '@chakra-ui/react';
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
    <Stack spacing={0}>
      {search(value).map((chat) => {
        {
          return view === 'desktop' ? (
            <Link
              to={generatePath(PATHS.dialog, { id: chat.id })}
              as={ReactLink}
              key={chat.id}
              borderBottom="1px"
              borderColor="gray.200"
              _hover={{ textDecoration: 'none', bg: 'gray.100' }}
              _last={{ border: 'none' }}
              px={5}
            >
              <ChatCard {...chat} />
            </Link>
          ) : (
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
        }
      })}
    </Stack>
  );
}
