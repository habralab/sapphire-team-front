import { Skeleton, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React, { useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { AnimatedTabs } from '~/shared/ui/SAnimatedTabs';

import { AboutMeTab } from './tabs/about-me';
import { ProjectsTab } from './tabs/projects';

const tabs = [
  { id: 'about', label: 'Обо мне' },
  { id: 'projects', label: 'Проекты' },
  // { id: 'reviews', label: 'Отзывы' },
];

interface ProfileTabsProps {
  userId: string;
  children?: React.ReactNode;
}

export const ProfileTabs = ({ userId, children }: ProfileTabsProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab');

  useLayoutEffect(() => {
    if (!activeTab) {
      setSearchParams({ tab: tabs[0].id });
    }
  }, [searchParams]);
  return (
    <Tabs
      variant="animatedBase"
      index={activeTab ? tabs.findIndex(({ id }) => id === activeTab) : undefined}
      onChange={(index) => {
        setSearchParams({ tab: tabs[index].id });
      }}
    >
      <TabList>
        {activeTab ? (
          <AnimatedTabs tabs={tabs} currentIndex={activeTab} />
        ) : (
          <Skeleton height="25px" />
        )}
      </TabList>
      <TabPanels>
        <TabPanel>
          <AboutMeTab userId={userId} />
        </TabPanel>
        <TabPanel>
          <ProjectsTab userId={userId} />
        </TabPanel>
        {/* <TabPanel><ReviewsTab /></TabPanel> */}
      </TabPanels>
      {children}
    </Tabs>
  );
};
