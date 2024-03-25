import type { RefObject } from 'react';
import { useEffect } from 'react';

interface useInfinityScrollProps {
  hasNextPage?: boolean;
  fetchNextPage: () => void;
  targetRef: RefObject<HTMLDivElement>;
  isFetchingNextPage: boolean;
}

export function useInfinityScroll({
  hasNextPage,
  fetchNextPage,
  targetRef,
  isFetchingNextPage,
}: useInfinityScrollProps) {
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
  }, [hasNextPage, isFetchingNextPage]);
  return;
}
