import { useContext } from 'react';

import { FooterContext } from '~/shared/contexts';

export const useRefFooter = () => {
  return useContext(FooterContext);
};
