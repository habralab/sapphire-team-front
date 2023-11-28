import { useAuth } from '~/shared/hooks';

import { NotAuthProjectsPage } from './NotAuthProjectPage';
import { ProjectsBase } from './ProjectsBase';

export const ProjectsPage = () => {
  const user = useAuth();
  return !user.userId ? <NotAuthProjectsPage /> : <ProjectsBase userId={user.userId} />;
};
