import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { Counter } from '~/shared/ui/Counter';

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
      zIndex={1}
      borderTop="1px"
      borderColor="gray.300"
    >
      <Container maxW="md">
        <Flex as={'nav'} py="3" px="2" justifyContent="space-between">
          {routes.map(({ path, name, icon }) => {
            return (
              <Link key={path} as={NavLink} to={path} variant="nav">
                <Flex direction="column" position="relative" alignItems="center" gap={2}>
                  <Box w={6} h={6}>
                    {icon}
                  </Box>

                  <Text fontWeight="500">{name}</Text>
                  {name === 'Чаты' && <Counter count={2} float />}
                </Flex>
              </Link>
            );
          })}
        </Flex>
      </Container>
    </Flex>
  );
};
