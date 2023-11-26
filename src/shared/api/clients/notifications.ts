import { paths } from '../types/notifications';

import { BaseApiClient } from './base';

export type GetListParameters =
  paths['/api/rest/notifications/']['get']['parameters']['query'];

export type GetListResponse =
  paths['/api/rest/notifications/']['get']['responses']['200']['content']['application/json'];

export class NotificationsApiClient extends BaseApiClient {
  async getList(params: GetListParameters) {
    const { data } = await this.client.get<GetListResponse>(`/api/rest/notifications/`, {
      params,
    });
    return data;
  }
}
