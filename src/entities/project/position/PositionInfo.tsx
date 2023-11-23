import { Heading, Stack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { useApi } from '~/shared/hooks';
import { STag } from '~/shared/ui/STag';
import { Status } from '~/shared/ui/status';

import { Card } from '../card';

interface Project {
  deadline: string | null;
  status: string;
  id: string;
  name: string;
  description: string | null;
  owner_id: string;
  startline: string;
  created_at: string;
  updated_at: string;
}

interface ProjectInfoProps {
  spec: string;
  skills: string[];
  project: Project;
}

export const PositionInfo = ({ spec, skills, project }: ProjectInfoProps) => {
  const { storageApi } = useApi();
  const { data: allSkills, isSuccess: loadedSkills } = useQuery({
    queryKey: ['skills'],
    queryFn: () => storageApi.getSkills(),
    staleTime: Infinity,
  });

  const { data: allSpecs, isSuccess: loadedSpecs } = useQuery({
    queryKey: ['specs'],
    queryFn: () => storageApi.getSpecs(),
  });

  return (
    <>
      <Stack gap={0} mb={3} alignItems="start">
        <Status mb={3}>{project.status}</Status>
        <Card
          title={project.name}
          date={project.startline}
          description={project.description}
          fullDescription={true}
        />
      </Stack>

      <Stack gap={0} mb={6}>
        <Heading variant="h2">В проект требуется</Heading>
        <Skeleton
          isLoaded={loadedSkills && loadedSpecs}
          borderRadius="2xl"
          fadeDuration={2}
        >
          <STag
            mainTags={allSpecs?.data
              .filter(({ id }) => id === spec)
              .map(({ name }) => (name ? name : ''))}
            tags={allSkills
              ?.filter(({ value }) => skills.includes(value))
              .map(({ label }) => label)}
          />
        </Skeleton>
      </Stack>
    </>
  );
};
