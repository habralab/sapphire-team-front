import { Flex, SimpleGrid, Heading, Container } from '@chakra-ui/react';

export const AddProjectPage = () => {
  return (
    <Container maxW="md" mb={4}>
      <Flex alignItems="center" justifyContent="space-between" my={4}>
        <Flex alignItems="baseline">
          <CloseButton onClick={onClose} mr={2} />
          <Heading variant="h2" mb={0}>
            Фильтры
          </Heading>
        </Flex>
        <Button variant="flat" fontSize="sm" fontWeight="500" colorScheme="purple">
          Сбросить
        </Button>
      </Flex>
      <Container maxW="md" py={6} bg="bg" position="sticky" bottom="0" mt="auto">
        <Button fontSize="sm" fontWeight="600" w="full">
          Продолжить
        </Button>
      </Container>
    </Container>
  );
};
