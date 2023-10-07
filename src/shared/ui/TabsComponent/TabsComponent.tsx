import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ProfileTabsType {
  tabList: string[];
  tabPanels: ReactNode[];
}

export function TabsComponent(props: ProfileTabsType) {
  const { tabList, tabPanels } = props;

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
        {tabList.map((tab, index) => (
          <Tab
            h="28px"
            color="gray.600"
            fontSize="sm"
            fontWeight="normal"
            flex="1"
            _selected={{ color: 'white', bg: 'gray.900' }}
            key={index}
          >
            {tab}
          </Tab>
        ))}
        {/* <Box w="1px" px="px" h="18px">
          {isSelected === 'Отзывы' && (
            <Divider orientation="vertical" variant="dividerStyleTabs" />
          )}
        </Box> */}
      </TabList>
      <TabPanels mt={4}>
        <TabPanel position="relative">{tabPanels[0]}</TabPanel>
        <TabPanel position="relative">{tabPanels[1]}</TabPanel>
        <TabPanel position="relative">{tabPanels[2]}</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
