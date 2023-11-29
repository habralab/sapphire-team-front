import { Stack, Box, Skeleton } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { DummyNotifications } from '~/entities/dummy';

import { PATHS } from '~/shared/lib/router';

import { useGetNotifications } from './api';
import { NotificationItem } from './NotificationItem';

export function NotificationList() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useGetNotifications();
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        if (hasNextPage) fetchNextPage();
      }
    }, options);

    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [data]);

  return (
    <Stack spacing={0} bg="white" borderRadius="2xl" overflow="hidden" flexGrow={1}>
      {!data?.pages[0]?.total_items && !isLoading && (
        <Box py={2}>
          <DummyNotifications />
        </Box>
      )}

      {data?.pages.map((page) => (
        <React.Fragment key={page.page}>
          {page.data.map((notification) => {
            return (
              <Box
                onClick={() => {
                  navigate(generatePath(PATHS.notification, { id: notification.id }));
                }}
                key={notification.id}
                borderBottom="1px"
                borderColor="gray.200"
                _last={{ border: 'none', paddingBottom: 2 }}
                _first={{ paddingTop: 2 }}
                _hover={{ textDecoration: 'none', bg: 'gray.200' }}
              >
                <NotificationItem notification={notification} />
              </Box>
            );
          })}
        </React.Fragment>
      ))}
      {isFetchingNextPage ? (
        <>
          <Skeleton height="200px" />
        </>
      ) : (
        <Box ref={targetRef} />
      )}
    </Stack>
  );
}
