import { Search2Icon } from '@chakra-ui/icons';
import { MenuButton, Menu as ChakraMenu, Button } from '@chakra-ui/react';
import React from 'react';

export const Menu = () => {
  return (
    <ChakraMenu>
      <MenuButton as={Button}>
        <Search2Icon />
      </MenuButton>
    </ChakraMenu>
  );
};
