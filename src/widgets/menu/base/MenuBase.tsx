import { Container, Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { Counter } from '~/shared/ui/Counter';
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
      zIndex={1}
    >
      <Container maxW="md">
        <Flex as={'nav'} py="3" px="2" justifyContent="space-between">
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
                  {icon}
                  <SText fontWeight="500">{name}</SText>
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
