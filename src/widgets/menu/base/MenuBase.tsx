import { Container, Flex, Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '~/shared/hooks';
import { Counter } from '~/shared/ui/Counter';

import { routes } from './routes';

export const MenuBase = () => {
  const { isAuth } = useAuth();

  return (
    <Flex shadow="base" borderTop="1px" borderColor="gray.300">
      <Container maxW="md">
        <Flex as={'nav'} py="3" px="2" justifyContent="space-between">
          {routes.map(({ path, name, icon, isPublic }) => {
            if (!isAuth && !isPublic) return null;
            return (
              <Link key={path} as={NavLink} to={path} variant="nav">
                <Flex direction="column" position="relative" alignItems="center" gap={2}>
                  {icon}
                  <Text fontSize="xs">{name}</Text>
                  {name === 'Чаты' && <Counter count={2} float borderBg="white" />}
                </Flex>
              </Link>
            );
          })}
        </Flex>
      </Container>
    </Flex>
  );
};
