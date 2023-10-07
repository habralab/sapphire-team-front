import { IProjectCard } from '../types/ProjectCardTypes';

export interface IProjectCardDto extends IProjectCard {
  page?: 'search' | 'project';
}

export const dataAdapter = (
  data: IProjectCard,
  page: 'search' | 'project',
): IProjectCardDto => {
  return { ...data, page };
};
