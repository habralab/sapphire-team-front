import type {
  GetAllParticipantsRequest,
  GetSkillsParameters,
  GetSpecsParams,
} from '~/shared/api';
import type { SelectOptions } from '~/shared/types';

export const userKeys = {
  profile: (id: string) => ['profile', id] as const,
  skills: (id: string) => [...userKeys.profile(id), 'skills'] as const,
  avatars: ['avatar'] as const,
  avatar: (id: string) => [...userKeys.avatars, id] as const,
  avatarExist: (id: string) => [...userKeys.avatar(id), 'IsAvatar'] as const,
  statistic: (id: string) => ['statistic', id] as const,
};

export const notiicationsKeys = {
  all: ['notificatiions'] as const,
  notiication: (id: string) => [...notiicationsKeys.all, id] as const,
  unread: ['unreadNotificatiions'] as const,
};

interface Search {
  specs?: string[];
  skills?: SelectOptions[];
  date?: string;
  searchText?: string;
}

export const projectsKeys = {
  allProjects: ['getAllProjects'] as const,
  projects: (id: string) => [...projectsKeys.allProjects, id] as const,
  allParticipants: ['getParticipants'] as const,
  participants: (data: GetAllParticipantsRequest) =>
    [...projectsKeys.allParticipants, data] as const,
  positions: (id: string) => ['getProjectPositions', id] as const,
  skills: (projectId: string, id: string) => ['positionSkills', projectId, id] as const,
  currentProjects: ['getCurrentProject'] as const,
  project: (id: string) => [...projectsKeys.currentProjects, id] as const,
  avatar: (id: string) => ['useGetProjectAvatar', id] as const,
  user: (id: string) => ['userID', id] as const,

  // а вот это внутри компонентов
  position: (id: string) => ['getPosition', id] as const, // Position feature
  allPositions: ({ specs, skills, date, searchText }: Search) =>
    ['getAllPositions', { specs, skills, date, searchText }] as const,
};

export const storageKeys = {
  allSkills: ['skills'] as const,
  positionSkills: (skills: string[]) => ['positionSkills', skills] as const,
  skillsByIds: (skills: string[]) => [...storageKeys.allSkills, skills] as const,
  specs: (params: GetSpecsParams) => ['specs', params] as const,
  specGroups: ['specGroups'] as const, // Team
  searchSkills: (params: GetSkillsParameters) => ['skills', params] as const,
};
