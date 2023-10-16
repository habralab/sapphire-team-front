import { useContext } from 'react';

import { LayoutContext } from '~/shared/contexts';

export const useLayoutRefs = () => {
  return useContext(LayoutContext);
};
