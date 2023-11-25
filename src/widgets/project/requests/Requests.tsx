import { Container, Flex, Heading } from '@chakra-ui/layout';
import { Button, Card, Icon, IconButton, Stack, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

import { RequestButtons } from '~/features/project';

import { RequestInfo } from '~/entities/project';

import { Modal } from '~/shared/ui/Modal';
import { STag } from '~/shared/ui/STag';

interface dummyParticipant {
  name: string;
  spec: string;
  skills: string[];
}

interface RequestsProps {
  onClose: () => void;
  participants: dummyParticipant[];
}

export const Requests = ({ onClose, participants }: RequestsProps) => {
  return (
    <Container maxW="md">
      <Flex alignItems="center" justifyContent="space-between" my={4}>
        <Flex alignItems="center">
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
      <Stack gap={4}>
        {participants.map((part, i) => (
          <Card key={i} p={5} borderRadius="2xl" gap={5} boxShadow="none">
            <RequestInfo name={part.name} spec={part.spec} />
            <STag mainTags={[part.spec]} tags={part.skills} />
            <RequestButtons />
          </Card>
        ))}
      </Stack>
    </Container>
  );
};
