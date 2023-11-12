import { paths } from './users';

interface Identificator {
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
export type UpdateUserParams =
  paths['/api/rest/users/{user_id}']['post']['parameters']['path'];
export type GetUserAvatarID =
  paths['/api/rest/users/{user_id}/avatar']['get']['parameters']['path'];
export type UpdateUserAvatarID =
  paths['/api/rest/users/{user_id}/avatar']['post']['parameters']['path'];
export type UpdateUserAvatar =
  paths['/api/rest/users/{user_id}/avatar']['post']['requestBody']['content']['multipart/form-data'];
export type getUserResponse =
  paths['/api/rest/users/{user_id}']['get']['responses']['200']['content']['application/json'];
export type UpdateUserResponse =
  paths['/api/rest/users/{user_id}']['post']['responses']['200']['content']['application/json'];
export type GetUserSkills =
  paths['/api/rest/users/{user_id}/skills']['get']['responses']['200']['content']['application/json'];
export type GetUserSkillsID =
  paths['/api/rest/users/{user_id}/skills']['get']['parameters']['path'];
export type GetUserAvatar =
  paths['/api/rest/users/{user_id}/avatar']['get']['responses']['200']['content']['application/json'];
export type UpdateUserSkillsResponse =
  paths['/api/rest/users/{user_id}/skills']['post']['responses']['200']['content']['application/json'];
