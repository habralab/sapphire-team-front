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
  Portal,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Status } from '~/features/project';
import { Rating } from '~/features/user';

import {
  Card,
  useGetPositions,
  useGetPositionsSkills,
  useGetProject,
  useGetProjectAvatar,
} from '~/entities/project';
import { useGetSkills, useGetSpecs } from '~/entities/storage';
import { useGetOwner } from '~/entities/user';

import { useAuth, useLayoutRefs } from '~/shared/hooks';
import { GoBack } from '~/shared/ui/GoBack';
import { STag } from '~/shared/ui/STag';

export const ProjectPage = () => {
  const layout = useLayoutRefs();
  const { userId } = useAuth();
  const { id: projectId } = useParams();
  const [projectAvatarImg, setProjectAvatarImg] = useState<string>('');
  const [specsIds, setSpecsIds] = useState<string[]>([]);
  const [unvaluedSkillsIds, setUnvaluedSkillsIds] = useState<string[][]>([]);
  const [readySkillsIds, setReadySkillsIds] = useState<string[][]>([]);

  const { data: specs, isSuccess: loadedSpecs } = useGetSpecs();
  const { data: project, isSuccess: loadedProject } = useGetProject(projectId);
  const { data: projectAvatar, isSuccess: loadedProjectAvatar } =
    useGetProjectAvatar(projectId);
  const { data: projectPositions, isSuccess: loadedProjectPositions } =
    useGetPositions(projectId);
  const { data: owner, isSuccess: loadedOwner } = useGetOwner(project?.owner_id);

  const userIsOwner = !loadedOwner || userId !== owner.id;

  const positionSkillsData = useGetPositionsSkills(projectPositions?.data, projectId);
  const positionSkillsValue = useGetSkills(unvaluedSkillsIds);

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
      projectPositions?.data.length
    ) {
      const idsSpecPositions = projectPositions.data.map(
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
    const mainTag = specs?.data
      .filter(({ id }) => id === positionId)
      .map(({ name }) => name ?? '');
    return mainTag;
  };

  const loadedAllPositions =
    loadedProjectPositions &&
    loadedSpecs &&
    loadedPositionSkillsValue &&
    !!positionSkillsValue.length;

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
        isLoaded={loadedProject}
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
              <Status mb={['3', '4']}>{project?.status}</Status>
              <Card
                title={project?.name}
                date={project?.deadline}
                description={project?.description}
                fullDescription={true}
              />
            </Stack>

            <Stack gap={0} mb={6}>
              <Heading variant="h2">В проект требуются</Heading>
              <Skeleton isLoaded={loadedAllPositions} borderRadius="2xl" fadeDuration={2}>
                <Stack>
                  {projectPositions?.data.map((_, i) => (
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
            <Skeleton isLoaded={loadedOwner} borderRadius="2xl" fadeDuration={2}>
              <Flex alignItems="flex-start">
                <Avatar src="" name={`${owner?.first_name} ${owner?.last_name}`} />
                <Stack pl={2} gap={0}>
                  <Heading variant="h3">
                    {owner?.first_name} {owner?.last_name}
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
        {layout?.footer && (
          <Portal containerRef={layout.footer}>
            <Container py={2} maxW="md">
              {!userIsOwner && (
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
            </Container>
          </Portal>
        )}
      </Skeleton>
    </Container>
  );
};
