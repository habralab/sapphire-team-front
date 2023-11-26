import { RequestInfo } from '~/entities/project';
import { useGetProfile } from '~/entities/user';

import { GetSpecsData } from '~/shared/api';

interface RequestParticipant {
  userId: string;
  allSpecs?: GetSpecsData;
}

export const RequestParticipant = ({ userId, allSpecs }: RequestParticipant) => {
  const { data: user } = useGetProfile(userId);

  return user ? <RequestInfo userInfo={user} allSpecs={allSpecs} /> : null;
};
