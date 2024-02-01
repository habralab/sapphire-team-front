import { Text } from '@chakra-ui/react';

interface NotAuthTabType {
  isDeleted?: boolean;
}

export const NotAuthTab = ({ isDeleted }: NotAuthTabType) => {
  return (
    <Text textAlign="center" color="gray.700">
      {isDeleted
        ? 'Страница удалена'
        : 'Для создания личного профиля необходимо зарегистрироваться'}
    </Text>
  );
};
