import { useProfile } from '~/entities/user';

import { ProfileCardNotAuth } from './ProfileCardNotAuth';
import { ProfileCardUser } from './ProfileCatdUser';

interface ProfileCardProps {
  userId: string;
}

export function ProfileCard({ userId }: ProfileCardProps) {
  const { data: user } = useProfile(userId);

  return user ? <ProfileCardUser user={user} /> : <ProfileCardNotAuth />;
}
