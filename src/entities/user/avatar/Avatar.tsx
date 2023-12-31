import {
  Flex,
  Text,
  SkeletonCircle,
  SkeletonText,
  Avatar as ChakraAvatar,
} from '@chakra-ui/react';

import { useGetAvatar, useGetProfile } from '../api';

const defaultName = 'Хабраюзер';

interface AvatarProps {
  userId: string;
}

export const Avatar = ({ userId }: AvatarProps) => {
  const { data, isLoading } = useGetProfile(userId);

  const { data: avatar } = useGetAvatar(userId);

  return (
    <Flex alignItems="center" gap={2} w="full">
      {isLoading ? (
        <>
          <SkeletonCircle startColor="gray.600" endColor="gray.900" size="10" />
          <SkeletonText noOfLines={1} skeletonHeight="4" w="60%" />
        </>
      ) : (
        <>
          <ChakraAvatar name={`${data?.first_name} ${data?.last_name}`} src={avatar} />
          <Text fontWeight="semibold" noOfLines={1}>{`Привет, ${
            data?.first_name ?? defaultName
          }!`}</Text>
        </>
      )}
    </Flex>
  );
};
