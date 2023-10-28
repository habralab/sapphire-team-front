import { IconButton, Icon } from '@chakra-ui/react';
import { BsPlus } from 'react-icons/bs';

export function AddAvatar() {
  return (
    <IconButton
      position="absolute"
      bottom="-1"
      right="-1"
      aria-label="update-avatar"
      h={6}
      minW={6}
      border="2px"
      boxSizing="content-box"
      borderColor="gray.100"
      icon={<Icon as={BsPlus} fontSize="2xl" />}
    />
  );
}
