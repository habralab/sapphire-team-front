import { Container, Flex, Link, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useGetUnreadNotification } from '~/features/notifications';

import { useAuth } from '~/shared/hooks';
import { Counter } from '~/shared/ui/Counter';

import { routes } from './routes';

export const MenuBase = () => {
  const { isAuth } = useAuth();
  const { data, refetch } = useGetUnreadNotification(isAuth);
  const location = useLocation();

  useEffect(() => {
    if (isAuth) {
      refetch();
    }
  }, [location, isAuth]);

  return (
    <Flex shadow="base" borderTop="1px" borderColor="gray.200" bg="white">
      <Container maxW="md">
        <Flex as={'nav'} py="3" px="2" justifyContent="space-between">
          {routes.map(({ path, name, icon, isPublic }) => {
            if (!isAuth && !isPublic) return null;
            return (
              <Link key={path} as={NavLink} to={path} variant="nav">
                <Flex direction="column" position="relative" alignItems="center" gap={1}>
                  <Flex position="relative">
                    {icon}
                    {name === 'Уведомления' && (
                      <Counter count={data} float borderBg="white" />
                    )}
                  </Flex>
                  <Text fontSize="0.79em">{name}</Text>
                </Flex>
              </Link>
            );
          })}
        </Flex>
      </Container>
    </Flex>
  );
};
