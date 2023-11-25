import {
  Container,
  Flex,
  Heading,
  Button,
  Card as ChakraCard,
  CardBody,
  Skeleton,
  Portal,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { Avatar, Contacts, PositionInfo } from '~/entities/project';
import { useGetAllSkills, useGetSpecs } from '~/entities/storage';

import { useApi, useAuth, useIsMobile, useLayoutRefs } from '~/shared/hooks';
import { GoBack } from '~/shared/ui/GoBack';

import { useCreateParticipant } from './api';

interface ProjectBase {
  positionId: string;
}

export const Position = ({ positionId }: ProjectBase) => {
  const layout = useLayoutRefs();
  const { userId, isAuth } = useAuth();
  const { projectsApi, userApi } = useApi();
  const isMobile = useIsMobile();
  const [userStatus, setUserStatus] = useState('');

  const { mutateAsync: createParticipant, isLoading } = useCreateParticipant();

  const { data: position, isSuccess: loadedPosition } = useQuery({
    queryKey: ['getPosition', positionId],
    queryFn: () => projectsApi.getPosition(positionId),
    staleTime: Infinity,
  });

  const { data: allSpecs, isSuccess: loadedSpecs } = useGetSpecs();
  const { data: allSkills, isSuccess: loadedSkills } = useGetAllSkills();

  const isLoaded = loadedSkills && loadedSpecs;

  const mainTags =
    allSpecs
      ?.filter(({ id }) => id === position?.specialization_id)
      .map(({ name }) => (name ? name : '')) ?? [];

  const tags =
    allSkills
      ?.filter(({ value }) => position?.skills.includes(value))
      .map(({ label }) => label) ?? [];

  const userIsOwner = isAuth && loadedPosition && userId !== position.project.owner_id;

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
      {!loadedPosition ? (
        <Skeleton
          isLoaded={loadedPosition}
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
          <Avatar projectId={position.project.id} />
          <CardBody padding={isMobile ? 5 : 6}>
            {isLoaded && (
              <PositionInfo tags={tags} mainTags={mainTags} project={position.project} />
            )}
            <Contacts ownerId={position.project.owner_id} />
          </CardBody>
        </ChakraCard>
      )}
      {layout?.footer && (
        <Portal containerRef={layout.footer}>
          <Container py={2} maxW="md">
            {userNotOwner && (
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
