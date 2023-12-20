import { Heading, Stack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';

import type {
  GetAllParticipantsDataResponse,
  GetProjectPositionsDataResponse,
  GetSpecsData,
} from '~/shared/api/model';
import { STag } from '~/shared/ui/STag';
import { Status } from '~/shared/ui/Status';

import { Card } from '../card';
import { PROJECT_STATUSES, PROJECT_STATUSES_MESSAGES } from '../Project.constants';

interface Project {
  deadline: string | null;
  status: keyof typeof PROJECT_STATUSES;
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
  positions?: GetProjectPositionsDataResponse;
  ioadedPositions: boolean;
  userIsOwner: boolean;
  userId?: string;
  participants: GetAllParticipantsDataResponse;
}

export const ProjectInfo = ({
  allSpecs,
  specs,
  skills,
  project,
  positions,
  ioadedPositions,
  userId,
  userIsOwner,
  participants,
}: ProjectInfoProps) => {
  const participantIds = participants
    .filter(({ user_id }) => user_id === userId)
    .map(({ position_id }) => position_id);

  const filterMainTag = (positionId?: string) => {
    const mainTag = allSpecs
      ?.filter(({ id }) => id === positionId)
      .map(({ name }) => name ?? '');
    return mainTag;
  };

  const filteredPositions = userIsOwner
    ? positions
    : positions?.filter(({ id }) => participantIds.includes(id));

  return (
    <>
      <Stack gap={0} mb={3} alignItems="start">
        <Card
          title={project.name}
          date={project.startline}
          description={project.description}
          fullDescription={true}
          status={project.status}
        />
      </Stack>
      {project.status !== PROJECT_STATUSES.finished && (
        <Stack gap={0} mb={6}>
          <Heading variant="h2">
            {userIsOwner ? 'В проект требуются' : 'Мои отклики'}
          </Heading>
          <Skeleton isLoaded={ioadedPositions} borderRadius="2xl" fadeDuration={2}>
            <Stack>
              {filteredPositions?.map((position, i) => (
                <STag
                  key={position.id}
                  mainTags={filterMainTag(specs[i])}
                  tags={skills[i]}
                  accordion={true}
                />
              ))}
            </Stack>
          </Skeleton>
        </Stack>
      )}
    </>
  );
};
