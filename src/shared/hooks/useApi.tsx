import { useContext } from 'react';

import { ApiContext } from '../contexts';

export function useApi() {
  return useContext(ApiContext);
}
