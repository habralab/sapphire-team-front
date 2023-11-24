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

import { Avatar, Contacts, PositionInfo } from '~/entities/project';

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

  const { data: position, isSuccess: loadedPosition } = useQuery({
    queryKey: ['getPosition', positionId],
    queryFn: () => projectsApi.getPosition(positionId),
    staleTime: Infinity,
  });

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
            <PositionInfo
              spec={position.specialization_id}
              skills={position.skills}
              project={position.project}
            />
            <Contacts ownerId={position.project.owner_id} />
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
