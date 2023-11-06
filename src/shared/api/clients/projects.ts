import { paths } from '../types/projects';

import { BaseApiClient } from './base';

export type PostNewProjectParams =
  paths['/api/rest/projects/']['post']['requestBody']['content']['application/json'];
type AfterPostNewProjectResponse =
  paths['/api/rest/projects/']['post']['responses']['200']['content']['application/json'];
export type getAllProjectsResponse =
  paths['/api/rest/projects/']['get']['responses']['200']['content']['application/json'];

export class ProjectsApiClient extends BaseApiClient {
  async addNewProject(newProject: PostNewProjectParams) {
    const { data } = await this.client.post<AfterPostNewProjectResponse>(
      `/api/rest/projects/`,
      newProject,
    );
    return data;
  }

  async getAllProjects(page: number) {
    const { data } = await this.client.get<getAllProjectsResponse>(
      `/api/rest/projects/`,
      { params: { page } },
    );
    return data;
  }
}
