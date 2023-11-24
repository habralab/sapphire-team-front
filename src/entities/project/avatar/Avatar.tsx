import { Image } from '@chakra-ui/react';

import { useApi } from '~/shared/hooks';

import placeholderAvatar from './placeholder-project-avatar.jpg';

interface AvatarProps {
  projectId: string;
}

export const Avatar = ({ projectId }: AvatarProps) => {
  const { projectsApi } = useApi();
  return (
    <Image
      src={projectsApi.getProjectAvatar(projectId)}
      fallbackSrc={placeholderAvatar}
      height={32}
      objectFit="cover"
    />
  );
};
