import { createContext } from 'react';

import {
  NotificationsApiClient,
  ProjectsApiClient,
  StorageApiClient,
  UserApiClient,
} from '~/shared/api';

export const api = {
  userApi: new UserApiClient('/users'),
  storageApi: new StorageApiClient('/storage'),
  projectsApi: new ProjectsApiClient('/projects'),
  notificationsApi: new NotificationsApiClient('/notifications'),
};

export const ApiContext = createContext(api);
