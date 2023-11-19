import { Skeleton } from '@chakra-ui/react';

import { useProfile } from '~/entities/user';

import { ProfileCardUser } from './ProfileCatdUser';

interface ProfileCardProps {
  userId: string;
}

export function ProfileCard({ userId }: ProfileCardProps) {
  const { data: user } = useProfile(userId);

  return user ? (
    <ProfileCardUser user={user} />
  ) : (
    <Skeleton w="full" mb={4} h="234.4px" borderRadius="2xl" />
  );
}
