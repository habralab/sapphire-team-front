import { createContext } from 'react';

import { UserApiClient } from '~/shared/api';

export const api = {
  userApi: new UserApiClient('/users'),
};

export const ApiContext = createContext(api);
