import { Menu as ChakraMenu, Flex, HStack, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

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
              <Link key={path} as={NavLink} to={path} variant="nav">
                <Flex
                  direction="column"
                  position="relative"
                  alignItems="center"
                  width="16"
                  gap={2}
                >
                  {icon({ size: '6', value: 5 })}
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
