import { Text, Flex, Image, Center } from '@chakra-ui/react';

import { DummyAvatar } from '~/shared/ui/DummyAvatar';

import NotAuth from './notAuth.png';
import { Statistic } from './statistic';

const defaultName = 'Гость';
const deletedName = 'Удалённый профиль';

interface ProfileCardNotAuthType {
  isDeleted?: boolean;
}

export function ProfileCardNotAuth({ isDeleted }: ProfileCardNotAuthType) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      bg="white"
      w="100%"
      borderRadius="2xl"
      position="relative"
      mb={4}
    >
      <Center
        border="0.5rem solid white"
        position="absolute"
        top={-10}
        borderRadius="full"
        w={20}
        h={20}
        boxSizing="content-box"
        bg="white"
      >
        <DummyAvatar objectFit="contain" objectPosition="center" h={16} w={16} />
      </Center>
      <Text align="center" fontWeight="bold" fontSize="2xl" pt={16} mb={4}>
        {isDeleted ? deletedName : defaultName}
      </Text>
      <Statistic />
    </Flex>
  );
}
