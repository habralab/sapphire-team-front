import { Flex, VStack, Icon, Text } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';

export function Reviews() {
  return (
    <VStack align="stretch" spacing={0} p={4} mb={4} borderRadius="2xl" bg="white">
      <Flex align="center" justifyContent="space-between">
        <Text fontSize="xs" color="gray.600">
          3 сентября 2022
        </Text>
        <Flex align="center" gap={1}>
          <Icon as={AiFillStar} color="yellow.400" w="16px" h="16px" />
          <Text fontSize="xs" fontWeight="medium">
            5
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" py={3} gap={1}>
        <Text fontWeight="medium" lineHeight="120%">
          Михаил Шафутинский
        </Text>
        <Text variant="es" color="gray.600">
          Участник проекта
        </Text>
        <Flex align="center" gap={1}>
          <Text lineHeight="120%" fontWeight="medium" color="purple.600">
            Сервис онлайн-образования
          </Text>
          <Icon as={FiArrowUpRight} w="16px" h="16px" color="purple.600" />
        </Flex>
      </Flex>
      <Text fontSize="xs">
        Все прошло отлично. Спасибо Денису за оперативность. Организация на высшем уровне.
        Показал, рассказал все по уму.
      </Text>
    </VStack>
  );
}
