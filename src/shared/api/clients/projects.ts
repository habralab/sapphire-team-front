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
    const statusAdapter = {
      preparation: 'Подготовка',
      in_work: 'В работе',
      finished: 'Проект завершён',
    };
    const { deadline, status, ...rest } = data;
    let formatDate;
    if (deadline)
      formatDate = new Date(deadline).toLocaleDateString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    return {
      ...rest,
      deadline: `с ${formatDate}`.slice(0, -3),
      status: statusAdapter[status],
    };
  }

  async getAllProjects(page: number) {
    const { data } = await this.client.get<getAllProjectsResponse>(
      `/api/rest/projects/`,
      { params: { page } },
    );
    const { data: onlyData, ...others } = data;
    const newData = onlyData.map((project) => {
      const statusAdapter = {
        preparation: 'Подготовка',
        in_work: 'В работе',
        finished: 'Проект завершён',
      };
      const { deadline, status, ...rest } = project;
      let formatDate;
      if (deadline)
        formatDate = new Date(deadline).toLocaleDateString('ru', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      return {
        ...rest,
        deadline: `с ${formatDate}`.slice(0, -3),
        status: statusAdapter[status],
      };
    });
    return { ...others, data: newData };
  }
}
