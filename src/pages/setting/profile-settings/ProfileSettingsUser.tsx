import { UpdateUser } from '~/features/user';

import { useIsAvatarExist, useProfile, useSkills } from '~/entities/user';

interface ProfileSettingsUserProps {
  userId: string;
}

export function ProfileSettingsUser({ userId }: ProfileSettingsUserProps) {
  const { data: user } = useProfile(userId);
  const { data: isAvatarExist, isLoading } = useIsAvatarExist(userId);
  const { data: skills } = useSkills(userId);

  return user && !isLoading && skills ? (
    <UpdateUser user={user} isAvatarExist={!!isAvatarExist} skills={skills} />
  ) : null;
}
