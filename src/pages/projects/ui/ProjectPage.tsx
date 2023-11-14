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
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Status } from '~/features/project';
import { Rating } from '~/features/user';

import { Card } from '~/entities/project';

import { useAuth } from '~/shared/hooks';
import { GoBack } from '~/shared/ui/GoBack';
import { STag } from '~/shared/ui/STag';

import { useGetOwner } from '../api/useGetOwner';
import { useGetPositions } from '../api/useGetPositions';
import { useGetPositionsSkills } from '../api/useGetPositionsSkills';
import { useGetProject } from '../api/useGetProject';
import { useGetProjectAvatar } from '../api/useGetProjectAvatar';
import { useGetSkillsValue } from '../api/useGetSkillsValue';
import { useGetSpecs } from '../api/useGetSpecs';

export const ProjectPage = () => {
  const { userId } = useAuth();
  const { id: projectId } = useParams();
  const [projectAvatarImg, setProjectAvatarImg] = useState<string>('');
  const [specsIds, setSpecsIds] = useState<string[]>([]);
  const [unvaluedSkillsIds, setUnvaluedSkillsIds] = useState<string[][]>([]);
  const [readySkillsIds, setReadySkillsIds] = useState<string[][]>([]);

  const { data: specsData, isSuccess: loadedSpecsData } = useGetSpecs();
  const { data: projectData, isSuccess: loadedProjectData } = useGetProject(projectId);
  const { data: projectAvatar, isSuccess: loadedProjectAvatar } =
    useGetProjectAvatar(projectId);
  const { data: projectPositionsData, isSuccess: loadedProjectPositions } =
    useGetPositions(projectId);
  const { data: ownerData, isSuccess: loadedOwnerData } = useGetOwner(
    projectData?.owner_id,
  );

  const positionSkillsData = useGetPositionsSkills(projectPositionsData?.data, projectId);
  const positionSkillsValue = useGetSkillsValue(unvaluedSkillsIds);

  const loadedPositionSkills = positionSkillsData.every((query) => query.isSuccess);
  const loadedPositionSkillsValue = positionSkillsValue.every((query) => query.isSuccess);

  useEffect(() => {
    if (loadedProjectAvatar) {
      setProjectAvatarImg(URL.createObjectURL(projectAvatar));
    }
  }, [loadedProjectAvatar]);

  useEffect(() => {
    if (
      loadedPositionSkills &&
      positionSkillsData.length &&
      projectPositionsData?.data.length
    ) {
      const idsSpecPositions = projectPositionsData.data.map(
        ({ specialization_id }) => specialization_id,
      );

      const idsSkillsPositions = positionSkillsData.map(({ data }) =>
        data?.length ? data : [],
      );
      setSpecsIds(idsSpecPositions);
      setUnvaluedSkillsIds(idsSkillsPositions);
    }
  }, [loadedPositionSkills]);

  useEffect(() => {
    if (loadedPositionSkillsValue && positionSkillsValue.length) {
      const idsReadySkillsPositions = positionSkillsValue
        .map(({ data }) => (data?.length ? data : []))
        .map((data) => data.map(({ label }) => (label ? label : '')));
      setReadySkillsIds(idsReadySkillsPositions);
    }
  }, [loadedPositionSkillsValue]);

  const filterMainTag = (positionId?: string) => {
    const mainTag = specsData?.data
      .filter(({ id }) => id === positionId)
      .map(({ name }) => name ?? '');
    return mainTag;
  };

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
            src={projectAvatarImg}
            fallbackSrc="https://img.freepik.com/premium-photo/programmer-working-computer-office_229060-14.jpg"
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
                isLoaded={
                  loadedProjectPositions &&
                  loadedSpecsData &&
                  loadedPositionSkillsValue &&
                  !!positionSkillsValue.length
                }
                borderRadius="2xl"
                fadeDuration={2}
              >
                <Stack>
                  {projectPositionsData?.data.map((_, i) => (
                    <STag
                      key={i}
                      mainTags={filterMainTag(specsIds[i])}
                      tags={readySkillsIds[i]}
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
            (userId !== ownerData.id && (
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
