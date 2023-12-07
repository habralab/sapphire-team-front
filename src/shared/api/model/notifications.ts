import { components, paths } from '../types/notifications';

export type GetListParameters =
  paths['/api/rest/notifications/']['get']['parameters']['query'];

export type GetListResponse =
  paths['/api/rest/notifications/']['get']['responses']['200']['content']['application/json'];

export type GetNotificationResponse =
  paths['/api/rest/notifications/{notification_id}']['get']['responses']['200']['content']['application/json'];

export type GetCountParameters =
  paths['/api/rest/notifications/count']['get']['parameters']['query'];

export type GetCountResponse =
  paths['/api/rest/notifications/count']['get']['responses']['200']['content']['application/json'];

export type NotificationResponse = components['schemas']['NotificationResponse'];
