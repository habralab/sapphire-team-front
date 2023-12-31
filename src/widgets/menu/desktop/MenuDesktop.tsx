import { Divider, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { useAuth } from '~/shared/hooks';
import { Counter } from '~/shared/ui/Counter';
import { LogoDesktop } from '~/shared/ui/Logo';

import { routes } from './routes';

export const MenuDesktop = () => {
  const { isAuth } = useAuth();

  return (
    <Stack position="sticky" top={2} pt={4} gap={0} ml="auto" pl={4}>
      <LogoDesktop />
      <Divider variant="light" mb={5} />
      <Stack as={'nav'} spacing={6}>
        {routes
          .map(({ path, name, icon, divided, isPublic }) => {
            if (!isAuth && !isPublic) return null;
            return (
              <Link key={path} as={NavLink} to={path} variant="nav" px={2}>
                {divided && <Divider variant="light" mt={-1} mb={5} />}
                <Flex
                  alignItems="center"
                  gap={2.5}
                  position="relative"
                  justifyContent="center"
                  w="44"
                >
                  {icon}
                  <Text
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    flexGrow="1"
                    fontWeight="500"
                    lineHeight="normal"
                  >
                    {name}
                  </Text>
                  {name === 'Чаты' && <Counter count={2} />}
                </Flex>
              </Link>
            );
          })
          .filter(Boolean)}
      </Stack>
    </Stack>
  );
};
