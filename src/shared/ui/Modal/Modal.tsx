import {
  Button,
  Heading,
  Modal as ChakraModal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';

interface ModalCustomProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children: string;
}

export const Modal = ({ isOpen, onClose, onSubmit, children }: ModalCustomProps) => {
  return (
    <ChakraModal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent py={3} mx={5} borderRadius="2xl">
        <ModalBody>
          <Heading variant="h2" textAlign="center" mb={0}>
            {children}
          </Heading>
        </ModalBody>
        <ModalFooter flexDirection="column" gap={2}>
          <Button
            type="button"
            onClick={onSubmit}
            fontSize="sm"
            fontWeight="600"
            w="full"
          >
            Удалить
          </Button>
          <Button
            variant="ghost"
            type="button"
            bg="gray.300"
            onClick={onClose}
            fontSize="sm"
            fontWeight="600"
            w="full"
          >
            Отмена
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
