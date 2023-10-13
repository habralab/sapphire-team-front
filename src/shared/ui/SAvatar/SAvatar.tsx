import { Avatar } from '@chakra-ui/react';

interface AvatarType {
  name: string;
}

export function SAvatar(props: AvatarType) {
  const { name } = props;
  return (
    <Avatar
      name={name}
      bg="gray.900"
      color="white"
      fontWeight="semibold"
      fontSize="sm"
      h={10}
      w={10}
    />
  );
}
