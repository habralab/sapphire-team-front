import {
  Container,
  Flex,
  Heading,
  Button,
  Card as ChakraCard,
  CardBody,
  Skeleton,
  Portal,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Text,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Requests } from '~/widgets/project';

import {
  Avatar,
  Contacts,
  ProjectInfo,
  useGetParticipants,
  useGetPositions,
  useGetProject,
} from '~/entities/project';
import { useGetSkills, useGetSpecs } from '~/entities/storage';

import { useAuth, useIsMobile, useLayoutRefs } from '~/shared/hooks';
import { GoBack } from '~/shared/ui/GoBack';

interface ProjectBase {
  projectId: string;
}

export const ProjectBase = ({ projectId }: ProjectBase) => {
  const layout = useLayoutRefs();
  const { userId } = useAuth();
  const isMobile = useIsMobile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [specsIds, setSpecsIds] = useState<string[]>([]);
  const [unvaluedSkillsIds, setUnvaluedSkillsIds] = useState<string[][]>([]);
  const [readySkillsIds, setReadySkillsIds] = useState<string[][]>([]);
  const [userStatus, setUserStatus] = useState('');

  const { data: allParticipant } = useGetParticipants({
    project_id: projectId,
  });

  useEffect(() => {
    if (allParticipant) {
      const userIsParticipant = allParticipant.data.filter(
        ({ user_id }) => user_id === userId,
      );
      if (userIsParticipant.length) {
        setUserStatus(userIsParticipant[0].status);
      }
    }
  }, [allParticipant]);

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

  const dummyPartic = [
    { name: 'Тестовый тест', spec: 'Фронтенд', skills: ['CSS', 'React'] },
    { name: 'Тестовый тест2', spec: 'Бекенд', skills: ['Python', 'PostgreSQL'] },
  ];

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
              allSpecs={specs}
              specs={specsIds}
              skills={readySkillsIds}
              project={project}
              positions={projectPositions}
              ioadedPositions={loadedAllPositions}
            />
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
                  <Icon as={FiChevronRight} fontSize="2xl" />
                </Flex>
              }
            />
            <Modal onClose={onClose} size="full" isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent bg="bg" display="flex" alignItems="center">
                <Requests onClose={onClose} participants={dummyPartic} />
              </ModalContent>
            </Modal>
            {userIsOwner && <Contacts ownerId={project.owner_id} />}
          </CardBody>
        </ChakraCard>
      )}
      {layout?.footer && (
        <Portal containerRef={layout.footer}>
          <Container py={2} maxW="md">
            {userStatus === 'request' && (
              <Button
                bg="gray.300"
                color="gray.800"
                _hover={{ bg: 'gray.300' }}
                fontSize="sm"
                fontWeight="600"
                w="full"
              >
                Отклик отправлен
              </Button>
            )}
          </Container>
        </Portal>
      )}
    </Container>
  );
};
