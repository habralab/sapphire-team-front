import {
  Container,
  Flex,
  Heading,
  Button,
  Card as ChakraCard,
  CardBody,
  Image,
  Skeleton,
  Portal,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import {
  Avatar,
  Contacts,
  ProjectInfo,
  useGetPositions,
  useGetProject,
} from '~/entities/project';
import { useGetSkills, useGetSpecs } from '~/entities/storage';

import { useApi, useAuth, useIsMobile, useLayoutRefs } from '~/shared/hooks';
import { GoBack } from '~/shared/ui/GoBack';

interface ProjectBase {
  projectId: string;
}

export const ProjectBase = ({ projectId }: ProjectBase) => {
  const layout = useLayoutRefs();
  const { userId } = useAuth();
  const isMobile = useIsMobile();
  const [specsIds, setSpecsIds] = useState<string[]>([]);
  const [unvaluedSkillsIds, setUnvaluedSkillsIds] = useState<string[][]>([]);
  const [readySkillsIds, setReadySkillsIds] = useState<string[][]>([]);

  const { data: specs, isSuccess: loadedSpecs } = useGetSpecs();
  const { data: project, isSuccess: loadedProject } = useGetProject(projectId);
  const { data: projectPositions, isSuccess: loadedProjectPositions } =
    useGetPositions(projectId);

  const userIsOwner = loadedProject && userId !== project.owner_id;

  const positionSkillsValue = useGetSkills(unvaluedSkillsIds);
  const loadedPositionSkillsValue = positionSkillsValue.every((query) => query.isSuccess);

  useEffect(() => {
    if (projectPositions?.data.length) {
      const idsSpecPositions = projectPositions.data.map(
        ({ specialization_id }) => specialization_id,
      );

      const idsSkillsPositions = projectPositions.data.map(({ skills }) => skills);
      if (idsSkillsPositions[0].length > 0) setUnvaluedSkillsIds(idsSkillsPositions);
      setSpecsIds(idsSpecPositions);
    }
  }, [projectPositions]);

  useEffect(() => {
    if (loadedPositionSkillsValue && positionSkillsValue.length) {
      const idsReadySkillsPositions = positionSkillsValue
        .map(({ data }) => (data?.length ? data : []))
        .map((data) => data.map(({ label }) => (label ? label : '')));
      setReadySkillsIds(idsReadySkillsPositions);
    }
  }, [loadedPositionSkillsValue, positionSkillsValue.length]);

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
      {!loadedProject ? (
        <Skeleton
          isLoaded={loadedProject}
          borderRadius="2xl"
          fadeDuration={2}
          height="550px"
        />
      ) : (
        <ChakraCard
          bg="white"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="none"
          alignContent="center"
        >
          <Avatar projectId={projectId} />
          <CardBody padding={isMobile ? 5 : 6}>
            <ProjectInfo
              allSpecs={specs?.data}
              specs={specsIds}
              skills={readySkillsIds}
              project={project}
              positions={projectPositions?.data}
              ioadedPositions={loadedAllPositions}
            />
            <Contacts ownerId={project.owner_id} />
          </CardBody>
        </ChakraCard>
      )}
      {layout?.footer && (
        <Portal containerRef={layout.footer}>
          <Container py={2} maxW="md">
            {userIsOwner && (
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
    </Container>
  );
};
