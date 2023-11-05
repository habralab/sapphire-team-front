import { paths } from '../types/storage';

import { BaseApiClient } from './base';

type GetSpecGroup = paths['/api/rest/spec-groups/']['get']['parameters']['query'];
type AfterGetSpecGroups =
  paths['/api/rest/spec-groups/']['get']['responses']['200']['content']['application/json'];

// export class SpecApiClient extends BaseApiClient {
//   async getSpecGroup({ code, state }: GetSpecGroup) {
//     await this.client.get<AfterGetSpecGroups>(`/api/rest/auth/oauth2/habr/callback`, {
//       params: {
//         code,
//         state,
//       },
//       withCredentials: true,
//     });
//   }

//   async isAuth() {
//     const { data } = await this.client.get<IsAuthResponse>('/api/rest/auth/check');
//     return data;
//   }

//   async logout() {
//     await this.client.delete('/api/rest/auth/logout', { withCredentials: true });
//     window.location.href = PATHS.root;
//   }

//   async getMe() {
//     const { data } = await this.client.get<GetMeResponse>('/api/rest/users/me');
//     return data;
//   }
// }
