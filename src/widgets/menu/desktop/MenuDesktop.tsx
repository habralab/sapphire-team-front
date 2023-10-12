import { Divider, Flex, Link, Stack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { LogoDesktop } from '~/shared/ui/Logo';
import { SText } from '~/shared/ui/SText';

import { routes } from './routes';

export const MenuDesktop = () => {
  return (
    <aside>
      <Stack position="sticky" top={8} gap={0} pr="4.5rem">
        <LogoDesktop />
        <Divider variant="dividerStyle" mb={5} />
        <Stack as={'nav'} spacing={6}>
          {routes.map(({ path, name, icon, divided }) => {
            return (
              <Link key={path} as={NavLink} to={path} variant="nav">
                {divided && <Divider variant="dividerStyle" mt={-1} mb={5} />}
                <Flex alignItems="center" gap={2.5}>
                  {icon({ size: '6', value: 5 })}
                  <SText fontWeight="500" lineHeight="normal">
                    {name}
                  </SText>
                </Flex>
              </Link>
            );
          })}
        </Stack>
      </Stack>
    </aside>
  );
};