import { useNavigate } from 'react-router-dom';

import { AddProjectFormView } from '~/widgets/project';

import { BasePageProps, PATHS } from '~/shared/lib/router';

export const AddProjectPage = ({ user }: BasePageProps) => {
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
