import { Box, Text, Flex, Tag } from '@chakra-ui/react';

export function AboutMe() {
  return (
    <Box>
      <Text fontWeight="semibold">Обо мне</Text>
      <Text py={2} fontSize="xs">
        Привет! Меня зовут Татьяна, и я начинающий UX/UI дизайнер, готовый погрузиться в
        мир творчества и пользовательских интерфейсов.
        <br />
        Моя страсть к дизайну началась давно, и я горжусь тем, что обладаю креативным
        мышлением и аналитическими способностями.
      </Text>
      <Text fontWeight="semibold">Профессия</Text>
      <Flex wrap="wrap" gap={2} py={2} fontWeight="semibold" color="gray.800">
        <Tag py={1} px={4}>
          Дизайнер
        </Tag>
        <Tag py={1} px={4}>
          UX/UI дизайнер
        </Tag>
        <Tag py={1} px={4}>
          Product дизайнер
        </Tag>
      </Flex>
      <Text fontWeight="semibold" py={2}>
        Навыки
      </Text>
      <Flex wrap="wrap" gap={2} fontWeight="semibold" color="gray.800">
        <Tag py={1} px={4}>
          UX
        </Tag>
        <Tag py={1} px={4}>
          UI
        </Tag>
      </Flex>
    </Box>
  );
}
