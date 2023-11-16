import { PATHS } from '~/shared/lib/router';

import {
  AfterAuthRequestParams,
  AfterAuthResponse,
  GetUserAvatarID,
  IsAuthResponse,
  UpdateUserAvatar,
  UpdateUserAvatarID,
  UpdateUserParams,
  UpdateUserRequest,
  getUserResponse,
} from '../types/user.types';

import { BaseApiClient } from './base';

export class UserApiClient extends BaseApiClient {
  get authURL() {
    return `${this.baseURL}/api/rest/auth/oauth2/habr/authorize?redirect_url=${window.location.origin}`;
  }
  async afterAuth({ code, state }: AfterAuthRequestParams) {
    const { data } = await this.client.get<AfterAuthResponse>(
      `/api/rest/auth/oauth2/habr/callback`,
      {
        params: {
          code,
          state,
        },
        withCredentials: true,
      },
    );
    return data;
  }

  async isAuth() {
    const { data } = await this.client.get<IsAuthResponse>('/api/rest/auth/check');
    return data;
  }

  async logout() {
    await this.client.delete('/api/rest/auth/logout', { withCredentials: true });
    window.location.href = PATHS.root;
  }

  async getUser(user_id: string) {
    const { data } = await this.client.get<getUserResponse>(`/api/rest/users/${user_id}`);
    return data;
  }

  async updateUser({ user_id, ...data }: UpdateUserParams & UpdateUserRequest) {
    await this.client.post(`/api/rest/users/${user_id}`, data);
  }

  async getUserAvatar({ user_id }: GetUserAvatarID) {
    const { data } = await this.client.get<Blob>(`/api/rest/users/${user_id}/avatar`, {
      responseType: 'blob',
    });
    return data;
  }

  async uploadUserAvatar({ user_id, ...data }: UpdateUserAvatarID & UpdateUserAvatar) {
    await this.client.post(`/api/rest/users/${user_id}/avatar`, data);
  }
}
