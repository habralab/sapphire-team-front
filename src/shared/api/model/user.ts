import type { paths } from '../types/users';

export interface Identificator {
  id: string;
}

export type AfterAuthRequestParams =
  paths['/api/rest/auth/oauth2/habr/callback']['get']['parameters']['query'];
export type AfterAuthResponse =
  paths['/api/rest/auth/oauth2/habr/callback']['get']['responses']['200']['content']['application/json'];
export type IsAuthResponse =
  paths['/api/rest/auth/check']['get']['responses']['200']['content']['application/json'];
export type UpdateUserRequest =
  paths['/api/rest/users/{user_id}']['post']['requestBody']['content']['application/json'] &
    Identificator;
export type UpdateUserResponse =
  paths['/api/rest/users/{user_id}']['post']['responses']['200']['content']['application/json'];
export type UpdateUserAvatar = { avatar: File } & Identificator;
export type GetUserResponse =
  paths['/api/rest/users/{user_id}']['get']['responses']['200']['content']['application/json'];
export type GetUserSkills =
  paths['/api/rest/users/{user_id}/skills']['get']['responses']['200']['content']['application/json'];
export type UpdateUserSkills =
  paths['/api/rest/users/{user_id}/skills']['post']['requestBody']['content']['application/json'] &
    Identificator;
export type UpdateUserSkillsResponse =
  paths['/api/rest/users/{user_id}/skills']['post']['responses']['200']['content']['application/json'];
export type DeleteUserAavatar =
  paths['/api/rest/users/{user_id}/avatar']['delete']['responses']['200']['content']['application/json'];
export type GetAvatar =
  paths['/api/rest/users/{user_id}/avatar']['get']['responses']['200']['content']['image/*'];
