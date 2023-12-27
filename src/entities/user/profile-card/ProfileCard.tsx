import { Skeleton } from '@chakra-ui/react';

import { useGetProfile } from '../api';

import { ProfileCardUser } from './ProfileCardUser';

interface ProfileCardProps {
  userId: string;
}

export function ProfileCard({ userId }: ProfileCardProps) {
  const { data: user } = useGetProfile(userId);

  return user ? (
    <ProfileCardUser user={user} />
  ) : (
    <Skeleton w="full" mb={4} h="234.4px" borderRadius="2xl" />
  );
}
