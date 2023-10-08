import { Menu as ChakraMenu, Flex, HStack, Box, useToken } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { PATH_PAGE } from '~/shared/lib/react-router';

import { mainMenu } from './mainMenu';

interface MenuProps {
  separator?: string;
}

export const Menu = ({ separator }: MenuProps) => {
  const [activeMenu, inactiveMenu] = useToken('colors', ['activeMenu', 'inactiveMenu']);

  return (
    <Flex
      bg="white"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      justifyContent="center"
    >
      <ChakraMenu>
        <HStack as={'nav'} spacing={separator ? 2 : 5} p="0.5rem 1.25rem">
          {mainMenu.map(({ path, name, icon }, i, arr) => {
            const isLastElement = i === arr.length - 1;
            return (
              <>
                <NavLink
                  key={path}
                  to={path}
                  style={({ isActive }) => ({
                    color: isActive ? activeMenu : inactiveMenu,
                  })}
                >
                  <Flex
                    direction="column"
                    position="relative"
                    alignItems="center"
                    width="4.0625rem"
                  >
                    <Box height="2rem" mb="0.375rem">
                      {icon('2rem', path === PATH_PAGE.chats ? 5 : undefined)}
                    </Box>
                    <Box fontSize="sm" fontWeight="500">
                      {name}
                    </Box>
                  </Flex>
                </NavLink>
                {separator && !isLastElement && (
                  <Box color="inactiveMenu">{separator}</Box>
                )}
              </>
            );
          })}
        </HStack>
      </ChakraMenu>
    </Flex>
  );
};
