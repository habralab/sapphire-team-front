import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, Button, Heading, Container, IconButton, Icon } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const AddProjectPage = () => {
  const navigate = useNavigate();
  return (
    <Container maxW="md" mb={4}>
      <Flex alignItems="center" justifyContent="space-between" my={4}>
        <Flex alignItems="center">
          <IconButton
            variant="ghost"
            aria-label="projects"
            onClick={() => {
              navigate(-1);
            }}
            gap={2}
            flexShrink="0"
            padding={['0', '0', '4']}
            icon={<Icon as={ChevronLeftIcon} fontSize="2xl" />}
          />
          <Heading variant="h2" mb={0}>
            Создать проект
          </Heading>
        </Flex>
        <Button variant="flat" fontSize="xs" fontWeight="500" colorScheme="purple">
          Сохранить и выйти
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
