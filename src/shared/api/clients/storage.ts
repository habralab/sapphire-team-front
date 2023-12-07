import Qs from 'query-string';

import {
  GetSkillsParameters,
  GetSkillsResponse,
  GetSpecGroupsResponse,
  GetSpecsResponse,
} from '../model/storage';

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
  async getSpecs() {
    const { data } = await this.client.get<GetSpecsResponse>(
      `/api/rest/specializations/`,
      {
        params: { per_page: 130 },
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
