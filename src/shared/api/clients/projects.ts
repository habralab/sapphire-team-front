import Qs from 'query-string';

import { formatDate, StatusAdapter } from '~/shared/lib/adapters';

import {
  AddSkillsRequest,
  AddSkillsResponse,
  AfterPostNewProjectResponse,
  CreateParticipantRequest,
  CreateParticipantResponse,
  CreatePositionRequest,
  CreatePositionResponse,
  GetAllParticipantsRequest,
  GetAllParticipantsResponse,
  GetAllPositionRequest,
  GetAllProjectsRequest,
  GetAllProjectsResponse,
  GetCurrentProjectResponse,
  GetPositionSkillsResponse,
  GetProjectPositionsResponse,
  GetStatistic,
  NewProjectParams,
  ProjectPositionsResponse,
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

  async createPosition(requestData: CreatePositionRequest) {
    const { data } = await this.client.post<CreatePositionResponse>(
      `/api/rest/positions/`,
      requestData,
    );
    return data;
  }

  async createParticipant(requestData: CreateParticipantRequest) {
    const { data } = await this.client.post<CreateParticipantResponse>(
      `/api/rest/participants/`,
      requestData,
    );
    return data;
  }

  async getParticipants(request: GetAllParticipantsRequest) {
    const { data } = await this.client.get<GetAllParticipantsResponse>(
      `/api/rest/participants/`,
      { params: request },
    );
    return data;
  }

  async updateSkills({
    position_id,
    skills,
  }: UpdateSkillsParams & { skills: AddSkillsRequest }) {
    const { data } = await this.client.post<AddSkillsResponse>(
      `/api/rest/positions/${position_id}/skills/`,
      skills,
    );
    return data;
  }

  getProjectAvatar(project_id: string) {
    return `${this.baseURL}/api/rest/projects/${project_id}/avatar`;
  }

  async getCurrentProject(project_id: string) {
    const { data } = await this.client.get<GetCurrentProjectResponse>(
      `/api/rest/projects/${project_id}`,
    );
    const statusAdapter = {
      preparation: 'Скоро начнется',
      in_work: 'Проект идёт',
      finished: 'Проект завершён',
    };
    const { deadline, status, ...rest } = data;
    return {
      ...rest,
      deadline: deadline ? `с ${formatDate(deadline)}` : 'отсутствует',
      status: statusAdapter[status],
    };
  }

  async getProjectPositions(project_id: string) {
    const { data } = await this.client.get<GetProjectPositionsResponse>(
      `/api/rest/positions/`,
      { params: { project_id } },
    );
    return data;
  }

  async getPosition(position_id: string) {
    const { data } = await this.client.get<ProjectPositionsResponse>(
      `/api/rest/positions/${position_id}`,
    );
    const { project, ...rest } = data;
    const { startline, status, ...restProject } = project;
    return {
      ...rest,
      project: {
        ...restProject,
        startline: `с ${formatDate(startline)}`,
        status: StatusAdapter(status),
      },
    };
  }

  async getPositionSkills(project_id: string, position_id: string) {
    const { data } = await this.client.get<GetPositionSkillsResponse>(
      `/api/rest/projects/${project_id}/positions/${position_id}/skills/`,
    );
    return data;
  }

  async getAllPositions(
    request: GetAllPositionRequest & {
      specialization_ids?: string[];
      skills_ids?: string[];
    },
  ) {
    const { data } = await this.client.get<GetProjectPositionsResponse>(
      `/api/rest/positions/`,
      {
        params: request,
        paramsSerializer: function (params) {
          return Qs.stringify(params, {
            skipNull: true,
            skipEmptyString: true,
          });
        },
      },
    );
    const { data: onlyData, ...others } = data;
    const newData = onlyData.map((position) => {
      const { project, ...rest } = position;
      const { startline, status, ...restProject } = project;
      return {
        ...rest,
        project: {
          ...restProject,
          startline: `с ${formatDate(startline)}`,
          status: StatusAdapter(status),
        },
      };
    });
    return { ...others, data: newData };
  }

  async getAllProjects(request: GetAllProjectsRequest) {
    const { data } = await this.client.get<GetAllProjectsResponse>(
      `/api/rest/projects/`,
      {
        params: request,
        paramsSerializer: function (params) {
          return Qs.stringify(params, {
            skipNull: true,
            skipEmptyString: true,
          });
        },
      },
    );
    const { data: onlyData, ...others } = data;
    const newData = onlyData.map((project) => {
      const { deadline, status, ...rest } = project;
      return {
        ...rest,
        deadline: deadline ? `с ${formatDate(deadline)}` : 'отсутствует',
        status: StatusAdapter(status),
      };
    });
    return { ...others, data: newData };
  }

  async getStatistic(id: string) {
    const { data } = await this.client.get<GetStatistic>(
      `/api/rest/users/${id}/statistic`,
    );
    return data;
  }
}
