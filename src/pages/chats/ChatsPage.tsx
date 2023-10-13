import { Search2Icon } from '@chakra-ui/icons';
import {
  InputLeftElement,
  Icon,
  Input,
  InputGroup,
  Box,
  Divider,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ChatCard } from '~/entities/chat';

import { SText } from '~/shared/ui/SText';

import { data } from './data';

export function ChatsPage() {
  const [value, setValue] = useState('');

  return (
    <VStack gap={4} align="start">
      <SText variant="h1">Чаты</SText>
      <InputGroup h={9}>
        <InputLeftElement>
          <Icon as={Search2Icon} color="gray.400" w={4} h={4} />
        </InputLeftElement>
        <Input
          placeholder="Поиск в чатах"
          borderRadius="full"
          bg="gray.100"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
      </InputGroup>
      <VStack spacing={0}>
        {data
          .filter((chat) => {
            return value.toLowerCase() === ''
              ? chat
              : chat.name.toLowerCase().includes(value) ||
                  chat.title.toLowerCase().includes(value);
          })
          .map((chat) => {
            return (
              <Box key={chat.id}>
                <Link to={`/chat/${chat.id}`}>
                  <ChatCard {...chat} />
                </Link>
                <Divider variant="dividerDark" />
              </Box>
            );
          })}
      </VStack>
    </VStack>
  );
}
