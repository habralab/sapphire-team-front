import { Menu as ChakraMenu, Flex, HStack, Box, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { PATH_PAGE } from '~/shared/lib/react-router';

import { routes } from './routes';

export const MenuBase = () => {
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
        <HStack as={'nav'} spacing={5} p="0.5rem 1.25rem">
          {routes.map(({ path, name, icon }) => {
            return (
              <>
                <Link
                  key={path}
                  as={NavLink}
                  to={path}
                  color="gray.400"
                  _hover={{ textDecoration: 'none' }}
                  _activeLink={{ color: 'gray.900' }}
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
                </Link>
              </>
            );
          })}
        </HStack>
      </ChakraMenu>
    </Flex>
  );
};
