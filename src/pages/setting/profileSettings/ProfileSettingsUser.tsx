import { UpdateUser } from '~/features/user';

import { useProfile } from '~/entities/user';

interface ProfileSettingsUserProps {
  userId: string;
}

export function ProfileSettingsUser({ userId }: ProfileSettingsUserProps) {
  const { data: user } = useProfile(userId);

  return user ? <UpdateUser user={user} /> : null;
}
