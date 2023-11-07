import {
  Container,
  Flex,
  Heading,
  Button,
  Card as ChakraCard,
  CardBody,
  Image,
  Avatar,
  Stack,
  Text,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Status } from '~/features/project';
import { Rating } from '~/features/user';

import { Card } from '~/entities/project';

import { useApi } from '~/shared/hooks';
import { GoBack } from '~/shared/ui/GoBack';
import { STag } from '~/shared/ui/STag';

const dummyData = [
  {
    id: '1',
    status: 'Проект идёт',
    title: 'Сервис онлайн-образования',
    date: 'с 25 сентября 2023',
    description:
      'EduNest — это проект, который предлагает онлайн-образование для студентов всех возрастов и уровней. Мы стремимся предоставить высококачественное образование, доступное каждому, независимо от их местоположения или финансового положения.Наша миссия - помочь людям раскрыть свой потенциал и достичь успеха в жизни.',
    mainTags: ['Фронтенд разработчик'],
    tags: ['TypeScript', 'Vue', 'Webpack'],
  },
];

export const ProjectPage = () => {
  const { id: projectId } = useParams();
  const { projectsApi, userApi } = useApi();

  const [ownerID, setOwnerID] = useState<string>('');

  const { data, isLoading } = useQuery({
    queryKey: ['getCurrentProject', projectId],
    queryFn: () => projectsApi.getCurrentProject(projectId ?? ''),
    onSuccess: (data) => {
      setOwnerID(data.owner_id);
    },
  });

  const { data: userData, isLoading: userIsLoading } = useQuery({
    queryKey: ['ownerID', ownerID],
    queryFn: () => userApi.getUser(ownerID),
    enabled: !!ownerID,
  });

  const { data: myData, isLoading: meIsLoading } = useQuery({
    queryKey: ['myID', ownerID],
    queryFn: () => userApi.getMe(),
    enabled: !!ownerID,
  });

  return (
    <Container maxW="md" display="flex" flexDirection="column">
      <Flex
        position="sticky"
        bg="bg"
        zIndex={3}
        top={0}
        alignItems="center"
        justifyContent="space-between"
        py={4}
      >
        <Flex alignItems="center">
          <GoBack />
          <Heading variant="h2" mb={0}>
            Проект
          </Heading>
        </Flex>
      </Flex>
      {isLoading ? (
        <>
          <Skeleton height="550px" borderRadius="2xl" />
        </>
      ) : (
        <>
          <ChakraCard
            bg="white"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="none"
            alignContent="center"
          >
            <Image
              src="https://img.freepik.com/premium-photo/programmer-working-computer-office_229060-14.jpg"
              height={32}
              objectFit="cover"
            />
            <CardBody padding={['5', '6']}>
              <Stack gap={0} mb={3} alignItems="start">
                <Status mb={['3', '4']}>{data?.status}</Status>
                <Card
                  title={data?.name}
                  date={data?.deadline}
                  description={data?.description}
                  fullDescription={true}
                />
              </Stack>
              <Stack gap={0} mb={6}>
                <Heading variant="h2">В проект требуются</Heading>
                <STag mainTags={dummyData[0].mainTags} tags={dummyData[0].tags} />
              </Stack>
              <Heading variant="h2">Контакты</Heading>
              <Flex alignItems="flex-start">
                {userIsLoading ? (
                  <>
                    <SkeletonCircle startColor="gray.600" endColor="gray.900" size="10" />
                    <SkeletonText noOfLines={2} skeletonHeight="4" w="60%" />
                  </>
                ) : (
                  <>
                    <Avatar
                      src=""
                      name={`${userData?.first_name} ${userData?.last_name}`}
                    />
                    <Stack pl={2} gap={0}>
                      <Heading variant="h3">
                        {userData?.first_name} {userData?.last_name}
                      </Heading>
                      <Text variant="caption">Организатор</Text>
                    </Stack>
                    <Flex ml="auto">
                      <Rating />
                    </Flex>
                  </>
                )}
              </Flex>
            </CardBody>
          </ChakraCard>
          <Flex bg="bg" position="sticky" bottom="4.6rem" p={0} py={3} mt="auto">
            {!meIsLoading && myData?.id !== data?.owner_id && (
              <Button
                type="button"
                onClick={() => {
                  // handleTabsChange(1);
                }}
                fontSize="sm"
                fontWeight="600"
                w="full"
              >
                Откликнуться
              </Button>
            )}
          </Flex>
        </>
      )}
    </Container>
  );
};
