import { Flex } from '@chakra-ui/layout';
import { Button, useDisclosure } from '@chakra-ui/react';

import { PARTICIPANT_STATUSES } from '~/entities/project';

import { Modal } from '~/shared/ui/Modal';

import { useUpdateParticipant } from './api';

interface RequestButtonsProps {
  participantId: string;
}

export const RequestButtons = ({ participantId }: RequestButtonsProps) => {
  const { mutateAsync: updateParticipant } = useUpdateParticipant();
  const {
    isOpen: submitIsOpen,
    onOpen: submitOnOpen,
    onClose: submitOnClose,
  } = useDisclosure();
  const {
    isOpen: rejectIsOpen,
    onOpen: rejectOnOpen,
    onClose: rejectOnClose,
  } = useDisclosure();

  const submitParticipant = async () => {
    await updateParticipant({
      participant_id: participantId,
      status: PARTICIPANT_STATUSES.joined,
    });
    submitOnClose();
  };

  const rejectParticipant = async () => {
    await updateParticipant({
      participant_id: participantId,
      status: PARTICIPANT_STATUSES.declined,
    });
    rejectOnClose();
  };

  return (
    <Flex gap={3}>
      <Button
        variant="ghost"
        type="button"
        bg="gray.300"
        onClick={rejectOnOpen}
        fontSize="xs"
        fontWeight="600"
        h="auto"
        py={3}
        w="full"
      >
        Отклонить
      </Button>
      <Button
        type="button"
        onClick={submitOnOpen}
        fontSize="xs"
        fontWeight="600"
        w="full"
        h="auto"
        py={3}
      >
        Принять
      </Button>
      <Modal
        isOpen={submitIsOpen}
        onClose={submitOnClose}
        submitText="Принять в команду"
        cancelText="Отмена"
        onSubmit={submitParticipant}
      >
        Принять в команду?
      </Modal>
      <Modal
        isOpen={rejectIsOpen}
        onClose={rejectOnClose}
        submitText="Отклонить заявку"
        cancelText="Отмена"
        onSubmit={rejectParticipant}
      >
        Отклонить заявку?
      </Modal>
    </Flex>
  );
};
