import { useNavigate } from 'react-router-dom';

import { AddProjectFormView } from '~/widgets/project';

import { useAuth } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';

export const AddProjectPage = () => {
  const user = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {user.userId ? (
        <AddProjectFormView userId={user.userId} />
      ) : (
        () => {
          navigate(PATHS.notFound);
        }
      )}
    </>
  );
};
