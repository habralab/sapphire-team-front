import { Box } from '@chakra-ui/react';

import { CandidatesList } from '~/widgets/candidates-list';

import { ProjectInfo } from '~/entities/project-info';

export const ParticipantPage = () => {
  return (
    <Box maxW="6xl" mx="auto">
      <ProjectInfo />
      <CandidatesList />
    </Box>
  );
};
