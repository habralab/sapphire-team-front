import {
  NotificationsApiClient,
  ProjectsApiClient,
  StorageApiClient,
  UserApiClient,
} from './clients';

export const api = {
  userApi: new UserApiClient('/users'),
  storageApi: new StorageApiClient('/storage'),
  projectsApi: new ProjectsApiClient('/projects'),
  notificationsApi: new NotificationsApiClient('/notifications'),
};
