import { ProjectCardDto } from '../types/ProjectCardTypes';

export interface ProjectCardProps {
  id: number;
  status: string;
  title: string;
  date: string;
  description: string;
  mainTag: string[];
  tags?: string[];
  page?: 'search' | 'project';
}

export const dataAdapter = (
  data: ProjectCardDto,
  page: 'search' | 'project',
): ProjectCardProps => {
  return { ...data, page };
};
