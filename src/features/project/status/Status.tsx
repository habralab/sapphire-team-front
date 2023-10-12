import { Badge, BadgeProps } from '@chakra-ui/react';

import { SText } from '~/shared/ui';

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
      <SText color="white" fontWeight="medium">
        {children}
      </SText>
    </Badge>
  );
};
