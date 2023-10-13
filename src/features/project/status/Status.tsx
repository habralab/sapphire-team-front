import { Badge, BadgeProps, Text } from '@chakra-ui/react';

type StatusProps = {
  children: string;
} & BadgeProps;

export const Status = (props: StatusProps) => {
  const { children, ...others } = props;
  return (
    <Badge
      bg={children === 'Проект завершён' ? 'gray.500' : 'purple.600'}
      variant="solid"
      textTransform="none"
      px={2.5}
      py={1}
      borderRadius="full"
      {...others}
    >
      <Text color="white" fontWeight="medium">
        {children}
      </Text>
    </Badge>
  );
};
