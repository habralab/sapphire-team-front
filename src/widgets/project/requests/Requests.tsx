import { Container, Flex, Heading } from '@chakra-ui/layout';
import { Card, Icon, IconButton, Stack } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';

import { RequestButtons } from '~/features/project';

import { DummyPosition } from '~/entities/dummy';
import { PARTICIPANT_STATUSES } from '~/entities/project';

import { GetSpecsData } from '~/shared/api';
import {
  GetAllParticipantsDataResponse,
  GetProjectPositionsDataResponse,
} from '~/shared/api/model';
import { STag } from '~/shared/ui/STag';

import { RequestParticipant } from './RequestParticipant';

interface RequestsProps {
  allSpecs?: GetSpecsData;
  onClose: () => void;
  participants: GetAllParticipantsDataResponse;
  positions: GetProjectPositionsDataResponse;
  specs: string[];
  skills: {
    value: string;
    label: string;
  }[];
}

export const Requests = ({
  onClose,
  participants,
  positions,
  skills,
  allSpecs,
}: RequestsProps) => {
  const participantSpecs = (position_id: string) =>
    positions
      .filter(({ id }) => position_id === id)
      .flatMap(({ specialization_id }) => specialization_id);
  const participantSkills = (position_id: string) =>
    positions.filter(({ id }) => position_id === id).flatMap(({ skills }) => skills);

  const filterMainTag = (positionId?: string) => {
    const mainTag = allSpecs
      ?.filter(({ id }) => id === positionId)
      .map(({ name }) => name ?? '');
    return mainTag;
  };

  const filterTags = (positionId: string) => {
    const currentSkills = participantSkills(positionId);
    const tags = skills
      .filter(({ value }) => currentSkills.includes(value))
      .map(({ label }) => label);
    return tags;
  };
  return (
    <Container maxW="md" pb={3}>
      <Flex alignItems="center" justifyContent="space-between" my={3}>
        <Flex alignItems="center" gap={2}>
          <IconButton
            aria-label="back"
            icon={<Icon as={FiChevronLeft} fontSize="2xl" />}
            variant="flat"
            onClick={onClose}
            minW={6}
            h={6}
          />
          <Heading variant="h2" mb={0}>
            Заявки
          </Heading>
        </Flex>
      </Flex>
      {participants.filter(({ status }) => status === PARTICIPANT_STATUSES.request)
        .length ? (
        <Stack gap={4}>
          {participants
            .filter(({ status }) => status === PARTICIPANT_STATUSES.request)
            .map((participant) => (
              <Card
                key={participant.id}
                p={5}
                borderRadius="2xl"
                gap={5}
                boxShadow="none"
              >
                <RequestParticipant userId={participant.user_id} allSpecs={allSpecs} />
                <STag
                  mainTags={filterMainTag(...participantSpecs(participant.position_id))}
                  tags={filterTags(participant.position_id)}
                />
                <RequestButtons participantId={participant.id} />
              </Card>
            ))}
        </Stack>
      ) : (
        <DummyPosition />
      )}
    </Container>
  );
};
