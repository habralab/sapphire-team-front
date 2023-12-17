import { Heading, Stack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

import { STag } from '~/shared/ui/STag';
import { Status } from '~/shared/ui/Status';

import { Card } from '../card';
import type { PROJECT_STATUSES } from '../Project.constants';
import { PROJECT_STATUSES_MESSAGES } from '../Project.constants';

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
  mainTags: string[];
  tags: string[];
  project: Project;
}

export const PositionInfo = ({ mainTags, tags, project }: ProjectInfoProps) => {
  const isCorrectTags = mainTags.length && tags.length;
  return (
    <>
      <Stack gap={0} mb={3} alignItems="start">
        <Status mb={3}>{PROJECT_STATUSES_MESSAGES[project.status]}</Status>
        <Card
          title={project.name}
          date={project.startline}
          description={project.description}
          fullDescription={true}
        />
      </Stack>

      {isCorrectTags ? (
        <Stack gap={0} mb={6}>
          <Heading variant="h2">В проект требуется</Heading>
          <STag mainTags={mainTags} tags={tags} />
        </Stack>
      ) : (
        <Heading variant="h2" mb={6}>
          Невозможно отобразить навыки
        </Heading>
      )}
    </>
  );
};
