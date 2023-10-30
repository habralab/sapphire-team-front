import { paths } from '../types/users';

import { BaseApiClient } from './base';

type AfterAuthRequestParams =
  paths['/api/rest/auth/oauth2/habr/callback']['get']['parameters']['query'];
type AfterAuthResponse =
  paths['/api/rest/auth/oauth2/habr/callback']['get']['responses']['200']['content']['application/json'];

export class UserApiClient extends BaseApiClient {
  async auth() {
    await this.client.get(
      `/api/rest/auth/oauth2/habr/authorize?redirect_url=${window.location.origin}`,
    );
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
}
