import { Avatar, AvatarGroup } from '@chakra-ui/react';

interface Avatar {
  firstName: string;
  lastName: string;
  img: string;
}

interface AvatarProps {
  avatars: Avatar[];
}

export const AvatarsGroup = ({ avatars }: AvatarProps) => {
  return (
    <AvatarGroup spacing={'-2'} size={'sm'} max={3}>
      {avatars.map(({ firstName, lastName, img }) => (
        <Avatar key={img} name={`${firstName} ${lastName}`} w={7} h={7} src={img} />
      ))}
    </AvatarGroup>
  );
};
