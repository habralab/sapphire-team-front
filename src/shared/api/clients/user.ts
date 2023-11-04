import { PATHS } from '~/shared/lib/router';

import { paths } from '../types/users';

import { BaseApiClient } from './base';

type AfterAuthRequestParams =
  paths['/api/rest/auth/oauth2/habr/callback']['get']['parameters']['query'];
type AfterAuthResponse =
  paths['/api/rest/auth/oauth2/habr/callback']['get']['responses']['200']['content']['application/json'];
type IsAuthResponse =
  paths['/api/rest/auth/check']['get']['responses']['200']['content']['application/json'];
type GetMeResponse =
  paths['/api/rest/users/me']['get']['responses']['200']['content']['application/json'];

export class UserApiClient extends BaseApiClient {
  get authURL() {
    return `${this.baseURL}/api/rest/auth/oauth2/habr/authorize?redirect_url=${window.location.origin}`;
  }
  async afterAuth({ code, state }: AfterAuthRequestParams) {
    await this.client.get<AfterAuthResponse>(`/api/rest/auth/oauth2/habr/callback`, {
      params: {
        code,
        state,
      },
      withCredentials: true,
    });
  }

  async isAuth() {
    const { data } = await this.client.get<IsAuthResponse>('/api/rest/auth/check');
    return data;
  }

  async logout() {
    await this.client.delete('/api/rest/auth/logout', { withCredentials: true });
    window.location.href = PATHS.root;
  }

  async getMe() {
    const { data } = await this.client.get<GetMeResponse>('/api/rest/users/me');
    return data;
  }
}
