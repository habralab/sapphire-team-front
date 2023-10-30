import { Flex, SimpleGrid, Container, Button, Portal } from '@chakra-ui/react';

import { ProjectCard } from '~/widgets/project-card';

import { SearchProject, Filter } from '~/features/project';
import { Notification, Settings } from '~/features/user';

import { Avatar } from '~/entities/user';

import { useApi, useLayoutRefs } from '~/shared/hooks';
import { data } from '~/shared/lib/data';
import { STag } from '~/shared/ui/STag';

export const SearchPage = () => {
  const { userApi } = useApi();
  const layout = useLayoutRefs();
  return (
    <>
      <Container maxW="md" mb={4}>
        <Flex alignContent="center" flexDirection="column" justifyContent="space-between">
          <Flex justifyContent="space-between" alignItems="center" my={4} h={42}>
            <Avatar firstName="Татьяна" lastName="Антонова" />
            <Flex gap={4} alignItems="baseline">
              <Notification />
              <Settings />
            </Flex>
          </Flex>
          <Flex gap="1" mb={4}>
            <SearchProject />
            <Filter />
          </Flex>
          <SimpleGrid gap={4}>
            {data.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  status={project.status}
                  title={project.title}
                  date={project.date}
                  description={project.description}
                >
                  <STag mainTags={project.mainTags} tags={project.tags} />
                </ProjectCard>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Container>
      {layout?.footer && (
        <Portal containerRef={layout.footer}>
          <Container py={4} maxW="md">
            <Button w="full" onClick={() => userApi.auth()}>
              Авторизоваться
            </Button>
          </Container>
        </Portal>
      )}
    </>
  );
};
