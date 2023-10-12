import { Menu as ChakraMenu, Flex, HStack, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { Divider } from '~/shared/ui/Divider';
import { LogoDesktop } from '~/shared/ui/Logo';
import { SText } from '~/shared/ui/SText';

import { routes } from './routes';

export const MenuDesktop = () => {
  return (
    <Flex position="fixed" top="0" bottom="0" left="0" flexDirection="column" p={8}>
      <LogoDesktop />
      <Divider mb={5} />
      <ChakraMenu>
        <HStack as={'nav'} flexDirection="column" spacing={6} alignItems="flex-start">
          {routes.map(({ path, name, icon, divided }) => {
            return (
              <Link
                key={path}
                as={NavLink}
                to={path}
                color="gray.500"
                _hover={{ textDecoration: 'none' }}
                _activeLink={{ color: 'gray.900' }}
              >
                {divided && <Divider mt={-1} mb={5} />}
                <Flex alignItems="center" gap={2.5}>
                  {icon('6', 5)}
                  <SText fontWeight="500" lineHeight="normal">
                    {name}
                  </SText>
                </Flex>
              </Link>
            );
          })}
        </HStack>
      </ChakraMenu>
    </Flex>
  );
};
