import {
  Container,
  Flex,
  Heading,
  Button,
  Card as ChakraCard,
  CardBody,
  Skeleton,
  Portal,
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Text,
  IconButton,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link, generatePath } from 'react-router-dom';

import { RequestParticipant, Requests } from '~/widgets/project';

import { useUpdateParticipant, useUpdateProject } from '~/features/project';

import {
  Avatar,
  Contacts,
  PARTICIPANT_STATUSES,
  PROJECT_STATUSES,
  ProjectInfo,
  useGetParticipants,
  useGetPositions,
  useGetProject,
  useGetUserStatus,
} from '~/entities/project';
import { useGetSkills, useGetSpecs } from '~/entities/storage';

import { useAuth, useIsMobile, useLayoutRefs } from '~/shared/hooks';
import { PATHS } from '~/shared/lib/router';
import { GoBack } from '~/shared/ui/GoBack';
import { Modal } from '~/shared/ui/Modal';

interface ProjectBase {
  projectId: string;
}

export const ProjectBase = ({ projectId }: ProjectBase) => {
  const layout = useLayoutRefs();
  const { userId } = useAuth();
  const isMobile = useIsMobile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: leftIsOpen,
    onOpen: leftOnOpen,
    onClose: leftOnClose,
  } = useDisclosure();
  const {
    isOpen: closeProjectIsOpen,
    onOpen: closeProjectOnOpen,
    onClose: closeProjectOnClose,
  } = useDisclosure();
  const [specsIds, setSpecsIds] = useState<string[]>([]);
  const [unvaluedSkillsIds, setUnvaluedSkillsIds] = useState<string[][]>([]);
  const [readySkillsIds, setReadySkillsIds] = useState<string[][]>([]);
  const { mutateAsync: updateParticipant } = useUpdateParticipant();
  const { mutateAsync: updateProject, isLoading: updateProjectLoading } =
    useUpdateProject();

  // TODO: infinityScroll
  const { data: allParticipant } = useGetParticipants({
    project_id: projectId,
  });

  const { userStatus } = useGetUserStatus({
    allParticipant: allParticipant?.data,
    userId,
  });

  const { data: specs, isSuccess: loadedSpecs } = useGetSpecs();
  const { data: project, isSuccess: loadedProject } = useGetProject(projectId);
  const { data: projectPositions, isSuccess: loadedProjectPositions } =
    useGetPositions(projectId);

  const positionSkillsValue = useGetSkills(unvaluedSkillsIds);
  const loadedPositionSkillsValue = positionSkillsValue.every((query) => query.isSuccess);

  useEffect(() => {
    if (projectPositions?.length) {
      const idsSpecPositions = projectPositions.map(
        ({ specialization_id }) => specialization_id,
      );

      const idsSkillsPositions = projectPositions.map(({ skills }) => skills);
      if (idsSkillsPositions[0] && idsSkillsPositions[0].length > 0)
        setUnvaluedSkillsIds(idsSkillsPositions);
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

  const userNotOwner = loadedProject && userId !== project.owner_id;

  const projectNotClosed = project && project.status !== PROJECT_STATUSES.finished;

  const loadedAllPositions =
    loadedProjectPositions &&
    loadedSpecs &&
    loadedPositionSkillsValue &&
    !!positionSkillsValue.length;

  const leaveProject = async () => {
    const participantId = allParticipant?.data.find(({ user_id }) => userId === user_id);
    if (participantId) {
      await updateParticipant({
        participant_id: participantId.id,
        status: PARTICIPANT_STATUSES.left,
      });
      leftOnClose();
    }
  };

  const cancelProject = async () => {
    await updateProject({ project_id: projectId, status: PROJECT_STATUSES.finished });
    closeProjectOnClose();
  };

  return (
    <Container maxW="md" display="flex" flexDirection="column" mb={4}>
      <Flex bg="bg" top={0} alignItems="center" justifyContent="space-between" py={4}>
        <Flex alignItems="center" gap={2}>
          <GoBack />
          <Heading variant="h2" mb={0}>
            Проект
          </Heading>
        </Flex>
      </Flex>
      {!loadedProject ? (
        <Skeleton borderRadius="2xl" fadeDuration={2} height="550px" />
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
            {allParticipant && (
              <ProjectInfo
                allSpecs={specs}
                specs={specsIds}
                skills={readySkillsIds}
                project={project}
                positions={projectPositions}
                ioadedPositions={loadedAllPositions}
                userIsOwner={!userNotOwner}
                userId={userId}
                participants={allParticipant.data}
              />
            )}
            {!userNotOwner && projectNotClosed && (
              <IconButton
                size="md"
                variant="unstyled"
                onClick={onOpen}
                aria-label="Заявки"
                flexShrink="0"
                gap={2}
                w="100%"
                fontWeight="500"
                icon={
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text>Заявки</Text>
                    <Text ml={1} color="gray.600" fontSize="sm">
                      {
                        allParticipant?.data.filter(
                          ({ status }) => status === PARTICIPANT_STATUSES.request,
                        ).length
                      }
                    </Text>
                    <Icon ml="auto" as={FiChevronRight} fontSize="2xl" />
                  </Flex>
                }
              />
            )}
            <ChakraModal onClose={onClose} size="full" isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent bg="bg" display="flex" alignItems="center">
                {allParticipant && projectPositions && (
                  <Requests
                    allSpecs={specs}
                    onClose={onClose}
                    participants={allParticipant.data}
                    positions={projectPositions}
                    specs={specsIds}
                    skills={positionSkillsValue.flatMap(({ data }) => (data ? data : []))}
                  />
                )}
              </ModalContent>
            </ChakraModal>

            <Stack mt={3}>
              <Contacts ownerId={project.owner_id} />
              <Stack>
                {allParticipant?.data
                  .filter(({ status }) => status === PARTICIPANT_STATUSES.joined)
                  .map((participant) => (
                    <Link
                      key={participant.user_id}
                      to={generatePath(PATHS.profile, { id: participant.user_id })}
                    >
                      <RequestParticipant userId={participant.user_id} allSpecs={specs} />
                    </Link>
                  ))}
              </Stack>
            </Stack>
          </CardBody>
        </ChakraCard>
      )}
      {layout?.footer && projectNotClosed && (
        <Portal containerRef={layout.footer}>
          <Container py={2} maxW="md">
            {!userNotOwner && (
              <Button
                onClick={closeProjectOnOpen}
                bg="gray.300"
                color="gray.900"
                _hover={{ bg: 'gray.300' }}
                fontSize="sm"
                fontWeight="600"
                w="full"
              >
                Завершить проект
              </Button>
            )}
            <Modal
              isOpen={closeProjectIsOpen}
              onClose={closeProjectOnClose}
              submitText="Завершить проект"
              cancelText="Отмена"
              onSubmit={cancelProject}
              isLoading={updateProjectLoading}
            >
              Вы уверены, что хотите завершить проект?
            </Modal>
            {userStatus === PARTICIPANT_STATUSES.request && (
              <Button
                isDisabled
                bg="gray.400"
                color="gray.900"
                _hover={{ bg: 'gray.300' }}
                fontSize="sm"
                fontWeight="600"
                w="full"
              >
                Отклик отправлен
              </Button>
            )}
            {userStatus === PARTICIPANT_STATUSES.joined && (
              <Button onClick={leftOnOpen} fontSize="sm" fontWeight="600" w="full">
                Покинуть проект
              </Button>
            )}
            <Modal
              isOpen={leftIsOpen}
              onClose={leftOnClose}
              submitText="Покинуть проект"
              cancelText="Отмена"
              onSubmit={leaveProject}
            >
              Вы уверены, что хотите покинуть проект?
            </Modal>
            {userStatus === PARTICIPANT_STATUSES.declined && (
              <Button
                isDisabled
                bg="gray.400"
                color="gray.900"
                fontSize="sm"
                fontWeight="600"
                w="full"
              >
                Ваш отклик отклонен
              </Button>
            )}
            {userStatus === PARTICIPANT_STATUSES.left && (
              <Button
                isDisabled
                bg="gray.400"
                color="gray.900"
                fontSize="sm"
                fontWeight="600"
                w="full"
              >
                Вы покинули проект
              </Button>
            )}
          </Container>
        </Portal>
      )}
    </Container>
  );
};
