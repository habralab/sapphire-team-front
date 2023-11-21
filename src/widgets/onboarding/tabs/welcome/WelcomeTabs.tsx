import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import welcome from './welcome.svg';

export function WelcomeTabs() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="80vh"
      direction="column"
      px={10}
      gap={6}
    >
      <Image src={welcome} />
      <Stack textAlign="center" spacing={4} mb={6}>
        <Heading variant="h1">Команда и проект, которые идеально подходят</Heading>
        <Text fontWeight="medium">
          Заполненность профиля повлияет на выдачу актуальных проектов
        </Text>
      </Stack>
    </Flex>
  );
}
