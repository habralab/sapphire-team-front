import { Navigate, useParams } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';

import { Position } from './Position';

export const PositionPage = () => {
  const { id: positionId } = useParams();

  return !positionId ? (
    <Navigate to={PATHS.notFound} replace />
  ) : (
    <Position positionId={positionId} />
  );
};
