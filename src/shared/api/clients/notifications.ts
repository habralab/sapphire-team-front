import type {
  GetCountParameters,
  GetCountResponse,
  GetListParameters,
  GetListResponse,
  GetNotificationResponse,
} from '../model';

import { BaseApiClient } from './base';

export class NotificationsApiClient extends BaseApiClient {
  async getList(params: GetListParameters) {
    const { data } = await this.client.get<GetListResponse>(`/api/rest/notifications/`, {
      params,
    });
    return data;
  }

  async get(notification_id: string) {
    const { data } = await this.client.get<GetNotificationResponse>(
      `/api/rest/notifications/${notification_id}`,
    );
    return data;
  }

  async read(notification_id: string) {
    return this.client.post(`/api/rest/notifications/${notification_id}`, {
      is_read: true,
    });
  }

  async getUnreadCount(params: GetCountParameters) {
    const { data } = await this.client.get<GetCountResponse>(
      `/api/rest/notifications/count`,
      {
        params,
      },
    );
    return data;
  }
}
