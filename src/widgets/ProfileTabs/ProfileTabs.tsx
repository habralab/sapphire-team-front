import {
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Divider,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import { AboutMe, Reviews } from '~/entities/profile';

export function ProfileTabs() {
  const [isSelected, setIsSelected] = useState('');

  return (
    <Tabs my={4} variant="soft-rounded">
      <TabList
        bg="white"
        w="100%"
        borderRadius="full"
        p={1}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="px"
      >
        <Tab
          h="28px"
          color="gray.600"
          fontSize="sm"
          fontWeight="normal"
          flex="1"
          _selected={{ color: 'white', bg: 'gray.900' }}
          onClick={() => {
            setIsSelected('Обо мне');
          }}
        >
          Обо мне
        </Tab>
        <Box w="1px" px="px" h="18px">
          {isSelected === 'Отзывы' && (
            <Divider orientation="vertical" variant="dividerStyleTabs" />
          )}
        </Box>
        <Tab
          h="28px"
          color="gray.600"
          fontSize="sm"
          fontWeight="normal"
          flex="1"
          _selected={{
            color: 'white',
            bg: 'gray.900',
          }}
          onClick={() => {
            setIsSelected('Проекты');
          }}
        >
          Проекты
        </Tab>
        <Box w="1px" px="px" h="18px">
          {isSelected === 'Обо мне' && (
            <Divider orientation="vertical" variant="dividerStyleTabs" />
          )}
        </Box>
        <Tab
          h="28px"
          color="gray.600"
          fontSize="sm"
          fontWeight="normal"
          flex="1"
          _selected={{ color: 'white', bg: 'gray.900' }}
          onClick={() => {
            setIsSelected('Отзывы');
          }}
        >
          Отзывы
        </Tab>
      </TabList>
      <TabPanels mt={4}>
        <TabPanel bg="white" borderRadius="2xl">
          <AboutMe />
        </TabPanel>
        <TabPanel>
          <p>Тут те же сущности, что и у Димы</p>
        </TabPanel>
        <TabPanel position="relative" p={0}>
          <VStack position="absolute" left="0" right="0" spacing={0}>
            <Reviews />
            <Reviews />
            <Reviews />
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
