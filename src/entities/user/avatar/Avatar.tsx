import {
  Flex,
  Text,
  SkeletonCircle,
  SkeletonText,
  Image,
  Center,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { useApi } from '~/shared/hooks';

import NotAuth from './notAuth.svg';

const defaultName = 'Хабраюзер';

interface AvatarProps {
  userId: string;
}

export const Avatar = ({ userId }: AvatarProps) => {
  const { userApi } = useApi();

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ['ownerID', userId],
    queryFn: () => userApi.getUser(userId),
  });

  return (
    <Flex alignItems="center" gap={2} w="full">
      {isLoading ? (
        <>
          <SkeletonCircle startColor="gray.600" endColor="gray.900" size="10" />
          <SkeletonText noOfLines={1} skeletonHeight="4" w="60%" />
        </>
      ) : (
        <>
          <Center w={10} h={10} bg="white" borderRadius="full">
            <Image src={NotAuth} w={9} h={9} />
          </Center>
          {/* <ChakraAvatar name={name} src={NotAuth} /> */}
          <Text fontWeight="semibold">{`Привет, ${
            data?.first_name ?? defaultName
          }!`}</Text>
        </>
      )}
    </Flex>
  );
};
