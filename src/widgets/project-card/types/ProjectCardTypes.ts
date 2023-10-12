export interface ProjectCardProps {
  id: number;
  status: string;
  title: string;
  date: string;
  description: string;
  mainTags: string[];
  tags?: string[];
  page?: 'search' | 'project';
}
