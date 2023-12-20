import { useNavigate } from 'react-router-dom';

import { AddProject } from '~/features/project';

import { useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

export const AddProjectPage = () => {
  const user = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {user.userId ? (
        <AddProject userId={user.userId} />
      ) : (
        () => {
          navigate(PATHS.notFound);
        }
      )}
    </>
  );
};
