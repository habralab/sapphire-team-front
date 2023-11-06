import { createContext } from 'react';

import { ProjectsApiClient, StorageApiClient, UserApiClient } from '~/shared/api';

export const api = {
  userApi: new UserApiClient('/users'),
  storageApi: new StorageApiClient('/storage'),
  projectsApi: new ProjectsApiClient('/projects'),
};

export const ApiContext = createContext(api);
