import { Heading, Stack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';

import { GetSpecsData } from '~/shared/api';
import { GetProjectPositionsData } from '~/shared/api/types';
import { STag } from '~/shared/ui/STag';
import { Status } from '~/shared/ui/Status';

import { Card } from '../card';

interface Project {
  deadline: string;
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
  allSpecs?: GetSpecsData;
  specs: string[];
  skills: string[][];
  project: Project;
  positions?: GetProjectPositionsData;
  ioadedPositions: boolean;
}

export const ProjectInfo = ({
  allSpecs,
  specs,
  skills,
  project,
  positions,
  ioadedPositions,
}: ProjectInfoProps) => {
  const filterMainTag = (positionId?: string) => {
    const mainTag = allSpecs
      ?.filter(({ id }) => id === positionId)
      .map(({ name }) => name ?? '');
    return mainTag;
  };
  return (
    <>
      <Stack gap={0} mb={3} alignItems="start">
        <Status mb={3}>{project.status}</Status>
        <Card
          title={project.name}
          date={project.deadline}
          description={project.description}
          fullDescription={true}
        />
      </Stack>

      <Stack gap={0} mb={6}>
        <Heading variant="h2">В проект требуются</Heading>
        <Skeleton isLoaded={ioadedPositions} borderRadius="2xl" fadeDuration={2}>
          <Stack>
            {positions?.map((_, i) => (
              <STag key={i} mainTags={filterMainTag(specs[i])} tags={skills[i]} />
            ))}
          </Stack>
        </Skeleton>
      </Stack>
    </>
  );
};
