import { Badge, TextProps } from '@chakra-ui/react';

import { SText } from '~/shared/ui/SText';

type StatusProps = {
  children: string;
} & TextProps;

export const Status = (props: StatusProps) => {
  const { children, ...others } = props;
  return (
    <Badge
      colorScheme={children === 'Проект завершён' ? 'grayBage' : 'purpleBage'}
      variant="solid"
      textTransform="none"
      lineHeight="120%"
      width="fit-content"
      p="0.375rem 0.625rem"
      borderRadius="1.25rem"
      {...others}
    >
      <SText variant="caption" color="white" fontWeight="medium">
        {children}
      </SText>
    </Badge>
  );
};
