import { paths } from './projects';

export type NewProjectParams =
  paths['/api/rest/projects/']['post']['requestBody']['content']['application/json'];
export type AfterPostNewProjectResponse =
  paths['/api/rest/projects/']['post']['responses']['200']['content']['application/json'];
export type GetAllProjectsResponse =
  paths['/api/rest/projects/']['get']['responses']['200']['content']['application/json'];
export type GetCurrentProjectResponse =
  paths['/api/rest/projects/{project_id}']['get']['responses']['200']['content']['application/json'];
export type CreatePositionRequest =
  paths['/api/rest/projects/{project_id}/positions/']['post']['requestBody']['content']['application/json'];
export type CreatePositionResponse =
  paths['/api/rest/projects/{project_id}/positions/']['post']['responses']['200']['content']['application/json'];
export type AddSkillsRequest =
  paths['/api/rest/projects/{project_id}/positions/{position_id}/skills/']['post']['requestBody']['content']['application/json'];
export type AddSkillsResponse =
  paths['/api/rest/projects/{project_id}/positions/{position_id}/skills/']['post']['responses']['200']['content']['application/json'];
export type UpdateSkillsParams =
  paths['/api/rest/projects/{project_id}/positions/{position_id}/skills/']['post']['parameters']['path'];
export type GetProjectPositionsResponse =
  paths['/api/rest/projects/{project_id}/positions/']['get']['responses']['200']['content']['application/json'];
export type GetProjectPositionsData =
  paths['/api/rest/projects/{project_id}/positions/']['get']['responses']['200']['content']['application/json']['data'];
export type GetPositionSkillsResponse =
  paths['/api/rest/projects/{project_id}/positions/{position_id}/skills/']['get']['responses']['200']['content']['application/json'];
export type UpdateProjectAvatarID =
  paths['/api/rest/projects/{project_id}/avatar']['post']['parameters']['path'];
export type UpdateProjectAvatar =
  paths['/api/rest/projects/{project_id}/avatar']['post']['requestBody']['content']['multipart/form-data'];
