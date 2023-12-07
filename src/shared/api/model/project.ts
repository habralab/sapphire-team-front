import { paths } from '../types/projects';

export type GetAllParticipantsRequest =
  paths['/api/rest/participants/']['get']['parameters']['query'];
export type GetAllParticipantsResponse =
  paths['/api/rest/participants/']['get']['responses']['200']['content']['application/json'];
export type GetAllParticipantsDataResponse =
  paths['/api/rest/participants/']['get']['responses']['200']['content']['application/json']['data'];
export type UpdateParticipantRequest =
  paths['/api/rest/participants/{participant_id}']['post']['requestBody']['content']['application/json'] &
    paths['/api/rest/participants/{participant_id}']['post']['parameters']['path'];
export type CreateParticipantRequest =
  paths['/api/rest/participants/']['post']['requestBody']['content']['application/json'];
export type CreateParticipantResponse =
  paths['/api/rest/participants/']['post']['responses']['200']['content']['application/json'];

export type CreatePositionRequest =
  paths['/api/rest/positions/']['post']['requestBody']['content']['application/json'];
export type CreatePositionResponse =
  paths['/api/rest/positions/']['post']['responses']['200']['content']['application/json'];
export type AddSkillsRequest =
  paths['/api/rest/positions/{position_id}/skills/']['post']['requestBody']['content']['application/json'];
export type AddSkillsResponse =
  paths['/api/rest/positions/{position_id}/skills/']['post']['responses']['200']['content']['application/json'];
export type UpdateSkillsParams =
  paths['/api/rest/positions/{position_id}/skills/']['post']['parameters']['path'];
export type GetAllPositionRequest =
  paths['/api/rest/positions/']['get']['parameters']['query'];
export type GetProjectPositionsResponse =
  paths['/api/rest/positions/']['get']['responses']['200']['content']['application/json'];
export type GetProjectPositionsDataResponse =
  paths['/api/rest/positions/']['get']['responses']['200']['content']['application/json']['data'];
export type ProjectPositionsResponse =
  paths['/api/rest/positions/']['get']['responses']['200']['content']['application/json']['data']['0'];
export type ProjectData =
  paths['/api/rest/positions/']['get']['responses']['200']['content']['application/json']['data']['0']['project'];
export type GetPositionSkillsResponse =
  paths['/api/rest/positions/{position_id}/skills/']['get']['responses']['200']['content']['application/json'];

export type GetAllProjectsRequest =
  paths['/api/rest/projects/']['get']['parameters']['query'];
export type GetAllProjectsResponse =
  paths['/api/rest/projects/']['get']['responses']['200']['content']['application/json'];
export type GetCurrentProjectResponse =
  paths['/api/rest/projects/{project_id}']['get']['responses']['200']['content']['application/json'];

export type NewProjectRequest =
  paths['/api/rest/projects/']['post']['requestBody']['content']['application/json'];
export type UpdateProjectAvatarRequest =
  paths['/api/rest/projects/{project_id}/avatar']['post']['parameters']['path'] &
    paths['/api/rest/projects/{project_id}/avatar']['post']['requestBody']['content']['multipart/form-data'];
export type AfterPostNewProjectResponse =
  paths['/api/rest/projects/']['post']['responses']['200']['content']['application/json'];

export type UpdateProjectParams =
  paths['/api/rest/projects/{project_id}']['patch']['parameters']['path'];
export type UpdateProjectRequest =
  paths['/api/rest/projects/{project_id}']['patch']['requestBody']['content']['application/json'];
export type UpdateProjectResponse =
  paths['/api/rest/projects/{project_id}']['patch']['responses']['200']['content']['application/json'];

export type GetStatistic =
  paths['/api/rest/users/{user_id}/statistic']['get']['responses']['200']['content']['application/json'];
