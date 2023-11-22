import { BasePageProps } from '~/shared/lib/router';

import { NotAuthProjectsPage } from './NotAuthProjectPage';
import { ProjectsBase } from './ProjectsBase';

export const ProjectsPage = ({ user }: BasePageProps) => {
  return !user.userId ? <NotAuthProjectsPage /> : <ProjectsBase userId={user.userId} />;
};
