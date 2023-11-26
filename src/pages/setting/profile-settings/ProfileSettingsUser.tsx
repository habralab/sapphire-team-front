import { UpdateUser } from '~/features/user';

import { useGetSkillsByIds } from '~/entities/storage';
import { useIsAvatarExist, useUserSkills } from '~/entities/user';

import { useProfile } from '~/shared/hooks';

interface ProfileSettingsUserProps {
  userId: string;
}

export function ProfileSettingsUser({ userId }: ProfileSettingsUserProps) {
  const { data: user } = useProfile(userId);
  const { data: isAvatarExist, isLoading } = useIsAvatarExist(userId);
  const { data: userSkillsIds } = useUserSkills(userId);
  const { data: skills } = useGetSkillsByIds(userSkillsIds);

  if (isLoading || !user || (userSkillsIds?.length && !skills?.length)) return null;

  return <UpdateUser user={user} isAvatarExist={!!isAvatarExist} skills={skills} />;
}
