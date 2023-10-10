import { Flex, Avatar as ChakraAvatar } from '@chakra-ui/react';

import { SText } from '~/shared/ui/SText';

interface AvatarProps {
  firstName: string;
  lastName: string;
  avatarImg?: string;
}

export const Avatar = ({ firstName, lastName, avatarImg }: AvatarProps) => {
  return (
    <Flex alignItems="center" gap="0.5rem">
      <ChakraAvatar size="sAvatar" name={`${firstName} ${lastName}`} src={avatarImg} />
      <SText variant="h3">{`Привет, ${firstName}!`}</SText>
    </Flex>
  );
};
