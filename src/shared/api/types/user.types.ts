import { paths } from './users';

export type AfterAuthRequestParams =
  paths['/api/rest/auth/oauth2/habr/callback']['get']['parameters']['query'];
export type AfterAuthResponse =
  paths['/api/rest/auth/oauth2/habr/callback']['get']['responses']['200']['content']['application/json'];
export type IsAuthResponse =
  paths['/api/rest/auth/check']['get']['responses']['200']['content']['application/json'];
export type UpdateUserRequest =
  paths['/api/rest/users/{user_id}']['post']['requestBody']['content']['application/json'];
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
