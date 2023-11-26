import { Flex } from '@chakra-ui/layout';
import { Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import { Modal } from '~/shared/ui/Modal';

export const RequestButtons = () => {
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

  const submitParticipant = () => {
    console.log('Принят');
  };
  const rejectParticipant = () => {
    console.log('Отклонен');
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
        onSubmit={() => {
          submitParticipant();
          submitOnClose();
        }}
      >
        Принять в команду?
      </Modal>
      <Modal
        isOpen={rejectIsOpen}
        onClose={rejectOnClose}
        submitText="Отклонить заявку"
        onSubmit={() => {
          rejectParticipant();
          rejectOnClose();
        }}
      >
        Отклонить заявку?
      </Modal>
    </Flex>
  );
};
