import { useEffect, useState } from 'react';

import { GetAllParticipantsDataResponse } from '~/shared/api/types';

interface UseGetUserStatusProps {
  allParticipant?: GetAllParticipantsDataResponse;
  userId?: string;
}

interface Statuses {
  left: string;
  request: string;
  declined: string;
  joined: string;
  nitp: string;
  default: string;
}

export const useGetUserStatus = ({ allParticipant, userId }: UseGetUserStatusProps) => {
  const statuses: Statuses = {
    left: 'left',
    request: 'request',
    declined: 'declined',
    joined: 'joined',
    nitp: 'NotInTheProject',
    default: 'default',
  };

  const [userStatus, setUserStatus] = useState(statuses.default);

  useEffect(() => {
    if (allParticipant) {
      const userIsParticipant = allParticipant.find(({ user_id }) => user_id === userId);
      setUserStatus(
        userIsParticipant ? statuses[userIsParticipant.status] : statuses.nitp,
      );
    }
  }, [allParticipant]);

  const setStatus = (status: keyof typeof statuses) => {
    setUserStatus(statuses[status]);
  };
  return { userStatus, setStatus };
};
