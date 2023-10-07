import { Badge } from '@chakra-ui/react';

interface StatusProps {
  status: string;
}

export const Status = ({ status }: StatusProps) => {
  return (
    <Badge
      colorScheme={status === 'Проект завершён' ? 'grayBage' : 'purpleBage'}
      variant="solid"
      fontSize="es"
      textTransform="none"
      fontWeight="600"
      lineHeight="0.4375rem"
      color="white"
      width="fit-content"
      p="0.375rem 0.625rem"
      borderRadius="1.25rem"
    >
      {status}
    </Badge>
  );
};
