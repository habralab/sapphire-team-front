import { paths } from '../types/storage';

export type GetSpecGroupsDataResponse =
  paths['/api/rest/spec-groups/']['get']['responses']['200']['content']['application/json']['data'];
export type GetSpecGroupsResponse =
  paths['/api/rest/spec-groups/']['get']['responses']['200']['content']['application/json'];
export type GetSpecsDataResponse =
  paths['/api/rest/specializations/']['get']['responses']['200']['content']['application/json']['data'];
export type GetSpecsResponse =
  paths['/api/rest/specializations/']['get']['responses']['200']['content']['application/json'];
export type GetSpecsData =
  paths['/api/rest/specializations/']['get']['responses']['200']['content']['application/json']['data'];
export type GetSkillsParametersBase =
  paths['/api/rest/skills/']['get']['parameters']['query'];
export type GetSkillsResponse =
  paths['/api/rest/skills/']['get']['responses']['200']['content']['application/json'];

export type GetSkillsParameters = GetSkillsParametersBase & {
  id?: string[];
  exclude_id?: string[];
};
