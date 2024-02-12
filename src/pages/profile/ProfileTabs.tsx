import { Skeleton, TabList, Tabs } from '@chakra-ui/react';
import React, { useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { AnimatedTabs } from '~/shared/ui/SAnimatedTabs';

const tabs = [
  { id: 'about', label: 'Обо мне' },
  { id: 'projects', label: 'Проекты' },
  // { id: 'reviews', label: 'Отзывы' },
];

interface ProfileTabsProps {
  children?: JSX.Element;
}

export const ProfileTabs = ({ children }: ProfileTabsProps) => {
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
      {children}
    </Tabs>
  );
};
