/* eslint-disable @typescript-eslint/no-floating-promises */
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
} from '@chakra-ui/react';

import { Status } from '~/features/project';
import { Rating } from '~/features/user';

import { Card } from '~/entities/project';

import { useAuth } from '~/shared/hooks';
import { GoBack } from '~/shared/ui/GoBack';
import { STag } from '~/shared/ui/STag';

import { ProjectApi } from '../api/ProjectApi';

export const ProjectPage = () => {
  const { userId } = useAuth();

  const {
    projectData,
    ownerData,
    positionSkillsData,
    specsIds,
    projectPositions,
    loadedProjectData,
    loadedOwnerData,
    loadedProjectPositions,
    loadedSkills,
    loadedSpecs,
    filterTags,
    filterMainTag,
  } = ProjectApi();

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
      <Skeleton
        height="550px"
        isLoaded={loadedProjectData}
        borderRadius="2xl"
        fadeDuration={2}
      >
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
              <Status mb={['3', '4']}>{projectData?.status}</Status>
              <Card
                title={projectData?.name}
                date={projectData?.deadline}
                description={projectData?.description}
                fullDescription={true}
              />
            </Stack>

            <Stack gap={0} mb={6}>
              <Heading variant="h2">В проект требуются</Heading>
              <Skeleton
                isLoaded={loadedProjectPositions && loadedSkills && loadedSpecs}
                borderRadius="2xl"
                fadeDuration={2}
              >
                <Stack>
                  {projectPositions?.map((_, i) => (
                    <STag
                      key={i}
                      mainTags={filterMainTag(specsIds[i])}
                      tags={filterTags(positionSkillsData[i].data)}
                    />
                  ))}
                </Stack>
              </Skeleton>
            </Stack>
            <Heading variant="h2">Контакты</Heading>
            <Skeleton isLoaded={loadedOwnerData} borderRadius="2xl" fadeDuration={2}>
              <Flex alignItems="flex-start">
                <Avatar
                  src=""
                  name={`${ownerData?.first_name} ${ownerData?.last_name}`}
                />
                <Stack pl={2} gap={0}>
                  <Heading variant="h3">
                    {ownerData?.first_name} {ownerData?.last_name}
                  </Heading>
                  <Text variant="caption">Организатор</Text>
                </Stack>
                <Flex ml="auto">
                  <Rating />
                </Flex>
              </Flex>
            </Skeleton>
          </CardBody>
        </ChakraCard>
        <Flex bg="bg" position="sticky" bottom="4.6rem" p={0} py={3} mt="auto">
          {!loadedOwnerData ||
            (userId !== ownerData?.id && (
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
            ))}
        </Flex>
      </Skeleton>
    </Container>
  );
};
