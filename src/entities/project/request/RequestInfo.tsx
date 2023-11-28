import { Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/react';
import { generatePath } from 'react-router-dom';

import { GetSpecsData } from '~/shared/api';
import { GetUserResponse } from '~/shared/api/model';
import { useApi } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { SLink } from '~/shared/ui/SLink';

interface RequestInfoProps {
  userInfo: GetUserResponse;
  allSpecs?: GetSpecsData;
}

export const RequestInfo = ({ userInfo, allSpecs }: RequestInfoProps) => {
  const { userApi } = useApi();

  const getSpecName = (specId: string) => {
    const specName = allSpecs
      ?.filter(({ id }) => specId === id)
      .map(({ name }) => name ?? '');
    return specName;
  };
  return (
    <Flex alignItems="center">
      <Avatar
        name={`${userInfo.first_name} ${userInfo.last_name}`}
        src={userApi.getAvatar(userInfo.id)}
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
        <SLink to={generatePath(PATHS.profile, { id: userInfo.id })}>
          Перейти в профиль
        </SLink>
      </Stack>
      <Flex ml="auto">{/* <Rating /> */}</Flex>
    </Flex>
  );
};
