import {
  AddSkillsRequest,
  AddSkillsResponse,
  AfterPostNewProjectResponse,
  CreatePositionRequest,
  CreatePositionResponse,
  GetAllProjectsResponse,
  GetCurrentProjectResponse,
  GetPositionSkillsResponse,
  GetProjectPositionsResponse,
  NewProjectParams,
  UpdateProjectAvatar,
  UpdateProjectAvatarID,
  UpdateSkillsParams,
} from '../types/project.types';

import { BaseApiClient } from './base';

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

  async updateSkills({
    position_id,
    project_id,
    skills,
  }: UpdateSkillsParams & { skills: AddSkillsRequest }) {
    const { data } = await this.client.post<AddSkillsResponse>(
      `/api/rest/projects/${project_id}/positions/${position_id}/skills/`,
      skills,
    );
    return data;
  }

  async getProjectAvatar(project_id: string) {
    const { data } = await this.client.get<Blob>(
      `/api/rest/projects/${project_id}/avatar`,
      {
        responseType: 'blob',
      },
    );
    return data;
  }

  async getCurrentProject(project_id: string) {
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

  async getProjectPositions(project_id: string) {
    const { data } = await this.client.get<GetProjectPositionsResponse>(
      `/api/rest/projects/${project_id}/positions/`,
    );
    return data;
  }

  async getPositionSkills(project_id: string, position_id: string) {
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
