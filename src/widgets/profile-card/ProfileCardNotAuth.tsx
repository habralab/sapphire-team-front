import { Text, Flex, Image, Center } from '@chakra-ui/react';

import { Info } from '~/entities/user';

import NotAuth from './notAuth.png';

const defaultName = 'Гость';

export function ProfileCardNotAuth() {
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
        <Image src={NotAuth} objectFit="contain" objectPosition="center" h={16} w={16} />
      </Center>
      <Text align="center" fontWeight="bold" fontSize="2xl" pt={16} mb={4}>
        {defaultName}
      </Text>
      <Info />
    </Flex>
  );
}
