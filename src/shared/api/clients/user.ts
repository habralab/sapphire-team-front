import { PATHS } from '~/shared/lib/router';

import {
  AfterAuthRequestParams,
  AfterAuthResponse,
  GetAvatar,
  IsAuthResponse,
  UpdateUserAvatar,
  UpdateUserRequest,
  GetUserResponse,
  UpdateUserResponse,
  GetUserSkills,
  UpdateUserSkillsResponse,
  DeleteUserAavatar,
} from '../model/user.types';

import { BaseApiClient } from './base';

export class UserApiClient extends BaseApiClient {
  get authURL() {
    return `${this.baseURL}/api/rest/auth/oauth2/habr/authorize?redirect_url=${window.location.origin}`;
  }
  async afterAuth({ code, state }: AfterAuthRequestParams, signal: AbortSignal) {
    const { data } = await this.client.get<AfterAuthResponse>(
      `/api/rest/auth/oauth2/habr/callback`,
      {
        params: {
          code,
          state,
        },
        withCredentials: true,
        signal,
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

  async get(user_id: string) {
    const { data } = await this.client.get<GetUserResponse>(`/api/rest/users/${user_id}`);
    return data;
  }

  async update({ id, ...user }: UpdateUserRequest) {
    const { data } = await this.client.post<UpdateUserResponse>(
      `/api/rest/users/${id}`,
      user,
      { withCredentials: true },
    );
    return data;
  }

  getAvatar(user_id: string): GetAvatar {
    return `${this.baseURL}/api/rest/users/${user_id}/avatar`;
  }

  async isAvatarExist(user_id: string) {
    const { data } = await this.client.get<string | null>(
      `/api/rest/users/${user_id}/avatar`,
    );

    return data !== null;
  }

  async uploadAvatar({ id, avatar }: UpdateUserAvatar) {
    await this.client.post(
      `/api/rest/users/${id}/avatar`,
      { avatar },
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    );
  }

  async deleteAvatar(id: string) {
    const { data } = await this.client.delete<DeleteUserAavatar>(
      `/api/rest/users/${id}/avatar`,
    );
    return data;
  }

  async getUserSkills(user_id: string) {
    const { data } = await this.client.get<GetUserSkills>(
      `/api/rest/users/${user_id}/skills`,
    );
    return data;
  }

  async updateUserSkills({ id, skills }: { id: string; skills: string[] }) {
    const { data } = await this.client.post<UpdateUserSkillsResponse>(
      `/api/rest/users/${id}/skills`,
      skills,
    );
    return data;
  }
}
