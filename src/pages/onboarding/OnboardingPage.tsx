import {
  Box,
  Container,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Icon,
  Portal,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import { useLayoutRefs } from '~/shared/hooks';

import { WelcomeTabs } from './tabs';
import { AvatarTabs } from './tabs/avatar';
import { NameTabs } from './tabs/name';
import { SkillsTabs } from './tabs/skills';

export function OnboardingPage() {
  const [tabIndex, setTabIndex] = useState(0);
  const layout = useLayoutRefs();

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Container maxW="md" px={5}>
      <Tabs variant="onboard" index={tabIndex} onChange={handleTabsChange}>
        <TabList my={5} position="relative">
          {tabIndex > 0 && (
            <Box position="absolute" left={0}>
              <IconButton
                aria-label="back"
                icon={<Icon as={FiChevronLeft} fontSize="2xl" />}
                variant="flat"
                onClick={() => {
                  handleTabsChange(tabIndex - 1);
                }}
                minW={6}
                h={6}
              />
            </Box>
          )}
          <Tab></Tab>
          <Tab></Tab>
          <Tab></Tab>
          <Tab></Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <WelcomeTabs />
          </TabPanel>
          <TabPanel>
            <NameTabs />
          </TabPanel>
          <TabPanel>
            <AvatarTabs />
          </TabPanel>
          <TabPanel>
            <SkillsTabs />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {layout?.footer && (
        <Portal containerRef={layout.footer}>
          <Container py={5} maxW="md">
            <Button
              w="full"
              onClick={() => {
                handleTabsChange(tabIndex + 1);
              }}
            >
              Продолжить
            </Button>
          </Container>
        </Portal>
      )}
    </Container>
  );
}
