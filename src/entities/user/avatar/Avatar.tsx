import { Flex, Avatar as ChakraAvatar, Text } from '@chakra-ui/react';

interface AvatarProps {
  firstName: string;
  lastName: string;
  avatarImg?: string;
}

export const Avatar = ({ firstName, lastName, avatarImg }: AvatarProps) => {
  return (
    <Flex alignItems="center" gap={2}>
      <ChakraAvatar name={`${firstName} ${lastName}`} src={avatarImg} />
      <Text fontWeight="semibold">{`Привет, ${firstName}!`}</Text>
    </Flex>
  );
};
