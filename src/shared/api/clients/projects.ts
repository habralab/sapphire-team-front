import { paths } from '../types/projects';

import { BaseApiClient } from './base';

export type NewProjectParams =
  paths['/api/rest/projects/']['post']['requestBody']['content']['application/json'];
type AfterPostNewProjectResponse =
  paths['/api/rest/projects/']['post']['responses']['200']['content']['application/json'];
export type GetAllProjectsResponse =
  paths['/api/rest/projects/']['get']['responses']['200']['content']['application/json'];
type GetCurrentProjectResponse =
  paths['/api/rest/projects/{project_id}']['get']['responses']['200']['content']['application/json'];

export type CreatePositionRequest =
  paths['/api/rest/projects/{project_id}/positions/']['post']['requestBody']['content']['application/json'];
type CreatePositionResponse =
  paths['/api/rest/projects/{project_id}/positions/']['post']['responses']['200']['content']['application/json'];

type AddSkillsRequest =
  paths['/api/rest/projects/{project_id}/positions/{position_id}/skills/']['post']['requestBody']['content']['application/json'];
type AddSkillsResponse =
  paths['/api/rest/projects/{project_id}/positions/{position_id}/skills/']['post']['responses']['200']['content']['application/json'];

type GetProjectPositionsResponse =
  paths['/api/rest/projects/{project_id}/positions/']['get']['responses']['200']['content']['application/json'];
export type GetProjectPositionsData =
  paths['/api/rest/projects/{project_id}/positions/']['get']['responses']['200']['content']['application/json']['data'];
type GetPositionSkillsResponse =
  paths['/api/rest/projects/{project_id}/positions/{position_id}/skills/']['get']['responses']['200']['content']['application/json'];

export type UpdateProjectAvatarID =
  paths['/api/rest/projects/{project_id}/avatar']['post']['parameters']['path'];
export type UpdateProjectAvatar =
  paths['/api/rest/projects/{project_id}/avatar']['post']['requestBody']['content']['multipart/form-data'];

export class ProjectsApiClient extends BaseApiClient {
  async addNewProject(newProject: NewProjectParams) {
    const { data } = await this.client.post<AfterPostNewProjectResponse>(
      `/api/rest/projects/`,
      newProject,
    );
    return data;
  }

  async uploadProjectAvatar({
    project_id,
    avatar,
  }: UpdateProjectAvatarID & UpdateProjectAvatar) {
    await this.client.post(
      `/api/rest/projects/${project_id}/avatar`,
      { avatar },
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      },
    );
  }

  async createPosition(project_id: string, position: CreatePositionRequest) {
    const { data } = await this.client.post<CreatePositionResponse>(
      `/api/rest/projects/${project_id}/positions/`,
      position,
    );
    return data;
  }

  async updateSkills(project_id: string, position_id: string, skills: AddSkillsRequest) {
    const { data } = await this.client.post<AddSkillsResponse>(
      `/api/rest/projects/${project_id}/positions/${position_id}/skills/`,
      skills,
    );
    return data;
  }

  async getProjectAvatar(project_id?: string) {
    const { data } = await this.client.get<Blob>(
      `/api/rest/projects/${project_id}/avatar`,
      {
        responseType: 'blob',
      },
    );
    return data;
  }

  async getCurrentProject(project_id?: string) {
    const { data } = await this.client.get<GetCurrentProjectResponse>(
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

  async getProjectPositions(project_id?: string) {
    const { data } = await this.client.get<GetProjectPositionsResponse>(
      `/api/rest/projects/${project_id}/positions/`,
    );
    return data;
  }

  async getPositionSkills(project_id?: string, position_id?: string) {
    const { data } = await this.client.get<GetPositionSkillsResponse>(
      `/api/rest/projects/${project_id}/positions/${position_id}/skills/`,
    );
    return data;
  }

  async getAllProjects(page: number, owner_id?: string | null) {
    const { data } = await this.client.get<GetAllProjectsResponse>(
      `/api/rest/projects/`,
      { params: { page, owner_id } },
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
