import { paths } from '../types/storage';

import { BaseApiClient } from './base';

export type GetSpecGroupsDataResponse =
  paths['/api/rest/spec-groups/']['get']['responses']['200']['content']['application/json']['data'];
type GetSpecGroupsResponse =
  paths['/api/rest/spec-groups/']['get']['responses']['200']['content']['application/json'];
export type GetSpecsDataResponse =
  paths['/api/rest/specializations/']['get']['responses']['200']['content']['application/json']['data'];
type GetSpecsResponse =
  paths['/api/rest/specializations/']['get']['responses']['200']['content']['application/json'];

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
}
