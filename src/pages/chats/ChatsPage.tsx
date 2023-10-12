import { Search2Icon } from '@chakra-ui/icons';
import {
  Container,
  FormControl,
  InputLeftElement,
  Icon,
  Input,
  Flex,
  InputGroup,
  Box,
  Divider,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ChatCard } from '~/entities/chat';

import { SText } from '~/shared/ui/SText';

import { data } from './data';

export function ChatsPage() {
  const [value, setValue] = useState('');
  // const [filterData, setFilterData] = useState(data);

  return (
    <Container maxW="md" p={5}>
      <Flex direction="column" gap={4}>
        <SText variant="h1">Чаты</SText>
        <FormControl>
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
        </FormControl>
        <Flex direction="column" bg="white" borderRadius="2xl">
          {data.map((chat) => {
            return (
              <Box key={chat.id}>
                <Link to={'#'}>
                  <ChatCard {...chat} />
                </Link>
                <Box h="px" _last={{ display: 'none' }}>
                  <Divider variant="dividerLight" />
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Container>
  );
}
