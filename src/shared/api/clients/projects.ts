import { paths } from '../types/projects';

import { BaseApiClient } from './base';

export type PostNewProjectParams =
  paths['/api/rest/projects/']['post']['requestBody']['content']['application/json'];
type AfterPostNewProjectResponse =
  paths['/api/rest/projects/']['post']['responses']['200']['content']['application/json'];
export type getAllProjectsResponse =
  paths['/api/rest/projects/']['get']['responses']['200']['content']['application/json'];
type getCurrentProjectResponse =
  paths['/api/rest/projects/{project_id}']['get']['responses']['200']['content']['application/json'];

export class ProjectsApiClient extends BaseApiClient {
  async addNewProject(newProject: PostNewProjectParams) {
    const { data } = await this.client.post<AfterPostNewProjectResponse>(
      `/api/rest/projects/`,
      newProject,
    );
    return data;
  }

  async getCurrentProject(project_id: string) {
    const { data } = await this.client.get<getCurrentProjectResponse>(
      `/api/rest/projects/${project_id}`,
    );
    const { deadline, ...rest } = data;
    let formatDate;
    if (deadline) formatDate = new Date(deadline).toLocaleDateString('ru');
    return { ...rest, deadline: formatDate ?? '' };
  }

  async getAllProjects(page: number) {
    const { data } = await this.client.get<getAllProjectsResponse>(
      `/api/rest/projects/`,
      { params: { page } },
    );
    const { data: onlyData, ...others } = data;
    const newData = onlyData.map((project) => {
      const { deadline, ...rest } = project;
      let formatDate;
      if (deadline) formatDate = new Date(deadline).toLocaleDateString('ru');
      return { ...rest, deadline: formatDate ?? '' };
    });
    return { ...others, data: newData };
  }
}
