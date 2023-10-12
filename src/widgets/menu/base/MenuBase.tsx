import { Menu as ChakraMenu, Flex, HStack, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';
import { SText } from '~/shared/ui/SText';

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
        <HStack as={'nav'} spacing={5} py="2" px="5">
          {routes.map(({ path, name, icon }) => {
            return (
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
                  width="16"
                  gap={2}
                >
                  {icon('6', path === PATHS.chats ? 5 : undefined)}
                  <SText fontWeight="500">{name}</SText>
                </Flex>
              </Link>
            );
          })}
        </HStack>
      </ChakraMenu>
    </Flex>
  );
};
