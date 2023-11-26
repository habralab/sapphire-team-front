import { Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Avatar, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

import { GetSpecsData } from '~/shared/api';
import { useApi, useProfile } from '~/shared/hooks';

interface RequestInfoProps {
  userId: string;
  allSpecs?: GetSpecsData;
}

export const RequestInfo = ({ userId, allSpecs }: RequestInfoProps) => {
  const { userApi } = useApi();
  const { data: userInfo, isSuccess: loadedProfile } = useProfile(userId);

  const getSpecName = (specId: string) => {
    const specName = allSpecs
      ?.filter(({ id }) => specId === id)
      .map(({ name }) => name ?? '');
    return specName;
  };
  return (
    <Flex alignItems="flex-start">
      {!loadedProfile ? (
        <>
          <SkeletonCircle startColor="gray.600" endColor="gray.900" size="10" />
          <SkeletonText noOfLines={1} skeletonHeight="4" w="60%" />
        </>
      ) : (
        <>
          <Avatar
            name={`${userInfo.first_name} ${userInfo.last_name}`}
            src={userApi.getAvatar(userId)}
          />
          <Stack pl={2} gap={0}>
            <Heading variant="h3">
              {userInfo.first_name} {userInfo.last_name}
            </Heading>
            <Text variant="caption">
              {userInfo.main_specialization_id
                ? getSpecName(userInfo.main_specialization_id)
                : 'У пользователя не выбрана специализация'}
            </Text>
          </Stack>
          <Flex ml="auto">{/* <Rating /> */}</Flex>
        </>
      )}
    </Flex>
  );
};
