import { BasePageProps } from '~/shared/lib/router';

import { NotAuthProjectsPage } from './NotAuthProjectPage';
import { ProjectBase } from './ProjectBase';

export const ProjectsPage = ({ user }: BasePageProps) => {
  return !user.userId ? <NotAuthProjectsPage /> : <ProjectBase projectId={user.userId} />;
};
