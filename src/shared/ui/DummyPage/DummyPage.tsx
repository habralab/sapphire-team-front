import { Flex, Image, Text, Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { PATHS } from '~/shared/lib/router';

interface DummyPageProps {
  heading: string;
  image: string;
  children: string;
}

export function DummyPage({ image, children, heading }: DummyPageProps) {
  const navigate = useNavigate();

  return (
    <Flex
      bg="white"
      borderRadius="2xl"
      p={5}
      direction="column"
      alignItems="center"
      gap={5}
    >
      <Image src={image} />
      <Text fontSize="md" fontWeight="medium" mt={1}>
        {heading}
      </Text>
      <Text color="gray.700" textAlign="center">
        {children}
      </Text>
      <Stack spacing={0} gap={2} w="full">
        <Button
          type="button"
          onClick={() => {
            navigate(PATHS.addProject);
          }}
          fontSize="sm"
          fontWeight="600"
        >
          Создать свой проект
        </Button>
        <Button
          variant="light"
          type="button"
          onClick={() => {
            navigate(PATHS.search);
          }}
          fontSize="sm"
          fontWeight="600"
        >
          Найти проект
        </Button>
      </Stack>
    </Flex>
  );
}
