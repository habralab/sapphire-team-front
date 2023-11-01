import { Flex, Text, Box, Heading, VStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';

export function NotificationCard() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg="white"
      px={[5, 5, 6]}
      py={[5, 5, 20]}
      borderRadius="2xl"
      gap={8}
      grow={1}
    >
      <Box w="190px" h="190px" bg="gray.300"></Box>
      <VStack spacing={0} gap={4}>
        <Heading variant="h2" mb={0}>
          Вы приняты в команду!
        </Heading>
        <Text maxW={['280px', '320px']} textAlign="center">
          Привет! Приглашаю тебя присоединиться к нашей команде Dream Team и создать
          проект вместе!
        </Text>
      </VStack>
      <Button w="full" maxW={['280px', '320px']}>
        <Link to={PATHS.chats}>Перейти в чат</Link>
      </Button>
    </Flex>
  );
}
