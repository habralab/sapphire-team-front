import { Image } from '@chakra-ui/react';

import { useApi } from '~/shared/hooks';

interface AvatarProps {
  projectId: string;
}

export const Avatar = ({ projectId }: AvatarProps) => {
  const { projectsApi } = useApi();
  return (
    <Image
      src={projectsApi.getProjectAvatar(projectId)}
      fallbackSrc="https://img.freepik.com/premium-photo/programmer-working-computer-office_229060-14.jpg"
      height={32}
      objectFit="cover"
    />
  );
};
