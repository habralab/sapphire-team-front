import {
  Container,
  Flex,
  Heading,
  Button,
  Card as ChakraCard,
  CardBody,
  Skeleton,
  Portal,
  useToast,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { useCreateParticipant } from '~/features/project';

import {
  Avatar,
  Contacts,
  PARTICIPANT_STATUSES,
  PositionInfo,
  useGetParticipants,
  useGetUserStatus,
} from '~/entities/project';
import { useGetSkillsByIds, useGetSpecs } from '~/entities/storage';

import { useApi, useAuth, useIsMobile, useLayoutRefs } from '~/shared/hooks';
import { GoBack } from '~/shared/ui/GoBack';

interface ProjectBase {
  positionId: string;
}

export const Position = ({ positionId }: ProjectBase) => {
  const layout = useLayoutRefs();
  const { userId, isAuth } = useAuth();
  const { projectsApi, userApi } = useApi();
  const isMobile = useIsMobile();
  const toast = useToast();

  const { mutateAsync: createParticipant, isLoading } = useCreateParticipant();

  const { data: position, isSuccess: loadedPosition } = useQuery({
    queryKey: ['getPosition', positionId],
    queryFn: () => projectsApi.getPosition(positionId),
    staleTime: Infinity,
  });

  const { data: allSpecs } = useGetSpecs();
  const { data: allSkills } = useGetSkillsByIds(position?.skills);

  const { data: allParticipant } = useGetParticipants({
    position_id: positionId,
  });

  const { userStatus, setStatus } = useGetUserStatus({
    allParticipant: allParticipant?.data,
    userId,
  });

  const createRequest = async () => {
    if (position) {
      try {
        const { status } = await createParticipant({ position_id: position.id });
        setStatus(status);
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: 'Ошибка подачи отклика',
            description: error.message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
        }
      }
    }
  };

  const userNotParticipant = userStatus === 'NotInTheProject';

  const userNotOwner = loadedPosition && userId !== position.project.owner_id;

  const userIsAvailableToRequest = userNotOwner && isAuth && userNotParticipant;

  const mainTags =
    allSpecs
      ?.filter(({ id }) => id === position?.specialization_id)
      .map(({ name }) => (name ? name : '')) ?? [];

  const tags =
    allSkills
      ?.filter(({ value }) => position?.skills.includes(value))
      .map(({ label }) => label) ?? [];

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
        <Flex alignItems="center" gap={2}>
          <GoBack />
          <Heading variant="h2" mb={0}>
            Проект
          </Heading>
        </Flex>
      </Flex>
      {!loadedPosition ? (
        <Skeleton borderRadius="2xl" fadeDuration={2} height="550px" />
      ) : (
        <ChakraCard
          bg="white"
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="none"
          alignContent="center"
        >
          <Avatar projectId={position.project.id} />
          <CardBody padding={isMobile ? 5 : 6}>
            <PositionInfo tags={tags} mainTags={mainTags} project={position.project} />
            <Contacts ownerId={position.project.owner_id} />
          </CardBody>
        </ChakraCard>
      )}
      {layout?.footer && (
        <Portal containerRef={layout.footer}>
          <Container py={2} maxW="md">
            {userIsAvailableToRequest && (
              <Button
                type="button"
                isLoading={isLoading}
                onClick={createRequest}
                fontSize="sm"
                fontWeight="600"
                w="full"
              >
                Откликнуться
              </Button>
            )}
            {userStatus === PARTICIPANT_STATUSES.request && (
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
            {!isAuth && (
              <Button
                type="button"
                as="a"
                href={userApi.authURL}
                fontSize="sm"
                fontWeight="600"
                w="full"
              >
                Зарегистрироваться
              </Button>
            )}
          </Container>
        </Portal>
      )}
    </Container>
  );
};
