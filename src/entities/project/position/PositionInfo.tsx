import { Heading, Stack } from '@chakra-ui/layout';

import { STag } from '~/shared/ui/STag';

import { Card } from '../card';
import type { PROJECT_STATUSES } from '../Project.constants';

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
        <Card
          title={project.name}
          date={project.startline}
          description={project.description}
          fullDescription={true}
          status={project.status}
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
