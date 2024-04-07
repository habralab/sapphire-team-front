import { Skeleton } from '@chakra-ui/react';

import { useGetProfile } from '../api';

import { ProfileCardUserDesktop } from './ProfileCardUser.desktop';

interface ProfileCardProps {
  userId: string;
}

export function ProfileCardDesktop({ userId }: ProfileCardProps) {
  const { data: user } = useGetProfile(userId);

  return user ? (
    <ProfileCardUserDesktop user={user} />
  ) : (
    <Skeleton w="full" mb={4} h="234.4px" borderRadius="2xl" />
  );
}
