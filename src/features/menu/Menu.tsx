import { Search2Icon } from '@chakra-ui/icons';
import { Menu as ChakraMenu, Flex, HStack, Box, Icon } from '@chakra-ui/react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { IoChatbubbles, IoPerson } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';

import { mainMenu } from '~/shared/api';

interface IMobileMenuIcons {
  searchIcon: JSX.Element;
  projectIcon: JSX.Element;
  chatIcon: JSX.Element;
  profileIcon: JSX.Element;
}

export const Menu = () => {
  const location = useLocation();

  const mobileMenuIcons = {
    searchIcon: <Search2Icon boxSize="2rem" />,
    projectIcon: <Icon as={BsFillBriefcaseFill} boxSize="2rem" />,
    chatIcon: (
      <Flex position="relative" alignItems="center" justifyContent="center">
        <Icon as={IoChatbubbles} boxSize="2rem" />
        <Flex
          position="absolute"
          top="-0.25rem"
          right="-0.25rem"
          width="1rem"
          height="1rem"
          lineHeight="0"
          justifyContent="center"
          alignItems="center"
          bg="purple.600"
          color="white"
          fontSize="xs"
          fontWeight="500"
          borderRadius="50%"
          border="0.125rem solid"
          borderColor="gray.100"
        >
          4
        </Flex>
      </Flex>
    ),
    profileIcon: <Icon as={IoPerson} boxSize="2rem" />,
  };

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
        <HStack as={'nav'} spacing={5} p="0.5rem 1.25rem">
          {mainMenu.map(({ path, name, icon }) => (
            <NavLink key={path} to={path}>
              <Flex
                direction="column"
                alignItems="center"
                color={location.pathname === path ? 'activeMenu' : 'inactiveMenu'}
                width="4.0625rem"
              >
                <Box height="2rem" mb="0.375rem">
                  {mobileMenuIcons[icon as keyof IMobileMenuIcons]}
                </Box>
                <Box fontSize="sm" fontWeight="500">
                  {name}
                </Box>
              </Flex>
            </NavLink>
          ))}
        </HStack>
      </ChakraMenu>
    </Flex>
  );
};
