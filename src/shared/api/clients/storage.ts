import Qs from 'query-string';

import type {
  GetSkillsParameters,
  GetSkillsResponse,
  GetSpecGroupsResponse,
  GetSpecsParams,
  GetSpecsResponse,
} from '../model';

import { BaseApiClient } from './base';

export class StorageApiClient extends BaseApiClient {
  async getSpecGroups() {
    const { data } = await this.client.get<GetSpecGroupsResponse>(
      `/api/rest/spec-groups/`,
      {
        params: { per_page: 20 },
      },
    );
    return data;
  }
  async getSpecs(request: GetSpecsParams) {
    const { data } = await this.client.get<GetSpecsResponse>(
      `/api/rest/specializations/`,
      {
        params: { per_page: 130, ...request },
      },
    );
    return data;
  }
  async getSkills(params: GetSkillsParameters) {
    const { data } = await this.client.get<GetSkillsResponse>(`/api/rest/skills/`, {
      params,
      paramsSerializer: function (params) {
        return Qs.stringify(params);
      },
    });
    const formatData = data.data.map(({ id, name }) => {
      return { value: id, label: name };
    });
    return formatData;
  }
}
