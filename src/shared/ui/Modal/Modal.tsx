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
  submitText: string;
  cancelText: string;
  children: string;
  isLoading?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  children,
  submitText,
  cancelText,
  isLoading,
}: ModalCustomProps) => {
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
            isLoading={isLoading}
            onClick={onSubmit}
            fontSize="sm"
            fontWeight="600"
            w="full"
          >
            {submitText}
          </Button>
          <Button
            variant="ghost"
            isLoading={isLoading}
            type="button"
            bg="gray.300"
            onClick={onClose}
            fontSize="sm"
            fontWeight="600"
            w="full"
          >
            {cancelText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
};
