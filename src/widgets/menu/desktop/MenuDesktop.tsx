import { Divider, Flex, Link, Stack, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { Counter } from '~/shared/ui/Counter';
import { LogoDesktop } from '~/shared/ui/Logo';

import { routes } from './routes';

export const MenuDesktop = () => {
  return (
    <Stack position="sticky" top={2} pt={2} gap={0} ml="auto" pl={2}>
      <LogoDesktop />
      <Divider variant="light" mb={5} />
      <Stack as={'nav'} spacing={6}>
        {routes.map(({ path, name, icon, divided }) => {
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
        })}
      </Stack>
    </Stack>
  );
};
