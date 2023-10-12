import { Flex, Avatar as ChakraAvatar } from '@chakra-ui/react';

import { SText } from '~/shared/ui/SText';

interface AvatarProps {
  firstName: string;
  lastName: string;
  avatarImg?: string;
}

export const Avatar = ({ firstName, lastName, avatarImg }: AvatarProps) => {
  return (
    <Flex alignItems="center" gap={2}>
      <ChakraAvatar name={`${firstName} ${lastName}`} src={avatarImg} />
      <SText fontWeight="semibold">{`Привет, ${firstName}!`}</SText>
    </Flex>
  );
};
