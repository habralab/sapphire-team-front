import { Navigate, useParams } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';

import { ProjectBase } from './ProjectBase';

export const ProjectPage = () => {
  const { id: projectId } = useParams();

  return (
    <>
      {!projectId ? (
        <Navigate to={PATHS.notFound} replace />
      ) : (
        <ProjectBase projectId={projectId} />
      )}
    </>
  );
};
