import { Box, Avatar, Text } from '@chakra-ui/react';

export const ProjectInfo = () => {
  return (
    <Box my="20" display="flex" alignItems="center" gap="5">
      <Avatar bg="red.500" size="xl" />
      <Box>
        <Text fontSize="xl" as="b">
          Проект ИИ по пробкам
        </Text>
        <Text fontSize="lg">Идет набор в команду</Text>
        <Text>10.09.2023-15.12.2023</Text>
      </Box>
    </Box>
  );
};
